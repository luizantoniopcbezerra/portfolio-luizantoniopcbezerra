// V3 · Herói — energia de quadrinhos: azul + vermelho, halftone, sombras duras
const v3useState = React.useState;

function V3Toggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {["pt", "en"].map((l) => (
        <button key={l} onClick={() => setLang(l)} className="v3-display" style={{
          padding: "6px 14px", fontSize: 13, cursor: "pointer",
          border: "3px solid var(--v3-ink)",
          background: lang === l ? "var(--v3-blue)" : "var(--v3-paper)",
          color: lang === l ? "#fff" : "var(--v3-ink)",
          boxShadow: lang === l ? "none" : "3px 3px 0 var(--v3-ink)",
          transform: lang === l ? "translate(3px, 3px)" : "none",
          transition: "all .1s ease",
        }}>{l.toUpperCase()}</button>
      ))}
    </div>
  );
}

function V3Card({ p, t, lang, i }) {
  return (
    <div className="v3-card">
      <div style={{ height: 175, overflow: "hidden", borderBottom: "3px solid var(--v3-ink)", position: "relative" }}>
        {p.image
          ? <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          : <div className="v3-display" style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: i % 2 === 0 ? "var(--v3-blue)" : "var(--v3-red)", color: "#fff", fontSize: 60, position: "relative" }}>
              <div className="v3-halftone" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(#fff 1.3px, transparent 1.3px)", opacity: 0.22 }}></div>
              <span style={{ position: "relative" }}>{p.title.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("")}</span>
            </div>}
        <span className="v3-display" style={{ position: "absolute", top: 12, left: 12, background: i % 2 === 0 ? "var(--v3-blue)" : "var(--v3-red)", color: "#fff", padding: "4px 10px", fontSize: 12, border: "2px solid var(--v3-ink)" }}>
          #{String(i + 1).padStart(2, "0")}
        </span>
      </div>
      <div style={{ padding: "20px 20px 18px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <h3 className="v3-display" style={{ fontSize: 17, margin: 0, lineHeight: 1.2, textTransform: "uppercase" }}>{p.title}</h3>
        <p className="v3-body" style={{ fontSize: 14.5, lineHeight: 1.5, margin: 0, flex: 1, color: "#3d3d4a" }}>{p.desc[lang]}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.tags.map((tag) => (
            <span key={tag} className="v3-mono" style={{ fontSize: 11, padding: "2px 8px", border: "2px solid var(--v3-ink)", background: "#fff", fontWeight: 600 }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, paddingTop: 6 }}>
          <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="v3-display v3-btn" style={{ flex: 1 }}>{t.code}</a>
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="v3-display v3-btn v3-btn-red" style={{ flex: 1 }}>{t.live}</a>}
        </div>
      </div>
    </div>
  );
}

function V3() {
  const data = window.PORTFOLIO_DATA;
  const [lang, setLang] = v3useState("pt");
  const t = data.t[lang];

  return (
    <div className="v3-root" data-screen-label="V3 Herói">
      <style>{`
        .v3-root {
          --v3-paper: #f5f2ea;
          --v3-ink: #15152a;
          --v3-blue: #1f4fd8;
          --v3-red: #e23636;
          background: var(--v3-paper);
          color: var(--v3-ink);
          position: relative;
        }
        .v3-display { font-family: 'Archivo Black', sans-serif; letter-spacing: 0.01em; }
        .v3-body { font-family: 'Archivo', sans-serif; }
        .v3-mono { font-family: 'JetBrains Mono', monospace; }
        .v3-halftone {
          background-image: radial-gradient(var(--v3-ink) 1.3px, transparent 1.3px);
          background-size: 12px 12px;
          opacity: 0.13;
        }
        .v3-card {
          display: flex; flex-direction: column;
          background: #fff;
          border: 3px solid var(--v3-ink);
          box-shadow: 7px 7px 0 var(--v3-blue);
          transition: transform .12s ease, box-shadow .12s ease;
        }
        .v3-card:hover { transform: translate(-3px, -3px); box-shadow: 10px 10px 0 var(--v3-red); }
        .v3-btn {
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; padding: 9px 10px; text-decoration: none;
          color: var(--v3-ink); border: 3px solid var(--v3-ink); background: #fff;
          box-shadow: 3px 3px 0 var(--v3-ink);
          transition: all .1s ease; text-transform: uppercase;
        }
        .v3-btn:hover { transform: translate(3px, 3px); box-shadow: none; }
        .v3-btn-red { background: var(--v3-red); color: #fff; }
        .v3-navlink { font-size: 15px; font-weight: 600; color: var(--v3-ink); text-decoration: none; }
        .v3-navlink:hover { color: var(--v3-blue); }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 48px", borderBottom: "3px solid var(--v3-ink)", background: "#fff", position: "relative" }}>
        <span className="v3-display" style={{ fontSize: 17 }}>LUIZ A.<span style={{ color: "var(--v3-blue)" }}>PC BEZERRA</span></span>
        <div style={{ display: "flex", gap: 26, alignItems: "center" }}>
          <a href="#" onClick={(e) => e.preventDefault()} className="v3-body v3-navlink">{t.nav.about}</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="v3-body v3-navlink">{t.nav.projects}</a>
          {data.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="v3-mono v3-navlink" style={{ fontSize: 12, fontWeight: 500 }}>{s.label}</a>
          ))}
          <V3Toggle lang={lang} setLang={setLang} />
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "100px 48px 90px", position: "relative", overflow: "hidden" }}>
        <div className="v3-halftone" style={{ position: "absolute", top: 0, right: 0, width: 420, height: "100%", maskImage: "linear-gradient(to left, black, transparent)", WebkitMaskImage: "linear-gradient(to left, black, transparent)" }}></div>
        <div style={{ position: "relative", maxWidth: 900 }}>
          <span className="v3-mono" style={{ display: "inline-block", fontSize: 13, fontWeight: 600, padding: "4px 12px", border: "2px solid var(--v3-ink)", background: "#fff", boxShadow: "3px 3px 0 var(--v3-ink)", marginBottom: 26 }}>
            ★ {t.hello}
          </span>
          <h1 className="v3-display" style={{ fontSize: 62, lineHeight: 0.98, margin: "0 0 24px", textTransform: "uppercase" }}>
            Luiz Antônio<br />
            <span style={{ color: "var(--v3-blue)", textShadow: "5px 5px 0 rgba(226,54,54,0.35)" }}>PC Bezerra</span>
          </h1>
          <p className="v3-display" style={{ fontSize: 24, margin: "0 0 12px", color: "var(--v3-red)", textTransform: "uppercase" }}>{t.role}</p>
          <p className="v3-body" style={{ fontSize: 19, margin: "0 0 44px", color: "#3d3d4a", fontWeight: 500 }}>{t.tagline}</p>
          <a href={`mailto:${data.email}?subject=Contato via Portfolio`} className="v3-display" style={{
            display: "inline-block", fontSize: 16, padding: "18px 36px", background: "var(--v3-blue)", color: "#fff",
            textDecoration: "none", border: "3px solid var(--v3-ink)", boxShadow: "6px 6px 0 var(--v3-ink)",
            textTransform: "uppercase",
          }}>{t.cta} →</a>
        </div>
      </section>

      {/* Sobre */}
      <section style={{ padding: "80px 48px", background: "var(--v3-ink)", color: "#f5f2ea", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 52, alignItems: "center", maxWidth: 980, margin: "0 auto" }}>
          <div style={{ position: "relative" }}>
            <div className="v3-halftone" style={{ position: "absolute", inset: "-22px -22px 22px 22px", opacity: 0.3, backgroundImage: "radial-gradient(#f5f2ea 1.3px, transparent 1.3px)" }}></div>
            <img src={data.photo} alt={data.name} style={{ position: "relative", width: 240, height: 280, objectFit: "cover", border: "3px solid #f5f2ea", boxShadow: "8px 8px 0 var(--v3-red)" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <h2 className="v3-display" style={{ fontSize: 32, margin: 0, textTransform: "uppercase" }}>{t.aboutTitle}<span style={{ color: "var(--v3-red)" }}>.</span></h2>
            <p className="v3-body" style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.4, margin: 0 }}>{t.about1}</p>
            <p className="v3-body" style={{ fontSize: 17, lineHeight: 1.6, margin: 0, color: "#b9b9cc" }}>{t.about2}</p>
            <p className="v3-body" style={{ fontSize: 17, lineHeight: 1.6, margin: 0, color: "#b9b9cc" }}>{t.about3}</p>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section style={{ padding: "90px 48px 70px", position: "relative" }}>
        <h2 className="v3-display" style={{ fontSize: 44, textAlign: "center", margin: "0 0 50px", textTransform: "uppercase" }}>
          {t.projectsTitle}<span style={{ color: "var(--v3-blue)" }}>!</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 30, maxWidth: 1200, margin: "0 auto" }}>
          {data.projects.map((p, i) => (
            <V3Card key={p.title} p={p} t={t} lang={lang} i={i} />
          ))}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "3px dashed var(--v3-ink)", minHeight: 220, padding: 24 }}>
            <p className="v3-display" style={{ fontSize: 16, textAlign: "center", margin: 0, textTransform: "uppercase", lineHeight: 1.5 }}>
              {t.available} <span style={{ color: "var(--v3-red)" }}>★</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "3px solid var(--v3-ink)", padding: "24px 48px", background: "#fff", display: "flex", justifyContent: "space-between" }}>
        <p className="v3-mono" style={{ fontSize: 12, margin: 0, fontWeight: 600 }}>© 2026 LUIZ ANTÔNIO PC BEZERRA</p>

      </footer>
    </div>
  );
}

window.V3 = V3;
