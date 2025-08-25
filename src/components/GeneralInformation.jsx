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
        <li>
          <img src="" alt="Phone Icon" />
          {phone}
        </li>
        <li>
          <img src="" alt="Email Icon" />
          {email}
        </li>
        <li>
          <img src="" alt="Website Icon" />
          {website}
        </li>
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
        <h1>{name}</h1>
      </div>
      <ContactDetails email={email} phone={phone} website={website} />
      <AboutMe about={about} />
    </div>
  );
}
