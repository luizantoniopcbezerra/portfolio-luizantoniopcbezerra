// V5 · JetBrains.com — landing inspirada no site da JetBrains / IntelliJ IDEA.
// Preto + tipografia bold apertada, gradiente-assinatura (azul→roxo→magenta),
// botões em pílula, ícones de produto em quadrado arredondado. Ancorado no azul.
const v5useState = React.useState;

const JB = {
  black: "#000000",
  ink: "#19191c",
  white: "#ffffff",
  paper: "#ffffff",
  fg: "#19191c",
  dim: "#6e6e73",
  dimD: "#9b9ba3",
  line: "#2a2a30",
  // gradiente assinatura — azul → roxo → magenta
  grad: "linear-gradient(120deg, #087cfa 0%, #6b57ff 48%, #fe2857 100%)",
  gradSoft: "linear-gradient(120deg, #087cfa 0%, #6b57ff 55%, #fe2857 110%)",
  blue: "#087cfa",
  purple: "#6b57ff",
  pink: "#fe2857",
};

// par de gradientes por projeto (ícone do "produto")
const V5_GRADS = [
  "linear-gradient(135deg,#087cfa,#6b57ff)",
  "linear-gradient(135deg,#6b57ff,#fe2857)",
  "linear-gradient(135deg,#fe2857,#ff9d2f)",
  "linear-gradient(135deg,#00b8d4,#087cfa)",
  "linear-gradient(135deg,#7d28ff,#fe2857)",
];

function V5Toggle({ lang, setLang, dark }) {
  return (
    <div style={{ display: "flex", gap: 2, background: dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.05)", borderRadius: 999, padding: 3 }}>
      {["pt", "en"].map((l) => (
        <button key={l} onClick={() => setLang(l)} className="v5-mono" style={{
          padding: "5px 13px", fontSize: 12, fontWeight: 600, letterSpacing: "0.04em",
          borderRadius: 999, border: "none", cursor: "pointer",
          background: lang === l ? JB.black : "transparent",
          color: lang === l ? "#fff" : (dark ? JB.dimD : JB.dim),
        }}>{l.toUpperCase()}</button>
      ))}
    </div>
  );
}

function V5Mark({ size = 40, radius = 11, gradient = JB.grad, label = "LB", fs = 16 }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: radius, background: gradient,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#fff", fontSize: fs,
      letterSpacing: "-0.02em", flex: "0 0 auto",
    }}>{label}</div>
  );
}

