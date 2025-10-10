import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default Index;
