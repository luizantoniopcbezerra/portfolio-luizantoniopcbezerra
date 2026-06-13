// V2 · Noite — navy profundo + azul elétrico, moderno e suave
const v2useState = React.useState;

function V2Toggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", gap: 2, background: "rgba(255,255,255,0.05)", borderRadius: 999, padding: 3, border: "1px solid rgba(255,255,255,0.08)" }}>
      {["pt", "en"].map((l) => (
        <button key={l} onClick={() => setLang(l)} className="v2-mono" style={{
          padding: "4px 14px", fontSize: 11, borderRadius: 999, border: "none", cursor: "pointer", letterSpacing: "0.08em",
          background: lang === l ? "var(--v2-accent)" : "transparent",
          color: lang === l ? "#020610" : "var(--v2-dim)",
          fontWeight: 600,
        }}>{l.toUpperCase()}</button>
      ))}
    </div>
  );
}

function V2Card({ p, t, lang, featured }) {
  return (
    <div className="v2-card" style={featured ? { gridColumn: "1 / -1", display: "grid", gridTemplateColumns: "1.2fr 1fr" } : {}}>
      <div style={{ height: featured ? "100%" : 190, minHeight: featured ? 280 : undefined, overflow: "hidden", position: "relative" }}>
        <img src={p.image} alt={p.title} className="v2-card-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(5,10,22,0) 50%, rgba(5,10,22,0.55))" }}></div>
      </div>
      <div style={{ padding: featured ? "34px 36px" : "22px 24px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
        <h3 className="v2-sans" style={{ fontSize: featured ? 26 : 19, fontWeight: 600, margin: 0, letterSpacing: "-0.01em" }}>{p.title}</h3>
        <p className="v2-sans" style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--v2-dim)", margin: 0, flex: 1 }}>{p.desc[lang]}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {p.tags.map((tag) => (
            <span key={tag} className="v2-mono" style={{ fontSize: 11, letterSpacing: "0.04em", padding: "3px 10px", borderRadius: 999, color: "var(--v2-accent)", background: "rgba(72,156,255,0.10)", border: "1px solid rgba(72,156,255,0.22)" }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 18, paddingTop: 8 }}>
          <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="v2-mono v2-link">{t.code} ↗</a>
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="v2-mono v2-link" style={{ color: "var(--v2-accent)" }}>{t.live} ↗</a>}
        </div>
      </div>
    </div>
  );
}

