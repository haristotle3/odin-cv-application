import { useState } from "react";
import "../styles/formStyles.css";
import {
  GeneralInformationForm,
  ExperienceInformationForm,
  SkillsForm,
  LanguageForm,
} from "./Form.jsx";

export default function FormsContainer() {
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
          formVisibleID={visibleFormID}
        />
        <SkillsForm
          dropdownButtonClickHandler={dropdownButtonClickHandler}
          formVisibleID={visibleFormID}
        />
      </div>
      <div className="forms-group">
        <ExperienceInformationForm
          dropdownButtonClickHandler={dropdownButtonClickHandler}
          formVisibleID={visibleFormID}
        />
        <LanguageForm
          dropdownButtonClickHandler={dropdownButtonClickHandler}
          formVisibleID={visibleFormID}
        />
      </div>
    </div>
  );
}
