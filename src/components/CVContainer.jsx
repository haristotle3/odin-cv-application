import GeneralInformation from "./GeneralInformation";
import Section from "./Section";
import "../styles/cvContainer.css";

export default function CVContainer({
  generalInformationSection,
  experienceSection,
  experienceFormEditHandler,
  educationSection,
  educationFormEditHandler,
  skillsSection,
  skillsFormEditHandler,
  languagesSection,
  languagesFormEditHandler
}) {
  return (
    <div className="cv-container">
      <GeneralInformation {...generalInformationSection} />
      <div className="non-general-information">
        <div className="experience-education-container">
          <Section {...experienceSection} editClickHandler={experienceFormEditHandler} />
          <Section {...educationSection} editClickHandler={educationFormEditHandler}/>
        </div>
        <div className="language-skills-container">
          <Section {...skillsSection} editClickHandler={skillsFormEditHandler}/>
          <Section {...languagesSection} editClickHandler={languagesFormEditHandler}/>
        </div>
      </div>
    </div>
  );
}