function V2() {
  const data = window.PORTFOLIO_DATA;
  const [lang, setLang] = v2useState("pt");
  const t = data.t[lang];

  return (
    <div className="v2-root" data-screen-label="V2 Noite">
      <style>{`
        .v2-root {
          --v2-bg: #050a16;
          --v2-accent: #489cff;
          --v2-fg: #e8eefb;
          --v2-dim: #8b9bb8;
          background: var(--v2-bg);
          color: var(--v2-fg);
          position: relative;
          overflow: hidden;
        }
        .v2-sans { font-family: 'Space Grotesk', sans-serif; }
        .v2-mono { font-family: 'JetBrains Mono', monospace; }
        .v2-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          overflow: hidden;
          display: flex; flex-direction: column;
          transition: border-color .2s ease, transform .2s ease, box-shadow .2s ease;
        }
        .v2-card:hover {
          border-color: rgba(72,156,255,0.45);
          transform: translateY(-4px);
          box-shadow: 0 18px 50px rgba(2,8,20,0.6), 0 0 0 1px rgba(72,156,255,0.15);
        }
        .v2-card-img { transition: transform .35s ease; }
        .v2-card:hover .v2-card-img { transform: scale(1.04); }
        .v2-link { font-size: 12px; letter-spacing: 0.05em; text-decoration: none; color: var(--v2-fg); border-bottom: 1px solid transparent; padding-bottom: 2px; transition: border-color .15s ease; }
        .v2-link:hover { border-color: currentColor; }
        .v2-navlink { font-size: 14px; color: var(--v2-dim); text-decoration: none; transition: color .15s ease; }
        .v2-navlink:hover { color: var(--v2-fg); }
        .v2-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--v2-accent); color: #020610;
          font-weight: 600; font-size: 15px; text-decoration: none;
          padding: 14px 28px; border-radius: 12px;
          box-shadow: 0 0 40px rgba(72,156,255,0.35);
          transition: transform .15s ease, box-shadow .15s ease;
        }
        .v2-cta:hover { transform: translateY(-2px); box-shadow: 0 0 60px rgba(72,156,255,0.5); }
      `}</style>

      {/* Glow ambiente */}
      <div style={{ position: "absolute", top: -220, left: "50%", transform: "translateX(-50%)", width: 900, height: 560, background: "radial-gradient(ellipse at center, rgba(56,130,246,0.18), transparent 65%)", pointerEvents: "none" }}></div>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 56px", position: "relative" }}>
        <span className="v2-sans" style={{ fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em" }}>luiz<span style={{ color: "var(--v2-accent)" }}>.bezerra</span></span>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <a href="#" onClick={(e) => e.preventDefault()} className="v2-sans v2-navlink">{t.nav.about}</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="v2-sans v2-navlink">{t.nav.projects}</a>
          <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.12)" }}></div>
          {data.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="v2-mono v2-navlink" style={{ fontSize: 12 }}>{s.label}</a>
          ))}
          <V2Toggle lang={lang} setLang={setLang} />
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "120px 56px 110px", position: "relative" }}>
        <p className="v2-mono" style={{ fontSize: 14, color: "var(--v2-accent)", letterSpacing: "0.12em", margin: "0 0 22px" }}>// {t.hello}</p>
        <h1 className="v2-sans" style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.98, margin: "0 0 28px" }}>
          Luiz<br />Bezerra<span style={{ color: "var(--v2-accent)" }}>.</span>
        </h1>
        <p className="v2-sans" style={{ fontSize: 26, fontWeight: 500, margin: "0 0 10px", color: "var(--v2-fg)" }}>{t.role}</p>
        <p className="v2-sans" style={{ fontSize: 17, color: "var(--v2-dim)", margin: "0 0 48px" }}>{t.tagline}</p>
        <a href={`mailto:${data.email}?subject=Contato via Portfolio`} className="v2-sans v2-cta">{t.cta} →</a>
      </section>

      {/* Sobre */}
      <section style={{ padding: "0 56px 110px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", gap: 56, alignItems: "center", maxWidth: 980 }}>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: -18, background: "radial-gradient(ellipse at center, rgba(72,156,255,0.25), transparent 70%)", borderRadius: 24 }}></div>
            <img src={data.photo} alt="Luiz Bezerra" style={{ position: "relative", width: 260, height: 300, objectFit: "cover", borderRadius: 20, border: "1px solid rgba(72,156,255,0.35)" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <p className="v2-mono" style={{ fontSize: 13, color: "var(--v2-accent)", letterSpacing: "0.12em", margin: 0 }}>// {t.aboutTitle}</p>
            <p className="v2-sans" style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25, margin: 0 }}>{t.about1}</p>
            <p className="v2-sans" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--v2-dim)", margin: 0 }}>{t.about2}</p>
            <p className="v2-sans" style={{ fontSize: 17, lineHeight: 1.6, color: "var(--v2-dim)", margin: 0 }}>{t.about3}</p>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section style={{ padding: "0 56px 80px", position: "relative" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 36 }}>
          <h2 className="v2-sans" style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}>{t.projectsTitle}</h2>
          <p className="v2-mono" style={{ fontSize: 12, color: "var(--v2-dim)", margin: 0 }}>05 — 2026</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {data.projects.map((p, i) => (
            <V2Card key={p.title} p={p} t={t} lang={lang} featured={i === 0} />
          ))}
        </div>
        <p className="v2-mono" style={{ fontSize: 13, color: "var(--v2-accent)", textAlign: "center", margin: "48px 0 0", letterSpacing: "0.08em" }}>● {t.available}</p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.07)", padding: "26px 56px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p className="v2-mono" style={{ fontSize: 12, color: "var(--v2-dim)", margin: 0 }}>© 2026 Luiz Bezerra</p>
        <p className="v2-mono" style={{ fontSize: 12, color: "var(--v2-dim)", margin: 0 }}>{t.footer}</p>
      </footer>
    </div>
  );
}

window.V2 = V2;
