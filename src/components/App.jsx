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
  const [visibleFormID, setVisibleForm] = useState(null);

  function dropdownButtonClickHandler(e) {
    const formID = e.target.parentElement.parentElement.id; // e.parentElement.parentElement is the form element
    // Note that <img> inside the <button> is styled to have no pointer events.
    formID !== visibleFormID ? setVisibleForm(formID) : setVisibleForm(null);
  }

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

  function experienceFormEditHandler(e) {
    e.preventDefault();
    const infoCard = e.target.parentElement;
    const companyNameValue = infoCard.children[0].children[0].textContent;
    const years = infoCard.children[0].children[1];
    console.log(infoCard.children[0]);
    const startYearValue = years.textContent.split("–")[0].trim();
    const endYearValue = years.textContent.split("–")[1].trim();
    const jobTitleValue = infoCard.children[1].textContent;
    const roleDescriptionValue = infoCard.children[2].textContent;

    const companyNameInput = document.querySelector(
      `#experience-form input#company-name`
    );
    const experienceStartYearInput = document.querySelector(
      `#experience-form input#experience-start-year`
    );
    const experienceEndYearInput = document.querySelector(
      `#experience-form input#experience-end-year`
    );
    const jobTitleInput = document.querySelector(
      `#experience-form input#job-title`
    );
    const roleDescriptionInput = document.querySelector(
      `#experience-form textarea#role-description`
    );

    companyNameInput.value = companyNameValue;
    experienceStartYearInput.value = startYearValue;
    experienceEndYearInput.value = endYearValue;
    jobTitleInput.value = jobTitleValue;
    roleDescriptionInput.value = roleDescriptionValue;

    const newObj = {
      title: companyNameInput.value,
      years: `${experienceStartYearInput.value} – ${experienceEndYearInput.value}`,
      positionTitle: jobTitleInput.value,
      point: roleDescriptionInput.value,
    };

    const newInfoCardArray = experienceSection.infoCardArray.filter(
      (object) => {
        return JSON.stringify(object) !== JSON.stringify(newObj);
      }
    );

    setExperienceSection((experienceSection) => ({
      ...experienceSection,
      infoCardArray: newInfoCardArray,
    }));

    setVisibleForm("experience-form");
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

  function educationFormEditHandler(e) {
    e.preventDefault();
    const infoCard = e.target.parentElement;
    const schoolNameValue = infoCard.children[0].children[0].textContent;
    const years = infoCard.children[0].children[1];
    const startYearValue = years.textContent.split("–")[0].trim();
    const endYearValue = years.textContent.split("–")[1].trim();
    const educationTitleValue = infoCard.children[1].textContent;
    const educationDescriptionValue = infoCard.children[2].textContent;

    const schoolNameInput = document.querySelector(
      `#education-form input#school-name`
    );
    const educationStartYearInput = document.querySelector(
      `#education-form input#education-start-year`
    );
    const educationEndYearInput = document.querySelector(
      `#education-form input#education-end-year`
    );
    const educationTitle = document.querySelector(
      `#education-form input#education-title`
    );
    const educationDescriptionInput = document.querySelector(
      `#education-form textarea#education-description`
    );

    schoolNameInput.value = schoolNameValue;
    educationStartYearInput.value = startYearValue;
    educationEndYearInput.value = endYearValue;
    educationTitle.value = educationTitleValue;
    educationDescriptionInput.value = educationDescriptionValue;

    const newObj = {
      title: schoolNameInput.value,
      years: `${educationStartYearInput.value} – ${educationEndYearInput.value}`,
      positionTitle: educationTitle.value,
      point: educationDescriptionInput.value,
    };

    const newInfoCardArray = educationSection.infoCardArray.filter((object) => {
      return JSON.stringify(object) !== JSON.stringify(newObj);
    });

    setEducationSection((educationSection) => ({
      ...educationSection,
      infoCardArray: newInfoCardArray,
    }));

    setVisibleForm("education-form");
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

  function skillsFormEditHandler(e) {
    e.preventDefault();
    const infoCard = e.target.parentElement;
    const skillsValue = infoCard.children[0].textContent;

    const skillsInput = document.querySelector(`
      #skills-form input#skill`);

    skillsInput.value = skillsValue;

    const newObj = { point: skillsInput.value }
    const newInfoCardArray = skillsSection.infoCardArray.filter((object) => {
      return JSON.stringify(object) !== JSON.stringify(newObj);
    });

    setSkillsSection((skillsSection) => ({
      ...skillsSection,
      infoCardArray: newInfoCardArray,
    }));

    setVisibleForm("skills-form");
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

  function languagesFormEditHandler(e) {
       e.preventDefault();
    const infoCard = e.target.parentElement;
    const languageValue = infoCard.children[0].textContent;

    const languageInput = document.querySelector(`
      #language-form input#language`);

    languageInput.value = languageValue;

    const newObj = { point: languageInput.value }
    const newInfoCardArray = languagesSection.infoCardArray.filter((object) => {
      return JSON.stringify(object) !== JSON.stringify(newObj);
    });

    setLanguagesSection((languageSection) => ({
      ...languageSection,
      infoCardArray: newInfoCardArray,
    }));

    setVisibleForm("language-form");
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
