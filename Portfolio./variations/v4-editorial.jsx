// V4 · Editorial — claro, tinta azul, grade suíça, projetos em lista
const v4useState = React.useState;

function V4Toggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", gap: 14 }}>
      {["pt", "en"].map((l) => (
        <button key={l} onClick={() => setLang(l)} className="v4-mono" style={{
          padding: 0, fontSize: 12, letterSpacing: "0.1em", border: "none", background: "none", cursor: "pointer",
          color: lang === l ? "var(--v4-blue)" : "var(--v4-dim)",
          borderBottom: lang === l ? "1px solid var(--v4-blue)" : "1px solid transparent",
        }}>{l.toUpperCase()}</button>
      ))}
    </div>
  );
}

function V4Row({ p, t, lang, i }) {
  return (
    <div className="v4-row">
      <span className="v4-mono" style={{ fontSize: 13, color: "var(--v4-dim)" }}>{String(i + 1).padStart(2, "0")}</span>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <h3 className="v4-serif" style={{ fontSize: 30, fontWeight: 400, margin: 0, lineHeight: 1.1 }}>{p.title}</h3>
        <p className="v4-sans" style={{ fontSize: 15, lineHeight: 1.55, color: "var(--v4-dim)", margin: 0, maxWidth: 520 }}>{p.desc[lang]}</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 2 }}>
          {p.tags.map((tag) => (
            <span key={tag} className="v4-mono" style={{ fontSize: 11, letterSpacing: "0.05em", color: "var(--v4-blue)" }}>{tag}</span>
          )).reduce((acc, el, idx) => (idx === 0 ? [el] : [...acc, <span key={`s${idx}`} className="v4-mono" style={{ fontSize: 11, color: "var(--v4-hair)" }}>/</span>, el]), [])}
        </div>
        <div style={{ display: "flex", gap: 22, marginTop: 6 }}>
          <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="v4-mono v4-link">{t.code} ↗</a>
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="v4-mono v4-link" style={{ color: "var(--v4-blue)" }}>{t.live} ↗</a>}
        </div>
      </div>
      <div className="v4-thumb">
        <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </div>
  );
}

