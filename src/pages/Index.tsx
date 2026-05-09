import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useAnalytics } from "@/hooks/use-analytics";

const Index = () => {
  const { pageView } = useAnalytics();

  useEffect(() => {
    pageView('Home', '/');
  }, [pageView]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        {/* <Projects /> */}
        <Skills />
        <Resume />
        {/* <Blog /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
