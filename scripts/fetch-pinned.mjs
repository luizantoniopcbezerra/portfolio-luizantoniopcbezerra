import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';

var GITHUB_USER = 'luizantoniopcbezerra';
var OUTPUT = 'public/projects.json';

function cap(str) {
  return str.replace(/\b\w/g, function(c) { return c.toUpperCase(); });
}

function formatTitle(name) {
  return cap(name.replace(/[-_]/g, ' '));
}

function formatTag(word) {
  return cap(word.replace(/-/g, ' '));
}

async function main() {
  var token = process.env.GH_TOKEN;
  if (!token) {
    if (existsSync(OUTPUT)) {
      var existing = JSON.parse(readFileSync(OUTPUT, 'utf-8'));
      if (existing.projects && existing.projects.length > 0) {
        console.log('No GH_TOKEN — keeping existing ' + OUTPUT + ' (' + existing.projects.length + ' projects)');
        return;
      }
    }
    console.log('No GH_TOKEN and no existing projects. Skipping.');
    return;
  }

  console.log('Fetching pinned repos for ' + GITHUB_USER + '...');

  var query = [
    '{',
    '  user(login:"' + GITHUB_USER + '") {',
    '    pinnedItems(first:6,types:REPOSITORY) {',
    '      nodes {',
    '        ... on Repository {',
    '          name',
    '          description',
    '          url',
    '          primaryLanguage { name }',
    '          repositoryTopics(first:10) {',
    '            nodes { topic { name } }',
    '          }',
    '          openGraphImageUrl',
    '          owner { login }',
    '        }',
    '      }',
    '    }',
    '  }',
    '}'
  ].join('\n');

  var res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: query }),
  });

  var body = await res.text();

  if (!res.ok) {
    console.error('HTTP ' + res.status + ': ' + res.statusText);
    console.error('Response:', body);
    if (res.status === 401 || res.status === 403) {
      console.error('\nToken might be invalid or not have the right scopes.');
      console.error('Create a CLASSIC PAT (not fine-grained) with "public_repo" scope.');
      console.error('https://github.com/settings/tokens/new?scopes=public_repo');
    }
    process.exit(1);
  }

  var json = JSON.parse(body);

  if (json.errors) {
    console.error('GraphQL errors:');
    json.errors.forEach(function(e) { console.error('  -', e.message); });
    process.exit(1);
  }

  var repos = (json.data?.user?.pinnedItems?.nodes || []).filter(Boolean);

  if (repos.length === 0) {
    console.log('No pinned repos found. Make sure you have pinned repos on your GitHub profile.');
    console.log('Go to https://github.com/' + GITHUB_USER + ' and pin your repos.');
    process.exit(1);
  }

  var projects = repos.map(function(r) {
    var tags = [];
    if (r.primaryLanguage?.name) tags.push(r.primaryLanguage.name);
    if (r.repositoryTopics?.nodes) {
      r.repositoryTopics.nodes.forEach(function(t) {
        if (t.topic?.name) tags.push(formatTag(t.topic.name));
      });
    }

    var title = formatTitle(r.name);
    var desc = r.description || '';
    var owner = r.owner?.login || GITHUB_USER;

    return {
      title: { pt: title, en: title },
      desc: { pt: desc, en: desc },
      tags: { pt: tags.join(' \u00b7 '), en: tags.join(' \u00b7 ') },
      url: r.url,
      img: r.openGraphImageUrl || '',
      githubRepo: owner + '/' + r.name,
    };
  });

  if (!existsSync('public')) mkdirSync('public', { recursive: true });
  writeFileSync(OUTPUT, JSON.stringify({ projects: projects }, null, 2), 'utf-8');

  console.log('Done: ' + projects.length + ' pinned repos \u2192 ' + OUTPUT);
}

main().catch(function(err) {
  console.error('Error:', err.message);
  process.exit(1);
});
