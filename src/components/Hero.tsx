import { translations, type Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

const TrafficDots = () => (
  <div className="flex items-center" style={{ gap: 7 }}>
    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#e0603a", display: "inline-block" }} />
    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#d9a441", display: "inline-block" }} />
    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#5aa86f", display: "inline-block" }} />
  </div>
);

const Hero = ({ lang }: Props) => {
  const t = translations[lang];

  return (
    <section
      className="flex justify-center"
      style={{ paddingTop: "calc(34px + 60px + 70px)", paddingBottom: 64, paddingLeft: 48, paddingRight: 48 }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 920,
          background: "hsl(var(--card))",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 13,
          overflow: "hidden",
          boxShadow: "0 40px 80px -40px rgba(0,0,0,0.8)",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center"
          style={{
            padding: "12px 16px",
            background: "hsl(var(--secondary))",
            borderBottom: "1px solid rgba(255,255,255,0.10)",
            gap: 10,
          }}
        >
          <TrafficDots />
          <span
            className="font-mono"
            style={{ marginLeft: 2, fontSize: 12.5, color: "hsl(var(--muted-foreground))" }}
          >
            luiz@dev: ~/whoami
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: "40px 44px 46px" }}>
          <p
            className="font-mono"
            style={{ fontSize: 14, margin: "0 0 14px", color: "hsl(var(--accent-foreground))" }}
          >
            <span style={{ color: "hsl(var(--primary))" }}>$</span>{" "}
            {t.hello.replace(/!/g, "")}{" "}
            <span style={{ color: "hsl(var(--primary))" }}>_</span>
          </p>

          <h1
            className="font-sans font-semibold"
            style={{ fontSize: 56, lineHeight: 1.02, margin: "0 0 16px", letterSpacing: "-0.02em" }}
          >
            Luiz Antônio<br />
            <span style={{ color: "hsl(var(--primary))" }}>PC Bezerra</span>
          </h1>

          <p
            className="font-mono"
            style={{ fontSize: 18, margin: "0 0 10px", color: "hsl(var(--foreground))" }}
          >
            {t.role}
          </p>

          <p
            className="font-sans"
            style={{ fontSize: 17, margin: "0 0 34px", color: "hsl(var(--muted-foreground))", maxWidth: 560 }}
          >
            {t.tagline}
          </p>

          <a
            href="mailto:luizantoniopcb@gmail.com?subject=Contato via Portfolio&body=Olá Luiz,"
            className="font-mono font-semibold inline-flex items-center no-underline"
            style={{
              gap: 8,
              fontSize: 14,
              padding: "13px 26px",
              borderRadius: 8,
              background: "hsl(var(--primary))",
              color: "#1b181f",
              transition: "background 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f1764a")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "hsl(var(--primary))")}
          >
            <span>$</span> {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
