// V1 · CRT Azul — evolução do tema retrô atual com fósforo azul
const { useState, useEffect } = React;

function V1Typewriter({ text, speed = 70 }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(0);
    const id = setInterval(() => setN((v) => (v < text.length ? v + 1 : v)), speed);
    return () => clearInterval(id);
  }, [text]);
  return (
    <span>
      {text.slice(0, n)}
      <span className="v1-blink">_</span>
    </span>
  );
}

function V1LangToggle({ lang, setLang }) {
  return (
    <div style={{ display: "flex", gap: 0, border: "2px solid var(--v1-line)", clipPath: "var(--v1-pixel)" }}>
      {["pt", "en"].map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="v1-mono"
          style={{
            padding: "4px 12px",
            fontSize: 18,
            border: "none",
            cursor: "pointer",
            background: lang === l ? "var(--v1-accent)" : "transparent",
            color: lang === l ? "#04101f" : "var(--v1-dim)",
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function V1Card({ p, t, lang }) {
  return (
    <div className="v1-card">
      <div style={{ height: 170, overflow: "hidden", borderBottom: "2px solid var(--v1-line)", position: "relative" }}>
        <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.7) contrast(1.05)" }} />
        <div className="v1-img-tint"></div>
      </div>
      <div style={{ padding: "20px 20px 16px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <h3 className="v1-pixel" style={{ fontSize: 13, color: "var(--v1-accent)", lineHeight: 1.6, margin: 0 }}>
          {"> "}{p.title}
        </h3>
        <p className="v1-mono" style={{ fontSize: 19, color: "var(--v1-dim)", lineHeight: 1.35, margin: 0, flex: 1 }}>
          {p.desc[lang]}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {p.tags.map((tag) => (
            <span key={tag} className="v1-mono" style={{ fontSize: 16, padding: "1px 8px", background: "rgba(77,163,255,0.10)", color: "var(--v1-accent)", border: "1px solid rgba(77,163,255,0.25)" }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, paddingTop: 10, borderTop: "1px solid rgba(77,163,255,0.18)" }}>
          <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="v1-mono v1-btn" style={{ flex: 1 }}>
            [{t.code}]
          </a>
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="v1-mono v1-btn v1-btn-solid" style={{ flex: 1 }}>
              [{t.live}]
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function V1() {
  const data = window.PORTFOLIO_DATA;
  const [lang, setLang] = useState("pt");
  const t = data.t[lang];

  return (
    <div className="v1-root" data-screen-label="V1 CRT Azul">
      <style>{`
        .v1-root {
          --v1-bg: #060b14;
          --v1-panel: #081020;
          --v1-line: #2a4a73;
          --v1-accent: #4da3ff;
          --v1-fg: #d8e6f7;
          --v1-dim: #7e97b5;
          --v1-pixel: polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px));
          background: var(--v1-bg);
          color: var(--v1-fg);
          position: relative;
          min-height: 100%;
        }
        .v1-root::after {
          content: '';
          position: absolute; inset: 0;
          background: repeating-linear-gradient(0deg, rgba(120,180,255,0.04) 0px, transparent 1px, transparent 3px);
          pointer-events: none;
        }
        .v1-pixel { font-family: 'Press Start 2P', cursive; }
        .v1-mono { font-family: 'VT323', monospace; }
        .v1-blink { animation: v1blink 1s step-end infinite; color: var(--v1-accent); }
        @keyframes v1blink { 0%,50% { opacity: 1; } 51%,100% { opacity: 0; } }
        .v1-glow { text-shadow: 0 0 18px rgba(77,163,255,0.55), 0 0 50px rgba(77,163,255,0.25); }
        .v1-card {
          display: flex; flex-direction: column;
          border: 2px solid var(--v1-line);
          clip-path: var(--v1-pixel);
          background: var(--v1-panel);
          transition: transform .15s ease, border-color .15s ease;
        }
        .v1-card:hover { border-color: var(--v1-accent); transform: translateY(-3px); }
        .v1-img-tint { position: absolute; inset: 0; background: rgba(20,60,120,0.22); mix-blend-mode: multiply; }
        .v1-btn {
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; padding: 6px 10px; text-decoration: none;
          color: var(--v1-fg); border: 2px solid var(--v1-line);
          transition: all .12s ease;
        }
        .v1-btn:hover { border-color: var(--v1-accent); color: var(--v1-accent); }
        .v1-btn-solid { background: var(--v1-accent); color: #04101f; border-color: var(--v1-accent); }
        .v1-btn-solid:hover { background: transparent; color: var(--v1-accent); }
        .v1-navlink { text-decoration: none; color: var(--v1-fg); font-size: 20px; }
        .v1-navlink:hover { color: var(--v1-accent); }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 40px", borderBottom: "2px solid var(--v1-line)", position: "relative", zIndex: 1 }}>
        <span className="v1-pixel" style={{ fontSize: 12, color: "var(--v1-accent)" }}>{"> "}Luiz Bezerra</span>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <a href="#" className="v1-mono v1-navlink" onClick={(e) => e.preventDefault()}>{t.nav.about}</a>
          <a href="#" className="v1-mono v1-navlink" onClick={(e) => e.preventDefault()}>{t.nav.projects}</a>
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          {data.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="v1-mono v1-navlink" style={{ fontSize: 18, color: "var(--v1-dim)" }}>{s.label}</a>
          ))}
          <V1LangToggle lang={lang} setLang={setLang} />
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "110px 40px 90px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p className="v1-mono" style={{ fontSize: 22, color: "var(--v1-dim)", margin: "0 0 18px" }}>{"> "}{t.hello}</p>
        <h1 className="v1-pixel v1-glow" style={{ fontSize: 52, margin: "0 0 26px", color: "var(--v1-fg)" }}>Luiz Bezerra</h1>
        <p className="v1-mono" style={{ fontSize: 30, color: "var(--v1-accent)", margin: "0 0 18px", minHeight: 36 }}>
          <V1Typewriter text={t.role} />
        </p>
        <p className="v1-mono" style={{ fontSize: 23, color: "var(--v1-dim)", margin: "0 0 44px" }}>{t.tagline}</p>
        <a
          href={`mailto:${data.email}?subject=Contato via Portfolio`}
          className="v1-pixel"
          style={{ display: "inline-block", fontSize: 12, padding: "18px 34px", background: "var(--v1-accent)", color: "#04101f", textDecoration: "none", clipPath: "var(--v1-pixel)", boxShadow: "0 0 30px rgba(77,163,255,0.35)" }}
        >
          {t.cta} →
        </a>
      </section>

      {/* Sobre — janela de terminal */}
      <section style={{ padding: "0 40px 90px", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", border: "2px solid var(--v1-line)", clipPath: "var(--v1-pixel)", background: "var(--v1-panel)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", borderBottom: "2px solid var(--v1-line)" }}>
            <span style={{ width: 10, height: 10, background: "var(--v1-line)" }}></span>
            <span style={{ width: 10, height: 10, background: "var(--v1-line)" }}></span>
            <span style={{ width: 10, height: 10, background: "var(--v1-accent)" }}></span>
            <span className="v1-mono" style={{ fontSize: 17, color: "var(--v1-dim)", marginLeft: 8 }}>~/luiz-bezerra/{lang === "pt" ? "sobre" : "about"}.txt</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 36, padding: 36, alignItems: "center" }}>
            <div style={{ width: 200, height: 200, border: "2px solid var(--v1-accent)", clipPath: "var(--v1-pixel)", overflow: "hidden", boxShadow: "0 0 26px rgba(77,163,255,0.25)" }}>
              <img src={data.photo} alt="Luiz Bezerra" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "saturate(0.75)" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <h2 className="v1-pixel" style={{ fontSize: 18, color: "var(--v1-accent)", margin: "0 0 6px" }}>{"> "}{t.aboutTitle}</h2>
              <p className="v1-mono" style={{ fontSize: 23, margin: 0, lineHeight: 1.3 }}>{t.about1}</p>
              <p className="v1-mono" style={{ fontSize: 21, margin: 0, lineHeight: 1.3, color: "var(--v1-dim)" }}>{t.about2}</p>
              <p className="v1-mono" style={{ fontSize: 21, margin: 0, lineHeight: 1.3, color: "var(--v1-dim)" }}>{t.about3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section style={{ padding: "0 40px 70px", position: "relative", zIndex: 1 }}>
        <h2 className="v1-pixel v1-glow" style={{ fontSize: 26, textAlign: "center", margin: "0 0 50px" }}>{"> "}{t.projectsTitle}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, maxWidth: 1200, margin: "0 auto" }}>
          {data.projects.map((p) => (
            <V1Card key={p.title} p={p} t={t} lang={lang} />
          ))}
          <div className="v1-card" style={{ alignItems: "center", justifyContent: "center", minHeight: 200, borderStyle: "dashed" }}>
            <p className="v1-mono" style={{ fontSize: 22, color: "var(--v1-dim)", textAlign: "center", padding: 20 }}>
              {"> "}{t.available}<span className="v1-blink">_</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "2px solid var(--v1-line)", padding: "26px 40px", textAlign: "center", position: "relative", zIndex: 1 }}>
        <p className="v1-mono" style={{ fontSize: 18, color: "var(--v1-dim)", margin: 0 }}>© 2026 Luiz Bezerra • {t.footer}</p>
      </footer>
    </div>
  );
}

window.V1 = V1;
