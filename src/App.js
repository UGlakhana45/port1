import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogArchive from "./components/BlogArchive";

import { Routes, Route } from "react-router-dom";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/blogs" element={<BlogArchive />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
