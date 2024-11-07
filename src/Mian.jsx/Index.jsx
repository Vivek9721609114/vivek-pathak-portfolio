import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";
import Project from "../pages/Project";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import Home from "../pages/Home";
import Toggle from "../Shared";
import Togglediv from "../Shared/Togglediv";

const Mian = () => {
  const homeRef = useRef(null);
  const AboutRef = useRef(null);
  const ResumeRef = useRef(null);
  const SkillsRef = useRef(null);
  const ProjectRef = useRef(null);
  const BlogRef = useRef(null);
  const ContactRef = useRef(null);
  const OnGetChange = (n) => {
    if (n == "Home") {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
      toggleref.current.style.display = "none";
    } else if (n == "About") {
      AboutRef.current.scrollIntoView({ behavior: "smooth" });
      toggleref.current.style.display = "none";
    } else if (n == "Resume") {
      ResumeRef.current.scrollIntoView({ behavior: "smooth" });
      toggleref.current.style.display = "none";
    } else if (n == "Skills") {
      SkillsRef.current.scrollIntoView({ behavior: "smooth" });
      toggleref.current.style.display = "none";
    } else if (n == "Project") {
      ProjectRef.current.scrollIntoView({ behavior: "smooth" });
      toggleref.current.style.display = "none";
    } else if (n == "My Blog") {
      BlogRef.current.scrollIntoView({ behavior: "smooth" });
      toggleref.current.style.display = "none";
    } else if (n == "Contact") {
      ContactRef.current.scrollIntoView({ behavior: "smooth" });
      toggleref.current.style.display = "none";
    }
  };

  const toggleref = useRef();
  let a = 0;
  const toggleclick = () => {
    a++;
    if (a == 1) {
      toggleref.current.style.display = "block";
    } else if (a == 2) {
      toggleref.current.style.display = "none";
      a = a - 2;
    }
  };
  return (
    <>
      <Navbar OnGetMenu={OnGetChange} />
      <Togglediv toggleclick={toggleclick} />
      <Toggle OnGetMenu={OnGetChange} toggleref={toggleref} />
      <Home ref={homeRef} />
      <About ref={AboutRef} />
      <Resume ref={ResumeRef} />
      <Skills ref={SkillsRef} />
      <Project ref={ProjectRef} />
      <Blog ref={BlogRef} />
      <Contact ref={ContactRef} />
      <Footer />
    </>
  );
};

export default Mian;
