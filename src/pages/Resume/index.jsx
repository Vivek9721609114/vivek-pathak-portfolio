import React, { forwardRef, useState } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";
import ResumeCard from "../../widgets/ResumeCard";
import Button from "../../widgets/Button";
import jsPDF from "jspdf";

const Resume = forwardRef((props, ref) => {
  const [save, setSave] = useState(false);
  const OnGetDownload = () => {
    setSave(true);

    var doc = new jsPDF("portrait", "px", "a4", false);
    doc.addImage(
      "https://i.ibb.co/Rv38Gx6/Whats-App-Image-2024-09-09-at-14-30-30.jpg",
      "jpg",
      0,
      0,
      417,
      453
    );
    doc.save("Resume.pdf");
    setSave(false);
  };
  return (
    <>
      <section ref={ref} className="ftco-section ftco-no-pb resume-section">
        <div className="container">
          <HeadinContent
            h1Heading="Resume"
            h2Heading="Resume"
            paraName="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          />
          <div className="row d-flex">
            <div className="col-md-6">
              <ResumeCard
                year="2022-2024"
                degree="Masters of Art in Sociology"
                university="Dr.Ram Manohar Lohia Awadh University Ayodhya U.P."
              />
              <ResumeCard
                year="2019-2022"
                degree="Bachelors of Arts"
                university="Dr.Ram Manohar Lohia Awadh University Ayodhya U.P."
              />
              <ResumeCard
                year="2018-2021"
                degree="Diploma in Information Technology"
                university="C.S.J.M.GOVT.Polytechnic Ambedkar Nagar Uttar Pradesh"
              />
            </div>
            <div className="col-md-6">
              <ResumeCard
                year="2016-2018"
                degree="Intermediate (12th)"
                university="U.P. Board"
              />
              <ResumeCard
                year="2014-2016"
                degree="High School (10th)"
                university="U.P. Board"
              />
              <ResumeCard
                year="2021"
                degree="Passed 'CCC' exam with grade(C)"
                university="NIELIT"
              />
            </div>
          </div>
          <Button onClick={OnGetDownload} BtnName="Download CV" />
        </div>
      </section>
    </>
  );
});

export default Resume;
