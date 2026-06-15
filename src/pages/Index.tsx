import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import type { Lang } from "@/lib/i18n";

const Index = () => {
  const [lang, setLang] = useState<Lang>("pt");
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
    </div>
  );
};

export default Index;
