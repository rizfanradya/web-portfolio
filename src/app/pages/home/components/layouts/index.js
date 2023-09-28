import Main from "../fragments/main";
import About from "../fragments/about";
import Skills from "../fragments/skills";
import Experience from "../fragments/experience";
import Portfolio from "../fragments/portfolio";
import Contact from "../fragments/contact";
import Navbar from "@/app/navbar";

export default function Layouts() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}
