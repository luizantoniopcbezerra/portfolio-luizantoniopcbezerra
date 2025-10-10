import { ExternalLink, Code } from "lucide-react";
import adopet from "@/assets/img-projects/adopet.png";
import curadalma from "@/assets/img-projects/curadalmaciganovladimir.jpg";
import doskigi from "@/assets/img-projects/doskigiportfolio.jpg";
import luadetarot from "@/assets/img-projects/luadetarot.jpg";
import hblfront from "@/assets/img-projects/hblofertas.jpg";
import hblback from "@/assets/img-projects/diagram.png";

const Projects = () => {
  const projects = [
    {
      title: "APA São Ludgero",
      description:
        "Sistema web desenvolvido no meu 4º semestre da faculdade para a ONG APA São Ludgero, com funcionalidades de cadastro de animais, adoção e doações.",
      tags: ["React.js", "Java", "PostgreSQL", "Spring"],
      codeUrl: "https://github.com/arturoburigo/Adopet",
      liveUrl: "https://www.apasaoludgero.com.br/home",
      image: adopet,
    },
    {
      title: "A Cura D'Alma e Cigano Vladimir",
      description:
        "Landing Page com intuito de apresentar a tarologa que atua de consultas presenciais e à distância. Cada card, cada um sendo uma consulta, com título, descrição e valor, apresenta seus serviços e suas redes sociais linkadas.",
      tags: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/bezerraluiz/curadalma-ciganovladimir",
      liveUrl: "https://curadalmaciganovladimir.com/",
      image: curadalma,
    },
    {
      title: "Doski Gi Tattoo Portfolio",
      description:
        "Landing Page de portfólio para a tatuadora Doski Gi, com apresentação dos trabalhos realizados, informações de contato e redes sociais.",
      tags: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/bezerraluiz/doski.gi-portfolio",
      liveUrl: "https://doskigitattoo.netlify.app/",
      image: doskigi,
    },
    {
      title: "Lua de Tarot",
      description:
        "Landing Page para Lua de Tarot, com apresentação dos serviços, depoimentos e informações de contato.",
      tags: ["HTML", "CSS", "JavaScript"],
      codeUrl: "https://github.com/bezerraluiz/lua-de-tarot",
      liveUrl: "https://luadetarot.com/",
      image: luadetarot,
    },
    {
      title: "HBL Ofertas - Frontend",
      description:
        "Sistema web de ofertas, com funcionalidades de cadastro de produtos e gerenciamento de ofertas.",
      tags: ["React.js", "JavaScript", "Next.js", "CSS"],
      codeUrl: "https://github.com/bezerraluiz/hbl-ofertas-frontend",
      liveUrl: "https://hblofertas.com.br/",
      image: hblfront,
    },
    {
      title: "HBL Ofertas - Backend",
      description:
        "Backend para o CRUD completo do sistema com conexão com Google Drive para salvamento das imagens.",
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
        <h2 className="font-pixel text-3xl md:text-4xl text-foreground mb-16 text-center">
          {"> "}Meus projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="retro-border pixel-corners bg-background overflow-hidden hover:shadow-lg transition-all group"
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
                <h3 className="font-pixel text-lg text-foreground">
                  {"> "}
                  {project.title}
                </h3>

                <p className="font-mono text-sm text-muted-foreground leading-relaxed min-h-[100px]">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="font-mono text-xs px-2 py-1 bg-muted text-foreground rounded"
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
                    } flex items-center justify-center gap-2 font-mono text-sm py-2 px-4 retro-border hover:bg-foreground hover:text-background transition-all`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Code size={16} />
                    Código
                  </a>
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 font-mono text-sm py-2 px-4 retro-border bg-foreground text-background hover:bg-background hover:text-foreground transition-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Ver Projeto
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <p className="font-mono text-sm text-muted-foreground">
            {"> "}Disponível para novos projetos
            <span className="animate-blink">_</span>
          </p>
        </div>

        <footer className="mt-12 text-center border-t border-border pt-8">
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 Luiz Bezerra • Desenvolvido com React + Vite & Tailwind CSS
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Projects;
