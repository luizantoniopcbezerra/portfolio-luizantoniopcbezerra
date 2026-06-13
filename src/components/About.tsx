import profileImage from "@/assets/profile.jpg";
import { translations, type Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

const About = ({ lang }: Props) => {
  const t = translations[lang];

  return (
    <section id="about" style={{ padding: "20px 48px 80px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "230px 1fr",
          gap: 48,
          alignItems: "center",
          maxWidth: 980,
          margin: "0 auto",
          background: "hsl(var(--card))",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 13,
          padding: 40,
        }}
      >
        {/* Photo */}
        <div
          style={{
            borderRadius: 11,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 0 0 4px rgba(119,33,111,0.25)",
            flexShrink: 0,
          }}
        >
          <img
            src={profileImage}
            alt="Luiz Antônio PC Bezerra"
            style={{ width: 230, height: 270, objectFit: "cover", display: "block" }}
          />
        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <h2
            className="font-mono font-semibold"
            style={{ fontSize: 24, margin: 0, color: "hsl(var(--foreground))" }}
          >
            <span style={{ color: "hsl(var(--primary))" }}>#</span> {t.aboutTitle}
          </h2>
          <p
            className="font-sans font-semibold"
            style={{ fontSize: 21, lineHeight: 1.4, margin: 0, color: "hsl(var(--foreground))" }}
          >
            {t.about1}
          </p>
          <p
            className="font-sans"
            style={{ fontSize: 16, lineHeight: 1.65, margin: 0, color: "hsl(var(--muted-foreground))" }}
          >
            {t.about2}
          </p>
          <p
            className="font-sans"
            style={{ fontSize: 16, lineHeight: 1.65, margin: 0, color: "hsl(var(--muted-foreground))" }}
          >
            {t.about3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
