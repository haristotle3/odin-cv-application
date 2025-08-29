import "../styles/formStyles.css";
import {
  GeneralInformationForm,
  ExperienceForm,
  SkillsForm,
  LanguageForm,
  EducationForm,
} from "./Form.jsx";

export default function FormsContainer({
  dropdownButtonClickHandler,
  visibleFormID,
  generalInformationFormSubmissionHandler,
  experienceFormSubmissionHandler,
  educationFormSubmissionHandler,
  skillsFormSubmissionHandler,
  languageFormSubmissionHandler,
}) {

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
