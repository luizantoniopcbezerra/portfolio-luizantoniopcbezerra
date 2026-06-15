import { useEffect, useState } from "react";
import { translations, type Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const socials = [
  { label: "GitHub", url: "https://github.com/luizantoniopcbezerra" },
  { label: "LinkedIn", url: "www.linkedin.com/in/luizantoniopcbezerra" },
  { label: "Instagram", url: "https://www.instagram.com/luizantoniopcbezerra/" },
];

function formatDateTime(lang: Lang): string {
  const now = new Date();
  const weekday = now.toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", { weekday: "short" })
    .replace(".", "").toLowerCase();
  const day = now.getDate();
  const month = now.toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", { month: "short" })
    .replace(".", "").toLowerCase();
  const time = now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit", hour12: false });
  return `${weekday} ${day} ${month} · ${time}`;
}

const Navigation = ({ lang, setLang }: Props) => {
  const t = translations[lang];
  const [datetime, setDatetime] = useState(() => formatDateTime(lang));
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setDatetime(formatDateTime(lang));
    const id = setInterval(() => setDatetime(formatDateTime(lang)), 30_000);
    return () => clearInterval(id);
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* System bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 font-mono flex items-center justify-between"
        style={{
          background: isScrolled ? "rgba(22, 19, 26, 0.72)" : "#16131a",
          backdropFilter: isScrolled ? "blur(14px) saturate(140%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(14px) saturate(140%)" : "none",
          height: 34,
          padding: "0 20px",
          fontSize: 12,
          color: "hsl(var(--muted-foreground))",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
          transition: "background 0.2s ease, backdrop-filter 0.2s ease, -webkit-backdrop-filter 0.2s ease",
        }}
      >
        <span style={{ color: "hsl(var(--foreground))", fontWeight: 600 }}>● luizantoniopcbezerra</span>
        <span>{t.status}</span>
        <span>{datetime}</span>
      </div>

      {/* Nav */}
      <nav
        className="fixed left-0 right-0 z-40 flex items-center justify-between font-mono"
        style={{
          top: 34,
          background: isScrolled ? "rgba(34, 29, 39, 0.74)" : "hsl(var(--card))",
          backdropFilter: isScrolled ? "blur(16px) saturate(150%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(16px) saturate(150%)" : "none",
          borderBottom: "1px solid rgba(255,255,255,0.10)",
          padding: "0 48px",
          height: 60,
          transition: "background 0.2s ease, backdrop-filter 0.2s ease, -webkit-backdrop-filter 0.2s ease, box-shadow 0.2s ease",
          boxShadow: isScrolled ? "0 10px 30px -22px rgba(0,0,0,0.65)" : "none",
        }}
      >
        <a
          href="/"
          className="no-underline"
          style={{ fontSize: 16, fontWeight: 600, color: "hsl(var(--foreground))" }}
        >
          <span style={{ color: "hsl(var(--primary))" }}>$</span>{" "}
          luizantoniopc<span style={{ color: "hsl(var(--muted-foreground))" }}>bezerra</span>
        </a>

        <div className="flex items-center" style={{ gap: 24 }}>
          <a
            href="#about"
            className="font-sans no-underline transition-colors"
            style={{ fontSize: 14, color: "hsl(var(--muted-foreground))" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--primary))")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
          >
            {t.nav.about}
          </a>
          <a
            href="#projects"
            className="font-sans no-underline transition-colors"
            style={{ fontSize: 14, color: "hsl(var(--muted-foreground))" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--primary))")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
          >
            {t.nav.projects}
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors"
              style={{ fontSize: 12.5, color: "hsl(var(--muted-foreground))" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(var(--primary))")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(var(--muted-foreground))")}
            >
              {s.label}
            </a>
          ))}

          {/* Lang toggle */}
          <div
            className="flex overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.10)", borderRadius: 7 }}
          >
            {(["pt", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: "6px 13px",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  fontFamily: "inherit",
                  background: lang === l ? "hsl(var(--primary))" : "transparent",
                  color: lang === l ? "#1b181f" : "hsl(var(--muted-foreground))",
                  transition: "all 0.15s ease",
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