function V4() {
  const data = window.PORTFOLIO_DATA;
  const [lang, setLang] = v4useState("pt");
  const t = data.t[lang];

  return (
    <div className="v4-root" data-screen-label="V4 Editorial">
      <style>{`
        .v4-root {
          --v4-bg: #faf9f6;
          --v4-ink: #1a2030;
          --v4-blue: #2447c7;
          --v4-dim: #6b7180;
          --v4-hair: #d9d6cd;
          background: var(--v4-bg);
          color: var(--v4-ink);
        }
        .v4-serif { font-family: 'Instrument Serif', serif; }
        .v4-sans { font-family: 'Archivo', sans-serif; }
        .v4-mono { font-family: 'JetBrains Mono', monospace; }
        .v4-link { font-size: 12px; letter-spacing: 0.05em; text-decoration: none; color: var(--v4-ink); border-bottom: 1px solid var(--v4-hair); padding-bottom: 2px; transition: border-color .15s ease; }
        .v4-link:hover { border-color: currentColor; }
        .v4-row {
          display: grid; grid-template-columns: 48px 1fr 220px;
          gap: 32px; align-items: center;
          padding: 36px 0; border-top: 1px solid var(--v4-hair);
          transition: background .15s ease;
        }
        .v4-row:hover { background: rgba(36,71,199,0.025); }
        .v4-thumb {
          width: 220px; height: 140px; overflow: hidden;
          border: 1px solid var(--v4-hair);
          filter: saturate(0.85);
          transition: filter .2s ease, transform .2s ease;
        }
        .v4-row:hover .v4-thumb { filter: saturate(1); transform: translateY(-2px); }
        .v4-navlink { font-size: 13px; color: var(--v4-ink); text-decoration: none; letter-spacing: 0.02em; }
        .v4-navlink:hover { color: var(--v4-blue); }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "26px 64px", borderBottom: "1px solid var(--v4-hair)" }}>
        <span className="v4-serif" style={{ fontSize: 20 }}>Luiz Bezerra</span>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <a href="#" onClick={(e) => e.preventDefault()} className="v4-sans v4-navlink">{t.nav.about}</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="v4-sans v4-navlink">{t.nav.projects}</a>
          {data.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="v4-mono v4-navlink" style={{ fontSize: 11, letterSpacing: "0.06em" }}>{s.label}</a>
          ))}
          <V4Toggle lang={lang} setLang={setLang} />
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "110px 64px 100px", display: "grid", gridTemplateColumns: "1fr 300px", gap: 64, alignItems: "end" }}>
        <div>
          <p className="v4-mono" style={{ fontSize: 13, letterSpacing: "0.12em", color: "var(--v4-blue)", margin: "0 0 28px", textTransform: "uppercase" }}>{t.hello}</p>
          <h1 className="v4-serif" style={{ fontSize: 96, fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.015em", margin: "0 0 30px" }}>
            Luiz<br /><em style={{ color: "var(--v4-blue)" }}>Bezerra</em>
          </h1>
          <p className="v4-sans" style={{ fontSize: 22, margin: "0 0 8px", fontWeight: 500 }}>{t.role}</p>
          <p className="v4-sans" style={{ fontSize: 16, color: "var(--v4-dim)", margin: "0 0 44px" }}>{t.tagline}</p>
          <a href={`mailto:${data.email}?subject=Contato via Portfolio`} className="v4-sans" style={{
            display: "inline-block", fontSize: 15, fontWeight: 500, padding: "14px 30px",
            background: "var(--v4-blue)", color: "#faf9f6", textDecoration: "none", borderRadius: 2,
          }}>{t.cta} →</a>
        </div>
        <div>
          <img src={data.photo} alt="Luiz Bezerra" style={{ width: 300, height: 360, objectFit: "cover", border: "1px solid var(--v4-hair)", filter: "saturate(0.9)" }} />
          <p className="v4-mono" style={{ fontSize: 11, color: "var(--v4-dim)", margin: "12px 0 0", letterSpacing: "0.06em" }}>BRASIL — SC · 2026</p>
        </div>
      </section>

      {/* Sobre */}
      <section style={{ padding: "0 64px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 64, borderTop: "1px solid var(--v4-ink)", paddingTop: 40 }}>
          <p className="v4-mono" style={{ fontSize: 12, letterSpacing: "0.12em", color: "var(--v4-dim)", margin: 0, textTransform: "uppercase" }}>01 — {t.aboutTitle}</p>
          <div style={{ maxWidth: 640 }}>
            <p className="v4-serif" style={{ fontSize: 34, lineHeight: 1.25, margin: "0 0 24px" }}>{t.about1}</p>
            <p className="v4-sans" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--v4-dim)", margin: "0 0 12px" }}>{t.about2}</p>
            <p className="v4-sans" style={{ fontSize: 17, lineHeight: 1.65, color: "var(--v4-dim)", margin: 0 }}>{t.about3}</p>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section style={{ padding: "0 64px 60px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 64, borderTop: "1px solid var(--v4-ink)", paddingTop: 40, marginBottom: 12 }}>
          <p className="v4-mono" style={{ fontSize: 12, letterSpacing: "0.12em", color: "var(--v4-dim)", margin: 0, textTransform: "uppercase" }}>02 — {t.projectsTitle}</p>
          <p className="v4-mono" style={{ fontSize: 12, color: "var(--v4-dim)", margin: 0, justifySelf: "end" }}>({data.projects.length})</p>
        </div>
        <div>
          {data.projects.map((p, i) => (
            <V4Row key={p.title} p={p} t={t} lang={lang} i={i} />
          ))}
        </div>
        <p className="v4-mono" style={{ fontSize: 12, letterSpacing: "0.1em", color: "var(--v4-blue)", margin: "40px 0 0", borderTop: "1px solid var(--v4-hair)", paddingTop: 28 }}>
          ● {t.available.toUpperCase()}
        </p>
      </section>

      {/* Footer */}
      <footer style={{ padding: "24px 64px 32px", display: "flex", justifyContent: "space-between", borderTop: "1px solid var(--v4-hair)" }}>
        <p className="v4-mono" style={{ fontSize: 11, color: "var(--v4-dim)", margin: 0 }}>© 2026 LUIZ BEZERRA</p>
        <p className="v4-mono" style={{ fontSize: 11, color: "var(--v4-dim)", margin: 0 }}>{t.footer}</p>
      </footer>
    </div>
  );
}

window.V4 = V4;
