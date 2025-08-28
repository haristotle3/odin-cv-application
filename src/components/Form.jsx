import dropdownDownButton from "../assets/icons/arrow-down-drop-circle-outline.svg";
import dropdownUpButton from "../assets/icons/arrow-up-drop-circle-outline.svg";

function InputGroup({ type, id, label, value, pattern }) {
  const TEXTAREA_ROWSIZE = 4;
  const TEXTAREA_COLSIZE = 50;

  return (
    <div className="input-group">
      {type === "textarea" && (
        <>
          <textarea
            id={id}
            rows={TEXTAREA_ROWSIZE}
            cols={TEXTAREA_COLSIZE}
            placeholder=" "
            required
          ></textarea>
          <label htmlFor={id}>{label}</label>
        </>
      )}
      {type === "submit" && (
        <>
          <input type={type} value={value} placeholder=" " />
        </>
      )}
      {type !== "submit" && type !== "textarea" && (
        <>
          <input
            type={type}
            id={id}
            pattern={pattern}
            placeholder=" "
            required
          />
          <label htmlFor={id}>{label}</label>
        </>
      )}
    </div>
  );
}

function Form({
  id,
  formTitle,
  dropdownButtonClickHandler,
  formSubmissionHandler,
  formVisible,
  inputGroupArray,
}) {
  return (
    <form id={id} onSubmit={formSubmissionHandler}>
      <div className="title-dropdown-button">
        <h1>{formTitle}</h1>
        <button
          type="button"
          onClick={dropdownButtonClickHandler}
          className="dropdown-btn"
        >
          <img
            src={formVisible ? dropdownUpButton : dropdownDownButton}
            alt="dropdown-icon"
            className="icon"
          />
        </button>
      </div>

      <div className={`all-inputs-container ${formVisible || "hidden"}`}>
        {inputGroupArray.map((inputGroup) => (
          <InputGroup key={inputGroup.id} {...inputGroup} />
        ))}
      </div>
    </form>
  );
}

export function GeneralInformationForm({
  dropdownButtonClickHandler,
  formSubmissionHandler,
  formVisibleID,
}) {
  const FORM_ID = "general-information-form";

  const inputGroupArray = [
    { type: "text", id: "name", label: "Name" },
    { type: "tel", id: "phone-number", label: "Phone" },
    { type: "email", id: "email", label: "Email" },
    { type: "text", id: "website", label: "Website" }, // type: "url" enforces the url to start with http:// or https://
    { type: "textarea", id: "about", label: "Introduce yourself" },
    { type: "submit", id: `${FORM_ID}-submit`, value: "Submit" },
  ];

  return (
    <Form
      id={FORM_ID}
      formTitle={"General Information"}
      dropdownButtonClickHandler={dropdownButtonClickHandler}
      formSubmissionHandler={formSubmissionHandler}
      formVisible={formVisibleID === FORM_ID}
      inputGroupArray={inputGroupArray}
    />
  );
}

export function ExperienceForm({
  dropdownButtonClickHandler,
  formSubmissionHandler,
  formVisibleID,
}) {
  const FORM_ID = "experience-form";

  const inputGroupArray = [
    { type: "text", id: "company-name", label: "Company Name" },
    {
      type: "text",
      id: "experience-start-year",
      pattern: "[12][0-9]{3}",
      label: "Start year",
    },
    {
      type: "text",
      id: "experience-end-year",
      pattern: "[12][0-9]{3}",
      label: "End year",
    },
    { type: "text", id: "job-title", label: "Job title" },
    { type: "textarea", id: "role-description", label: "Describe your role" },
    { type: "submit", id: `${FORM_ID}-submit`, value: "Add" },
  ];

  return (
    <Form
      id={FORM_ID}
      formTitle={"Experience"}
      dropdownButtonClickHandler={dropdownButtonClickHandler}
      formSubmissionHandler={formSubmissionHandler}
      formVisible={formVisibleID === FORM_ID}
      inputGroupArray={inputGroupArray}
    />
  );
}


export function SkillsForm({
  dropdownButtonClickHandler,
  formSubmissionHandler,
  formVisibleID,
}) {
  const FORM_ID = "skills-form";

  const inputGroupArray = [
    { type: "text", id: "skill", label: "Skill (Java, C++ etc.)" },
    { type: "submit", id: `${FORM_ID}-submit`, value: "Add" },
  ];

  return (
    <Form
      id={FORM_ID}
      formTitle={"Skills"}
      dropdownButtonClickHandler={dropdownButtonClickHandler}
      formSubmissionHandler={formSubmissionHandler}
      formVisible={formVisibleID === FORM_ID}
      inputGroupArray={inputGroupArray}
    />
  );
}

export function LanguageForm({
  dropdownButtonClickHandler,
  formSubmissionHandler,
  formVisibleID,
}) {
  const FORM_ID = "language-form";
  const inputGroupArray = [
    {
      type: "text",
      id: "language",
      label: "Language (English, Japanese etc.)",
    },
    { type: "submit", id: `${FORM_ID}-submit`, value: "Add" },
  ];

  return (
    <Form
      id={FORM_ID}
      formTitle={"Language"}
      dropdownButtonClickHandler={dropdownButtonClickHandler}
      formSubmissionHandler={formSubmissionHandler}
      formVisible={formVisibleID === FORM_ID}
      inputGroupArray={inputGroupArray}
    />
  );
}
