import adopet from "@/assets/img-projects/adopet.png";
import curadalma from "@/assets/img-projects/curadalmaciganovladimir.jpg";
import hblback from "@/assets/img-projects/diagram.png";
import doskigi from "@/assets/img-projects/doskigiportfolio.jpg";
import hblfront from "@/assets/img-projects/hblofertas.jpg";
import { Code, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Loom — AI Project Management",
      description:
        "Sistema de gerenciamento de projetos com IA integrada, desenvolvido para organizar tarefas, sprints e equipes com suporte a automações inteligentes.",
      tags: ["Vue 3", "Spring Boot", "Vite", "SQLite"],
      codeUrl: "https://github.com/luizantoniopcbezerra/loom-ai",
      liveUrl: "#",
      image: hblback,
    },
    {
      title: "MCP Master of Puppets",
      description:
        "Servidor MCP para comunicação assíncrona entre agentes de IA, com caixas de entrada baseadas em arquivos versionadas via YAML.",
      tags: ["Python", "MCP", "YAML"],
      codeUrl: "https://github.com/luizantoniopcbezerra/mcp-master-of-puppets",
      liveUrl: "#",
      image: hblback,
    },
    {
      title: "APA São Ludgero",
      description:
        "Sistema web desenvolvido no meu 4º semestre da faculdade para a ONG APA São Ludgero, com funcionalidades de cadastro de animais, adoção e doações.",
      tags: ["React.js", "Java", "PostgreSQL", "Spring"],
      codeUrl: "https://github.com/arturoburigo/Adopet",
      liveUrl: "#",
      image: adopet,
    },
    {
      title: "A Cura D'Alma e Cigano Vladimir",
      description:
        "Landing Page com intuito de apresentar a tarologa que atua de consultas presenciais e à distância. Cada card apresenta seus serviços e redes sociais.",
      tags: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/bezerraluiz/curadalma-ciganovladimir",
      liveUrl: "https://curadalmaciganovladimir.com/",
      image: curadalma,
    },
    {
      title: "Doski Gi Tattoo Portfolio",
      description:
        "Portfólio para a tatuadora Doski Gi, com trabalhos realizados, informações de contato e redes sociais.",
      tags: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/bezerraluiz/doski.gi-portfolio",
      liveUrl: "https://doskigitattoo.netlify.app/",
      image: doskigi,
    },
    {
      title: "HBL Ofertas — Frontend",
      description:
        "Sistema web de ofertas, com funcionalidades de cadastro de produtos e gerenciamento de ofertas.",
      tags: ["React.js", "JavaScript", "Next.js", "CSS"],
      codeUrl: "https://github.com/bezerraluiz/hbl-ofertas-frontend",
      liveUrl: "https://hblofertas.com.br/",
      image: hblfront,
    },
    {
      title: "HBL Ofertas — Backend",
      description:
        "CRUD completo do sistema, com integração ao Google Drive para salvar imagens.",
      tags: ["Node.js", "PostgreSQL", "Fastify", "TypeScript"],
      codeUrl: "https://github.com/bezerraluiz/hbl-ofertas-backend",
      liveUrl: "#",
      image: hblback,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-6xl w-full">
        <div className="mb-16 text-center space-y-2">
          <p className="font-mono text-sm text-primary">ls ~/</p>
          <h2 className="font-pixel text-3xl md:text-4xl text-foreground">
            meus_projetos
          </h2>
          <p className="font-mono text-xs text-muted-foreground">
            {projects.length} repositórios encontrados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="retro-border pixel-corners bg-card overflow-hidden hover:border-primary transition-all group"
            >
              {/* Project Image */}
              <div className="h-48 bg-muted overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-pixel text-sm text-foreground leading-snug">
                  <span className="text-primary">{"> "}</span>
                  {project.title}
                </h3>

                <p className="font-mono text-sm text-muted-foreground leading-relaxed min-h-[80px]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="font-mono text-xs px-2 py-1 bg-secondary text-accent-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <a
                    href={project.codeUrl}
                    className={`${
                      project.liveUrl === "#" ? "w-full" : "flex-1"
                    } flex items-center justify-center gap-2 font-mono text-sm py-2 px-4 retro-border hover:bg-secondary hover:text-foreground hover:border-primary transition-all`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code size={16} />
                    Código
                  </a>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 font-mono text-sm py-2 px-4 retro-border bg-primary text-primary-foreground hover:bg-background hover:text-primary transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Ver projeto
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-primary">{">"} </span>
            Disponível para novos projetos
            <span className="animate-blink text-primary">_</span>
          </p>
        </div>

        <footer className="mt-12 text-center border-t border-border pt-8">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 luiz antônio pc bezerra • luizantoniopcb@gmail.com
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Projects;
