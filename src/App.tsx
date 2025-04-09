import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./components/Background";
import "./i18n.ts";

function App() {
  return (
    <div>
      <Background />
      <Header />
      <section className="AboutSkillsContainer">
        <About />
        <Skills />
      </section>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
