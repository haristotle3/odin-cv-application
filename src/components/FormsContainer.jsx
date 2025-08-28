import { useState } from "react";
import "../styles/formStyles.css";
import {
  GeneralInformationForm,
  ExperienceForm,
  SkillsForm,
  LanguageForm,
  EducationForm,
} from "./Form.jsx";

export default function FormsContainer({
  generalInformationFormSubmissionHandler,
  experienceFormSubmissionHandler,
  educationFormSubmissionHandler,
  skillsFormSubmissionHandler,
  languageFormSubmissionHandler,
}) {
  const [visibleFormID, setVisibleForm] = useState("general-information");

  function dropdownButtonClickHandler(e) {
    const formID = e.target.parentElement.parentElement.id; // e.parentElement.parentElement is the form element
    // Note that <img> inside the <button> is styled to have no pointer events.
    formID !== visibleFormID ? setVisibleForm(formID) : setVisibleForm(null);
  }

  return (
    <div className="forms-container">
      <div className="forms-group">
        <GeneralInformationForm
          dropdownButtonClickHandler={dropdownButtonClickHandler}
          formSubmissionHandler={generalInformationFormSubmissionHandler}
          formVisibleID={visibleFormID}
        />
        <SkillsForm
          dropdownButtonClickHandler={dropdownButtonClickHandler}
          formSubmissionHandler={skillsFormSubmissionHandler}
          formVisibleID={visibleFormID}
        />

        <EducationForm
          dropdownButtonClickHandler={dropdownButtonClickHandler}
          formSubmissionHandler={educationFormSubmissionHandler}
          formVisibleID={visibleFormID}
        />
      </div>
      <div className="forms-group">
        <ExperienceForm
          dropdownButtonClickHandler={dropdownButtonClickHandler}
          formSubmissionHandler={experienceFormSubmissionHandler}
          formVisibleID={visibleFormID}
        />
        <LanguageForm
          dropdownButtonClickHandler={dropdownButtonClickHandler}
          formSubmissionHandler={languageFormSubmissionHandler}
          formVisibleID={visibleFormID}
        />
      </div>
    </div>
  );
}
