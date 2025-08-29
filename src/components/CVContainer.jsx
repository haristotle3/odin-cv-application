import GeneralInformation from "./GeneralInformation";
import Section from "./Section";
import "../styles/cvContainer.css";

export default function CVContainer({
  generalInformationSection,
  experienceSection,
  educationSection,
  skillsSection,
  languagesSection,
}) {
  return (
    <div className="cv-container">
      <GeneralInformation {...generalInformationSection} />
      <div className="non-general-information">
        <div className="experience-education-container">
          <Section {...experienceSection} />
          <Section {...educationSection} />
        </div>
        <div className="language-skills-container">
          <Section {...skillsSection} />
          <Section {...languagesSection} />
        </div>
      </div>
    </div>
  );
}
