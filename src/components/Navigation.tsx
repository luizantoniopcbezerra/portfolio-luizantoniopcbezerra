import { Github, Instagram, Linkedin } from "lucide-react";

const Navigation = () => {
  const socialLinks = [
    { icon: Instagram, url: "https://www.instagram.com/_bezerraluiz/", label: "Instagram" },
    { icon: Github, url: "https://github.com/bezerraluiz", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/bezerraluiz/", label: "LinkedIn" },
  ];

  const navLinks = [
    { name: "Sobre", href: "#about" },
    { name: "Projetos", href: "#projects" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-3 items-center">
          {/* Logo - Esquerda */}
          <div className="flex justify-start">
            <a href="/" className="font-pixel text-sm text-foreground hover:text-muted-foreground transition-colors">
              {'> '}Luiz Bezerra
            </a>
          </div>

          {/* Links de navegação - Centro */}
          <div className="hidden md:flex gap-6 justify-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="font-mono text-sm text-foreground hover:text-muted-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Redes sociais - Direita */}
          <div className="flex gap-4 justify-end">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-foreground hover:text-muted-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
