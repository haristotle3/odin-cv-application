import FormsContainer from "./FormsContainer";
import CVContainer from "./CVContainer";
import { useState } from "react";

export default function App() {
  const [generalInformationSection, setGeneralInformationSection] = useState(
    {}
  );
  const [experienceSection, setExperienceSection] = useState({
    infoCardArray: [],
  });
  const [educationSection, setEducationSection] = useState({
    infoCardArray: [],
  });
  const [skillsSection, setSkillsSection] = useState({ infoCardArray: [] });
  const [languagesSection, setLanguagesSection] = useState({
    infoCardArray: [],
  });

  function generalInformationFormSubmissionHandler(e) {
    e.preventDefault();

    const nameInput = document.querySelector(`#${e.target.id} input#name`);
    const phoneInput = document.querySelector(
      `#${e.target.id} input#phone-number`
    );
    const emailInput = document.querySelector(`#${e.target.id} input#email`);
    const websiteInput = document.querySelector(
      `#${e.target.id} input#website`
    );
    const aboutMeInput = document.querySelector(
      `#${e.target.id} textarea#about`
    );

    setGeneralInformationSection({
      name: nameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      website: websiteInput.value,
      about: aboutMeInput.value,
    });

    e.target.reset();
    return;
  }

  function experienceFormSubmissionHandler(e) {
    e.preventDefault();
    if (!experienceSection.infoCardArray.length) {
      setExperienceSection({ sectionHeading: "Experience", infoCardArray: [] });
    }

    const companyNameInput = document.querySelector(
      `#${e.target.id} input#company-name`
    );
    const experienceStartYearInput = document.querySelector(
      `#${e.target.id} input#experience-start-year`
    );
    const experienceEndYearInput = document.querySelector(
      `#${e.target.id} input#experience-end-year`
    );
    const jobTitleInput = document.querySelector(
      `#${e.target.id} input#job-title`
    );
    const roleDescriptionInput = document.querySelector(
      `#${e.target.id} textarea#role-description`
    );

    const newInfoCardArray = [
      ...experienceSection.infoCardArray,
      {
        title: companyNameInput.value,
        years: `${experienceStartYearInput.value} – ${experienceEndYearInput.value}`,
        positionTitle: jobTitleInput.value,
        point: roleDescriptionInput.value,
      },
    ];

    setExperienceSection((experienceSection) => ({
      ...experienceSection,
      infoCardArray: newInfoCardArray,
    }));

    e.target.reset();
    return;
  }

  function educationFormSubmissionHandler(e) {
    e.preventDefault();
    if (!educationSection.infoCardArray.length) {
      setEducationSection({ sectionHeading: "Education", infoCardArray: [] });
    }

    const schoolNameInput = document.querySelector(
      `#${e.target.id} input#school-name`
    );
    const educationStartYearInput = document.querySelector(
      `#${e.target.id} input#education-start-year`
    );
    const educationEndYearInput = document.querySelector(
      `#${e.target.id} input#education-end-year`
    );
    const educationTitle = document.querySelector(
      `#${e.target.id} input#education-title`
    );
    const educationDescriptionInput = document.querySelector(
      `#${e.target.id} textarea#education-description`
    );

    const newInfoCardArray = [
      ...educationSection.infoCardArray,
      {
        title: schoolNameInput.value,
        years: `${educationStartYearInput.value} – ${educationEndYearInput.value}`,
        positionTitle: educationTitle.value,
        point: educationDescriptionInput.value,
      },
    ];

    setEducationSection((educationSection) => ({
      ...educationSection,
      infoCardArray: newInfoCardArray,
    }));

    e.target.reset();
    return;
  }

  function skillsFormSubmissionHandler(e) {
    e.preventDefault();
    if (!skillsSection.infoCardArray.length) {
      // if empty object
      setSkillsSection({ sectionHeading: "Skills", infoCardArray: [] });
    }

    const skillsInput = document.querySelector(`
      #${e.target.id} input#skill`);
    const newInfoCardArray = [
      ...skillsSection.infoCardArray,
      { point: skillsInput.value },
    ];

    setSkillsSection((skillsSection) => ({
      ...skillsSection,
      infoCardArray: newInfoCardArray,
    }));

    e.target.reset();
    return;
  }

  function languageFormSubmissionHandler(e) {
    e.preventDefault();
    if (!languagesSection.infoCardArray.length) {
      // if empty object
      setLanguagesSection({ sectionHeading: "Languages", infoCardArray: [] });
    }

    const languageInput = document.querySelector(
      `#${e.target.id} input#language`
    );
    const newInfoCardArray = [
      ...languagesSection.infoCardArray,
      { point: languageInput.value },
    ];

    setLanguagesSection((languagesSection) => ({
      ...languagesSection,
      infoCardArray: newInfoCardArray,
    }));

    e.target.reset();
    return;
  }

  return (
    <>
      <FormsContainer
        generalInformationFormSubmissionHandler={
          generalInformationFormSubmissionHandler
        }
        experienceFormSubmissionHandler={experienceFormSubmissionHandler}
        educationFormSubmissionHandler={educationFormSubmissionHandler}
        skillsFormSubmissionHandler={skillsFormSubmissionHandler}
        languageFormSubmissionHandler={languageFormSubmissionHandler}
      />
      <CVContainer
        generalInformationSection={generalInformationSection}
        educationSection={educationSection}
        experienceSection={experienceSection}
        languagesSection={languagesSection}
        skillsSection={skillsSection}
      />
    </>
  );
}
