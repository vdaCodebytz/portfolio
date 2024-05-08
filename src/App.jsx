import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
    </div>
  );
};

export default App;
