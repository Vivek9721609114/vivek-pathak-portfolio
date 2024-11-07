import React, { forwardRef } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";
import SkillContent from "../../widgets/SkillContent";

const Skills = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="Skills-section">
        <div className="container">
          <HeadinContent
            h1Heading="Skills"
            h2Heading="My Skills"
            paraName="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
          <div className="row">
            <SkillContent name="HTML" percent="80%" Width="80%" />
            <SkillContent name="CSS" percent="75%" Width="75%" />
            <SkillContent name="JAVASCRIPT" percent="70%" Width="70%" />
            <SkillContent name="REACT.JS" percent="70%" Width="70%" />
            <SkillContent name="BOOTSTRAP" percent="70%" Width="70%" />
            <SkillContent name="TAILWINDCSS" percent="70%" Width="70%" />
          </div>
        </div>
      </section>
    </>
  );
});

export default Skills;
