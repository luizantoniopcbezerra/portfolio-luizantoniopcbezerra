import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Desenvolvedor Full Stack";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <p className="font-mono text-sm text-muted-foreground">
            {'> '}Olá! Eu sou
          </p>
          <h1 className="font-pixel text-4xl md:text-6xl text-foreground">
            Luiz Bezerra
          </h1>
          <div className="h-8">
            <p className="font-mono text-lg md:text-xl text-foreground">
              {displayText}
              <span className="animate-blink">_</span>
            </p>
          </div>
          <p className="font-mono text-base md:text-lg text-muted-foreground max-w-lg mx-auto pt-4">
            Transformando <span className="text-foreground font-semibold">ideias</span> em código.
          </p>
        </div>

        <a
          href="mailto:luizantoniopcb@gmail.com?subject=Contato via Portfolio&body=Olá Luiz,"
          className="retro-border pixel-corners bg-foreground px-8 py-4 font-pixel text-sm text-background hover:bg-secondary hover:text-secondary-foreground transition-all inline-block"
        >
          Me envie um email!
        </a>
      </div>
    </section>
  );
};

export default Hero;
