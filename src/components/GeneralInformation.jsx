import "../styles/generalInformation.css";
import phoneIcon from "../assets/icons/phone.svg";
import emailIcon from "../assets/icons/email-outline.svg";
import webIcon from "../assets/icons/web.svg";

function AboutMe({ about }) {
  return (
    <div className="about-me">
      <h1>ABOUT ME</h1>
      <p>{about}</p>
    </div>
  );
}

function ContactDetails({ email, phone, website }) {
  return (
    <div className="contact-details">
      <ul>
        {phone && (
          <li>
            <img src={phoneIcon} alt="Phone Icon" className="icon" />
            <span>{phone}</span>
          </li>
        )}
        {email && (
          <li>
            <img src={emailIcon} alt="Email Icon" className="icon" />
            <span>{email}</span>
          </li>
        )}
        {website && (
          <li>
            <img src={webIcon} alt="Website Icon" className="icon" />
            <span>{website}</span>
          </li>
        )}
      </ul>
    </div>
  );
}

export default function GeneralInformation({
  name,
  email,
  phone,
  website,
  about,
}) {
  return (
    <div className="general-information">
      <div className="name-details">
        <ContactDetails email={email} phone={phone} website={website} />
        {name && <h1>{name.toUpperCase()}</h1>}
      </div>
      {about && <AboutMe about={about} />}
    </div>
  );
}
