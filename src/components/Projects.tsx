import adopet from "@/assets/img-projects/adopet.png";
import curadalma from "@/assets/img-projects/curadalmaciganovladimir.jpg";
import hblback from "@/assets/img-projects/diagram.png";
import doskigi from "@/assets/img-projects/doskigiportfolio.jpg";
import hblfront from "@/assets/img-projects/hblofertas.jpg";
import loom from "@/assets/img-projects/loom.png";
import { translations, type Lang } from "@/lib/i18n";

interface Props {
  lang: Lang;
}

interface Project {
  title: string;
  desc: { pt: string; en: string };
  tags: string[];
  codeUrl: string;
  liveUrl: string | null;
  image: string | null;
}

const projects: Project[] = [
  {
    title: "Loom — AI Project Management",
    desc: {
      pt: "Control plane open-source e 100% local para orquestrar agentes de IA de código (Claude Code, Gemini CLI, Codex e mais). Vue 3 + Spring Boot.",
      en: "Open-source, 100% local control plane to orchestrate AI coding agents (Claude Code, Gemini CLI, Codex and more). Vue 3 + Spring Boot.",
    },
    tags: ["Vue 3", "Spring Boot", "Vite", "SQLite"],
    codeUrl: "https://github.com/luizantoniopcbezerra/loom-ai",
    liveUrl: "https://luizantoniopcbezerra.github.io/loom-lp/",
    image: loom,
  },
  {
    title: "MCP Master of Puppets",
    desc: {
      pt: "Servidor MCP para comunicação assíncrona entre agentes de IA, com caixas de entrada baseadas em arquivos versionados no git.",
      en: "MCP server for async communication between AI agents, using git-tracked file-based inboxes.",
    },
    tags: ["Python", "MCP", "YAML"],
    codeUrl: "https://github.com/luizantoniopcbezerra/mcp-master-of-puppets",
    liveUrl: null,
    image: null,
  },
  {
    title: "APA São Ludgero",
    desc: {
      pt: "Sistema web para a ONG APA São Ludgero, com cadastro de animais, adoção e doações.",
      en: "Web system for the APA São Ludgero NGO, with animal registration, adoption and donations.",
    },
    tags: ["React.js", "Java", "PostgreSQL", "Spring"],
    codeUrl: "https://github.com/arturoburigo/Adopet",
    liveUrl: null,
    image: adopet,
  },
  {
    title: "A Cura D'Alma e Cigano Vladimir",
    desc: {
      pt: "Landing page para taróloga com consultas presenciais e à distância — serviços, valores e redes sociais.",
      en: "Landing page for a tarot reader offering in-person and remote sessions — services, pricing and socials.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/bezerraluiz/curadalma-ciganovladimir",
    liveUrl: "https://curadalmaciganovladimir.com/",
    image: curadalma,
  },
  {
    title: "Doski Gi Tattoo Portfolio",
    desc: {
      pt: "Portfólio para a tatuadora Doski Gi, com trabalhos realizados, contato e redes sociais.",
      en: "Portfolio for tattoo artist Doski Gi, showcasing her work, contact info and socials.",
    },
    tags: ["HTML", "CSS", "JavaScript"],
    codeUrl: "https://github.com/bezerraluiz/doski.gi-portfolio",
    liveUrl: "https://doskigitattoo.netlify.app/",
    image: doskigi,
  },
  {
    title: "HBL Ofertas — Frontend",
    desc: {
      pt: "Sistema web de ofertas, com cadastro de produtos e gerenciamento de ofertas.",
      en: "Deals web system with product registration and offer management.",
    },
    tags: ["React.js", "Next.js", "JavaScript", "CSS"],
    codeUrl: "https://github.com/bezerraluiz/hbl-ofertas-frontend",
    liveUrl: "https://hblofertas.com.br/",
    image: hblfront,
  },
  {
    title: "HBL Ofertas — Backend",
    desc: {
      pt: "CRUD completo do sistema, com integração ao Google Drive para salvar imagens.",
      en: "Full CRUD backend with Google Drive integration for image storage.",
    },
    tags: ["Node.js", "Fastify", "TypeScript", "PostgreSQL"],
    codeUrl: "https://github.com/bezerraluiz/hbl-ofertas-backend",
    liveUrl: null,
    image: hblback,
  },
];

const TrafficDots = () => (
  <div className="flex items-center" style={{ gap: 7 }}>
    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#e0603a", display: "inline-block" }} />
    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#d9a441", display: "inline-block" }} />
    <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#5aa86f", display: "inline-block" }} />
  </div>
);

const Projects = ({ lang }: Props) => {
  const t = translations[lang];

  return (
    <section id="projects" style={{ padding: "0 48px 80px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <h2
          className="font-mono font-semibold"
          style={{ fontSize: 30, margin: "0 0 8px", color: "hsl(var(--foreground))" }}
        >
          <span style={{ color: "hsl(var(--primary))" }}>$</span> ls ~/{t.projectsTitle}
        </h2>
        <p
          className="font-mono"
          style={{ fontSize: 13, margin: "0 0 36px", color: "hsl(var(--muted-foreground))" }}
        >
          {projects.length} {t.reposFound}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 }}>
          {projects.map((p, i) => (
            <div
              key={p.title}
              style={{
                display: "flex",
                flexDirection: "column",
                background: "hsl(var(--card))",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: 11,
                overflow: "hidden",
                boxShadow: "0 18px 40px -22px rgba(0,0,0,0.7)",
                transition: "transform 0.16s ease, border-color 0.16s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(232,97,44,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
              }}
            >
              {/* Card title bar */}
              <div
                className="flex items-center"
                style={{
                  padding: "10px 14px",
                  background: "hsl(var(--secondary))",
                  borderBottom: "1px solid rgba(255,255,255,0.10)",
                  gap: 7,
                }}
              >
                <TrafficDots />
                <span
                  className="font-mono"
                  style={{
                    marginLeft: 4,
                    fontSize: 12,
                    color: "hsl(var(--muted-foreground))",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  ~/projects/{String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Image */}
              <div style={{ height: 165, overflow: "hidden", borderBottom: "1px solid rgba(255,255,255,0.10)" }}>
                {p.image ? (
                  <img src={p.image} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  <div
                    className="font-mono"
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(135deg, rgba(119,33,111,0.4), rgba(232,97,44,0.22))",
                      color: "hsl(var(--foreground))",
                      fontSize: 14,
                    }}
                  >
                    <span style={{ color: "hsl(var(--primary))" }}>$</span>&nbsp;cat&nbsp;
                    {p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: "18px 18px 16px", display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
                <h3
                  className="font-sans font-semibold"
                  style={{ fontSize: 17, margin: 0, lineHeight: 1.25, color: "hsl(var(--foreground))" }}
                >
                  {p.title}
                </h3>
                <p
                  className="font-sans"
                  style={{ fontSize: 14, lineHeight: 1.55, margin: 0, flex: 1, color: "hsl(var(--muted-foreground))" }}
                >
                  {p.desc[lang]}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono"
                      style={{
                        fontSize: 11,
                        padding: "2px 9px",
                        borderRadius: 20,
                        border: "1px solid rgba(255,255,255,0.10)",
                        color: "hsl(var(--accent-foreground))",
                        background: "rgba(119,33,111,0.16)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: "flex", gap: 9, paddingTop: 4 }}>
                  <a
                    href={p.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono no-underline"
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      padding: "9px 10px",
                      borderRadius: 7,
                      color: "hsl(var(--foreground))",
                      border: "1px solid rgba(255,255,255,0.10)",
                      background: "hsl(var(--secondary))",
                      fontWeight: 500,
                      transition: "all 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "hsl(var(--primary))";
                      e.currentTarget.style.color = "hsl(var(--primary))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                      e.currentTarget.style.color = "hsl(var(--foreground))";
                    }}
                  >
                    {t.code}
                  </a>
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono no-underline"
                      style={{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 12,
                        padding: "9px 10px",
                        borderRadius: 7,
                        background: "hsl(var(--primary))",
                        color: "#1b181f",
                        border: "1px solid hsl(var(--primary))",
                        fontWeight: 600,
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#f1764a")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "hsl(var(--primary))")}
                    >
                      {t.live}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Available card */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px dashed rgba(255,255,255,0.15)",
              borderRadius: 11,
              minHeight: 220,
              padding: 24,
            }}
          >
            <p
              className="font-mono"
              style={{ fontSize: 14, textAlign: "center", margin: 0, lineHeight: 1.6, color: "hsl(var(--muted-foreground))" }}
            >
              <span style={{ color: "hsl(var(--primary))" }}>+</span> {t.available}
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          marginTop: 80,
          borderTop: "1px solid rgba(255,255,255,0.10)",
          padding: "22px 0",
          background: "#16131a",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: -48,
          marginRight: -48,
          paddingLeft: 48,
          paddingRight: 48,
        }}
      >
        <p className="font-mono" style={{ fontSize: 12, margin: 0, color: "hsl(var(--muted-foreground))" }}>
          © 2026 luiz antônio pc bezerra
        </p>
        <p className="font-mono" style={{ fontSize: 12, margin: 0, color: "hsl(var(--muted-foreground))" }}>
          luizantoniopcb@gmail.com
        </p>
      </footer>
    </section>
  );
};

export default Projects;
