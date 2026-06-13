// V6 · Terminal Dark — linguagem visual de desktop Linux: barra superior, janela de terminal,
// fundo aubergine/carvão, laranja como acento, mono. Original, sem marca.
const v6useState = React.useState;

function V6Dot({ c }) {
  return <span style={{ width: 12, height: 12, borderRadius: "50%", background: c, display: "inline-block" }}></span>;
}

function V6Toggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", border: "1px solid var(--v6-line)", borderRadius: 7, overflow: "hidden" }}>
      {["pt", "en"].map((l) => (
        <button key={l} onClick={() => setLang(l)} className="v6-mono" style={{
          padding: "6px 13px", fontSize: 12, cursor: "pointer", border: "none",
          background: lang === l ? "var(--v6-orange)" : "transparent",
          color: lang === l ? "#1b181f" : "var(--v6-muted)",
          fontWeight: 600, transition: "all .15s ease",
        }}>{l.toUpperCase()}</button>
      ))}
    </div>
  );
}

function V6Card({ p, t, lang, i }) {
  return (
    <div className="v6-card">
      <div className="v6-cardbar">
        <V6Dot c="#e0603a" /><V6Dot c="#d9a441" /><V6Dot c="#5aa86f" />
        <span className="v6-mono" style={{ marginLeft: 8, fontSize: 12, color: "var(--v6-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>~/projects/{String(i + 1).padStart(2, "0")}</span>
      </div>
      <div style={{ height: 165, overflow: "hidden", borderBottom: "1px solid var(--v6-line)" }}>
        {p.image
          ? <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          : <div className="v6-mono" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "linear-gradient(135deg, rgba(119,33,111,0.4), rgba(232,97,44,0.22))", color: "var(--v6-text)", fontSize: 15 }}>
              <span style={{ color: "var(--v6-orange)" }}>$</span>&nbsp;cat&nbsp;{p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
            </div>}
      </div>
      <div style={{ padding: "18px 18px 16px", display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
        <h3 className="v6-sans" style={{ fontSize: 17, margin: 0, lineHeight: 1.25, fontWeight: 600, color: "var(--v6-text)" }}>{p.title}</h3>
        <p className="v6-sans" style={{ fontSize: 14, lineHeight: 1.55, margin: 0, flex: 1, color: "var(--v6-muted)" }}>{p.desc[lang]}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.tags.map((tag) => (
            <span key={tag} className="v6-mono" style={{ fontSize: 11, padding: "2px 9px", borderRadius: 20, border: "1px solid var(--v6-line)", color: "var(--v6-aubergine-text)", background: "rgba(119,33,111,0.16)" }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 9, paddingTop: 4 }}>
          <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="v6-mono v6-btn" style={{ flex: 1 }}>{t.code}</a>
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="v6-mono v6-btn v6-btn-orange" style={{ flex: 1 }}>{t.live}</a>}
        </div>
      </div>
    </div>
  );
}

function V6() {
  const data = window.PORTFOLIO_DATA;
  const [lang, setLang] = v6useState("pt");
  const t = data.t[lang];

  return (
    <div className="v6-root" data-screen-label="V6 Terminal Dark">
      <style>{`
        .v6-root {
          --v6-bg: #211d26;
          --v6-panel: #2c2733;
          --v6-elev: #322c3a;
          --v6-line: rgba(255,255,255,0.10);
          --v6-text: #f3eef2;
          --v6-muted: #a89bb0;
          --v6-orange: #e8612c;
          --v6-aubergine: #77216f;
          --v6-aubergine-text: #d9a6d3;
          background: var(--v6-bg);
          color: var(--v6-text);
        }
        .v6-sans { font-family: 'Archivo', sans-serif; }
        .v6-mono { font-family: 'JetBrains Mono', monospace; }
        .v6-btn {
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; padding: 9px 10px; text-decoration: none; border-radius: 7px;
          color: var(--v6-text); border: 1px solid var(--v6-line); background: var(--v6-elev);
          font-weight: 500; transition: all .15s ease;
        }
        .v6-btn:hover { border-color: var(--v6-orange); color: var(--v6-orange); }
        .v6-btn-orange { background: var(--v6-orange); color: #1b181f; border-color: var(--v6-orange); font-weight: 600; }
        .v6-btn-orange:hover { background: #f1764a; color: #1b181f; }
        .v6-card {
          display: flex; flex-direction: column;
          background: var(--v6-panel);
          border: 1px solid var(--v6-line); border-radius: 11px; overflow: hidden;
          box-shadow: 0 18px 40px -22px rgba(0,0,0,0.7);
          transition: transform .16s ease, border-color .16s ease;
        }
        .v6-card:hover { transform: translateY(-4px); border-color: rgba(232,97,44,0.5); }
        .v6-cardbar { display: flex; align-items: center; gap: 7px; padding: 10px 14px; background: var(--v6-elev); border-bottom: 1px solid var(--v6-line); }
        .v6-navlink { font-size: 14px; color: var(--v6-muted); text-decoration: none; transition: color .15s ease; }
        .v6-navlink:hover { color: var(--v6-orange); }
      `}</style>

      {/* Top panel */}
      <div className="v6-mono" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "7px 20px", background: "#16131a", borderBottom: "1px solid var(--v6-line)", fontSize: 12, color: "var(--v6-muted)" }}>
        <span style={{ color: "var(--v6-text)", fontWeight: 600 }}>● luizantoniopcbezerra</span>
        <span>full-stack · disponível</span>
        <span>{lang === "pt" ? "qua 13 jun · 14:02" : "Wed Jun 13 · 14:02"}</span>
      </div>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 48px", background: "var(--v6-panel)", borderBottom: "1px solid var(--v6-line)" }}>
        <span className="v6-mono" style={{ fontSize: 16, fontWeight: 600 }}><span style={{ color: "var(--v6-orange)" }}>$</span> luizantoniopc<span style={{ color: "var(--v6-muted)" }}>bezerra</span></span>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a href="#" onClick={(e) => e.preventDefault()} className="v6-sans v6-navlink">{t.nav.about}</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="v6-sans v6-navlink">{t.nav.projects}</a>
          {data.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="v6-mono v6-navlink" style={{ fontSize: 12.5 }}>{s.label}</a>
          ))}
          <V6Toggle lang={lang} setLang={setLang} />
        </div>
      </nav>

      {/* Hero — terminal window */}
      <section style={{ padding: "70px 48px 64px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: 920, background: "var(--v6-panel)", border: "1px solid var(--v6-line)", borderRadius: 13, overflow: "hidden", boxShadow: "0 40px 80px -40px rgba(0,0,0,0.8)" }}>
          <div className="v6-cardbar" style={{ padding: "12px 16px" }}>
            <V6Dot c="#e0603a" /><V6Dot c="#d9a441" /><V6Dot c="#5aa86f" />
            <span className="v6-mono" style={{ marginLeft: 10, fontSize: 12.5, color: "var(--v6-muted)" }}>luiz@dev: ~/whoami</span>
          </div>
          <div style={{ padding: "40px 44px 46px" }}>
            <p className="v6-mono" style={{ fontSize: 14, margin: "0 0 14px", color: "var(--v6-aubergine-text)" }}>
              <span style={{ color: "var(--v6-orange)" }}>$</span> {t.hello.replace(/[!]/g, "")} <span style={{ color: "var(--v6-orange)" }}>_</span>
            </p>
            <h1 className="v6-sans" style={{ fontSize: 56, lineHeight: 1.02, margin: "0 0 16px", fontWeight: 600, letterSpacing: "-0.02em" }}>
              Luiz Antônio<br /><span style={{ color: "var(--v6-orange)" }}>PC Bezerra</span>
            </h1>
            <p className="v6-mono" style={{ fontSize: 18, margin: "0 0 10px", color: "var(--v6-text)" }}>{t.role}</p>
            <p className="v6-sans" style={{ fontSize: 17, margin: "0 0 34px", color: "var(--v6-muted)", maxWidth: 560 }}>{t.tagline}</p>
            <a href={`mailto:${data.email}?subject=Contato via Portfolio`} className="v6-mono" style={{
              display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14, padding: "13px 26px", borderRadius: 8,
              background: "var(--v6-orange)", color: "#1b181f", textDecoration: "none", fontWeight: 600,
            }}><span>$</span> {t.cta}</a>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section style={{ padding: "20px 48px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "230px 1fr", gap: 48, alignItems: "center", maxWidth: 980, margin: "0 auto", background: "var(--v6-panel)", border: "1px solid var(--v6-line)", borderRadius: 13, padding: 40 }}>
          <div style={{ borderRadius: 11, overflow: "hidden", border: "1px solid var(--v6-line)", boxShadow: "0 0 0 4px rgba(119,33,111,0.25)" }}>
            <img src={data.photo} alt={data.name} style={{ width: 230, height: 270, objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h2 className="v6-mono" style={{ fontSize: 24, margin: 0, fontWeight: 600 }}><span style={{ color: "var(--v6-orange)" }}>#</span> {t.aboutTitle}</h2>
            <p className="v6-sans" style={{ fontSize: 21, fontWeight: 600, lineHeight: 1.4, margin: 0, color: "var(--v6-text)" }}>{t.about1}</p>
            <p className="v6-sans" style={{ fontSize: 16, lineHeight: 1.65, margin: 0, color: "var(--v6-muted)" }}>{t.about2}</p>
            <p className="v6-sans" style={{ fontSize: 16, lineHeight: 1.65, margin: 0, color: "var(--v6-muted)" }}>{t.about3}</p>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section style={{ padding: "0 48px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h2 className="v6-mono" style={{ fontSize: 30, margin: "0 0 8px", fontWeight: 600 }}><span style={{ color: "var(--v6-orange)" }}>$</span> ls ~/{t.projectsTitle.toLowerCase().replace(/\s+/g, "_")}</h2>
          <p className="v6-mono" style={{ fontSize: 13, margin: "0 0 36px", color: "var(--v6-muted)" }}>{data.projects.length} {lang === "pt" ? "repositórios encontrados" : "repositories found"}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
            {data.projects.map((p, i) => (
              <V6Card key={p.title} p={p} t={t} lang={lang} i={i} />
            ))}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed var(--v6-line)", borderRadius: 11, minHeight: 220, padding: 24 }}>
              <p className="v6-mono" style={{ fontSize: 14, textAlign: "center", margin: 0, lineHeight: 1.6, color: "var(--v6-muted)" }}>
                <span style={{ color: "var(--v6-orange)" }}>+</span> {t.available}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--v6-line)", padding: "22px 48px", background: "#16131a", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p className="v6-mono" style={{ fontSize: 12, margin: 0, color: "var(--v6-muted)" }}>© 2026 luiz antônio pc bezerra</p>
        <p className="v6-mono" style={{ fontSize: 12, margin: 0, color: "var(--v6-muted)" }}>{data.email}</p>
      </footer>
    </div>
  );
}

window.V6 = V6;
