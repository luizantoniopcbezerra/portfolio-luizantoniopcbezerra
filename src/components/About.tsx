import profileImage from "@/assets/profile.png";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full">
        <h2 className="font-pixel text-3xl md:text-4xl text-foreground mb-16 text-center">
          {'> '}Sobre mim
        </h2>

        <div className="space-y-12">
          <div className="flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 retro-border pixel-corners overflow-hidden">
              <img
                src={profileImage}
                alt="Developer Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6 text-center">
            <p className="font-mono text-lg md:text-xl text-foreground leading-relaxed">
              Tenho mais de 2 anos de experiência como <strong>Desenvolvedor</strong>.
            </p>

            <p className="font-mono text-base md:text-lg text-muted-foreground leading-relaxed">
              Sempre olho para o <strong>problema</strong>, pensando na <strong>ideia</strong> que irá resolvê-lo.
            </p>

            <p className="font-mono text-base md:text-lg text-muted-foreground leading-relaxed">
              Acredito que <span className="text-foreground font-semibold">simplicidade</span> é
              o segredo para soluções elegantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
