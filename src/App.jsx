import { useEffect, useRef, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const sections = ["home", "about", "projects"];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const isScrolling = useRef(false);

  const handleScroll = (section) => {
    if (isScrolling.current) return;
    isScrolling.current = true;
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setTimeout(() => (isScrolling.current = false), 1000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar
        sections={sections}
        activeSection={activeSection}
        onScroll={handleScroll}
      />
      <Home />
      <About />
      <Projects />
      <Footer onScroll={handleScroll} />
    </>
  );
}

export default App;