function V5Card({ p, t, lang, i }) {
  return (
    <div className="v5-card">
      <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
        <img src={p.image} alt={p.title} className="v5-card-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", left: 16, bottom: -22 }}>
          <V5Mark size={48} radius={13} gradient={V5_GRADS[i % V5_GRADS.length]} label={String(i + 1).padStart(2, "0")} fs={15} />
        </div>
      </div>
      <div style={{ padding: "32px 22px 22px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
        <h3 className="v5-display" style={{ fontSize: 21, fontWeight: 600, margin: 0, letterSpacing: "-0.02em", color: "#fff" }}>{p.title}</h3>
        <p className="v5-sans" style={{ fontSize: 14.5, lineHeight: 1.55, color: JB.dimD, margin: 0, flex: 1 }}>{p.desc[lang]}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {p.tags.map((tag) => (
            <span key={tag} className="v5-mono" style={{ fontSize: 11, padding: "3px 9px", borderRadius: 999, color: "#cdd3ff", background: "rgba(107,87,255,0.16)" }}>{tag}</span>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, paddingTop: 8, marginTop: 2, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <a href={p.codeUrl} target="_blank" rel="noopener noreferrer" className="v5-link">{t.code} →</a>
          {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="v5-link v5-link-grad">{t.live} →</a>}
        </div>
      </div>
    </div>
  );
}

function V5() {
  const data = window.PORTFOLIO_DATA;
  const [lang, setLang] = v5useState("pt");
  const t = data.t[lang];

  return (
    <div className="v5-root" data-screen-label="V5 JetBrains.com">
      <style>{`
        .v5-root {
          background: ${JB.black};
          color: ${JB.white};
          font-family: 'Space Grotesk', sans-serif;
          min-height: 100%;
        }
        .v5-display { font-family: 'Space Grotesk', sans-serif; }
        .v5-sans { font-family: 'Space Grotesk', sans-serif; }
        .v5-mono { font-family: 'JetBrains Mono', monospace; }
        .v5-grad-text {
          background: ${JB.grad};
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
        }
        .v5-pill {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 16px 30px; border-radius: 999px; font-size: 16px; font-weight: 600;
          text-decoration: none; cursor: pointer; border: none;
          transition: transform .15s ease, box-shadow .15s ease, background .15s ease;
        }
        .v5-pill-grad { background: ${JB.grad}; color: #fff; background-size: 160% 160%; }
        .v5-pill-grad:hover { transform: translateY(-2px); box-shadow: 0 14px 40px rgba(107,87,255,0.45); }
        .v5-pill-ghost { background: transparent; color: #fff; box-shadow: inset 0 0 0 1.5px rgba(255,255,255,0.30); }
        .v5-pill-ghost:hover { box-shadow: inset 0 0 0 1.5px #fff; transform: translateY(-2px); }
        .v5-pill-dark { background: ${JB.black}; color: #fff; }
        .v5-pill-dark:hover { transform: translateY(-2px); box-shadow: 0 12px 30px rgba(0,0,0,0.25); }
        .v5-navlink { font-size: 15px; font-weight: 500; text-decoration: none; transition: color .15s ease; }
        .v5-link { font-size: 13px; font-weight: 600; text-decoration: none; color: #fff; transition: opacity .15s ease; }
        .v5-link:hover { opacity: .65; }
        .v5-link-grad { color: ${JB.blue}; }
        .v5-card {
          display: flex; flex-direction: column; border-radius: 18px; overflow: hidden;
          background: #1a1a1f; border: 1px solid rgba(255,255,255,0.07);
          transition: transform .2s ease, border-color .2s ease;
        }
        .v5-card:hover { transform: translateY(-5px); border-color: rgba(107,87,255,0.5); }
        .v5-card-img { transition: transform .35s ease; }
        .v5-card:hover .v5-card-img { transform: scale(1.05); }
      `}</style>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 56px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
          <V5Mark />
          <span className="v5-display" style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>Luiz Bezerra</span>
        </div>
        <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
          <a href="#" onClick={(e) => e.preventDefault()} className="v5-navlink" style={{ color: "#dcdce1" }}>{t.nav.about}</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="v5-navlink" style={{ color: "#dcdce1" }}>{t.nav.projects}</a>
          <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.14)" }}></div>
          {data.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer" className="v5-mono v5-navlink" style={{ fontSize: 12.5, color: JB.dimD }}>{s.label}</a>
          ))}
          <V5Toggle lang={lang} setLang={setLang} dark />
        </div>
      </nav>

      {/* Hero */}
      <section style={{ padding: "92px 56px 96px", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 56, alignItems: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 26 }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: JB.grad }}></span>
            <span className="v5-mono" style={{ fontSize: 13, color: JB.dimD, letterSpacing: "0.04em" }}>{t.hello}</span>
          </div>
          <h1 className="v5-display" style={{ fontSize: 88, fontWeight: 700, lineHeight: 0.95, letterSpacing: "-0.045em", margin: "0 0 22px" }}>
            Luiz<br />Bezerra
          </h1>
          <p className="v5-display" style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.025em", margin: "0 0 16px" }}>
            <span className="v5-grad-text">{t.role}</span>
          </p>
          <p className="v5-sans" style={{ fontSize: 18, lineHeight: 1.55, color: JB.dimD, margin: "0 0 40px", maxWidth: 440 }}>{t.tagline}</p>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <a href={`mailto:${data.email}?subject=Contato via Portfolio`} className="v5-pill v5-pill-grad">{t.cta} →</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="v5-pill v5-pill-ghost">{t.nav.projects}</a>
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <div style={{ position: "absolute", width: 420, height: 420, borderRadius: "50%", background: JB.grad, filter: "blur(70px)", opacity: 0.45 }}></div>
          <div style={{ position: "relative", padding: 5, borderRadius: 28, background: JB.grad }}>
            <img src={data.photo} alt="Luiz Bezerra" style={{ display: "block", width: 320, height: 380, objectFit: "cover", borderRadius: 24 }} />
          </div>
        </div>
        {/* raios geométricos JetBrains */}
        <div style={{ position: "absolute", top: -120, right: -80, width: 360, height: 360, background: "conic-gradient(from 200deg, transparent, rgba(8,124,250,0.12), transparent 60%)", borderRadius: "50%", pointerEvents: "none" }}></div>
      </section>

      {/* About — seção branca (alternância JetBrains) */}
      <section style={{ background: JB.paper, color: JB.fg, padding: "96px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 72, alignItems: "start", maxWidth: 1080, margin: "0 auto" }}>
          <div>
            <p className="v5-mono" style={{ fontSize: 13, color: JB.blue, letterSpacing: "0.06em", margin: "0 0 18px", textTransform: "uppercase" }}>{t.aboutTitle}</p>
            <h2 className="v5-display" style={{ fontSize: 46, fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.05, margin: 0 }}>{t.about1}</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 8 }}>
            <p className="v5-sans" style={{ fontSize: 20, lineHeight: 1.6, color: "#3a3a40", margin: 0 }}>{t.about2}</p>
            <p className="v5-sans" style={{ fontSize: 20, lineHeight: 1.6, color: "#3a3a40", margin: 0 }}>{t.about3}</p>
            <div style={{ display: "flex", gap: 40, marginTop: 14 }}>
              <div>
                <div className="v5-display" style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em" }}><span className="v5-grad-text">3+</span></div>
                <div className="v5-sans" style={{ fontSize: 14, color: JB.dim }}>{lang === "pt" ? "anos de experiência" : "years of experience"}</div>
              </div>
              <div>
                <div className="v5-display" style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em" }}><span className="v5-grad-text">{data.projects.length}</span></div>
                <div className="v5-sans" style={{ fontSize: 14, color: JB.dim }}>{lang === "pt" ? "projetos entregues" : "projects shipped"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos — grid de "produtos" */}
      <section style={{ padding: "96px 56px 80px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44 }}>
          <h2 className="v5-display" style={{ fontSize: 52, fontWeight: 700, letterSpacing: "-0.04em", margin: 0 }}>{t.projectsTitle}</h2>
          <p className="v5-mono" style={{ fontSize: 13, color: JB.dimD, margin: 0 }}>{String(data.projects.length).padStart(2, "0")} {lang === "pt" ? "projetos" : "projects"}</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {data.projects.map((p, i) => (
            <V5Card key={p.title} p={p} t={t} lang={lang} i={i} />
          ))}
        </div>
      </section>

      {/* CTA band — gradiente */}
      <section style={{ padding: "0 56px 80px" }}>
        <div style={{ position: "relative", borderRadius: 28, overflow: "hidden", background: JB.grad, padding: "72px 56px", textAlign: "center" }}>
          <h2 className="v5-display" style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.035em", margin: "0 0 14px", color: "#fff" }}>
            {lang === "pt" ? "Vamos construir algo." : "Let's build something."}
          </h2>
          <p className="v5-sans" style={{ fontSize: 18, color: "rgba(255,255,255,0.9)", margin: "0 0 34px" }}>{t.available}</p>
          <a href={`mailto:${data.email}?subject=Contato via Portfolio`} className="v5-pill v5-pill-dark">{t.cta} →</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "30px 56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <V5Mark size={30} radius={8} fs={12} />
          <span className="v5-mono" style={{ fontSize: 12.5, color: JB.dimD }}>© 2026 Luiz Bezerra</span>
        </div>
        <span className="v5-mono" style={{ fontSize: 12.5, color: JB.dimD }}>{t.footer}</span>
      </footer>
    </div>
  );
}

window.V5 = V5;
