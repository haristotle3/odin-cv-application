import "../styles/section.css";
import editButtonIcon from "../assets/icons/square-edit-outline.svg";

function InfoCard({ title, years, positionTitle, point, editClickHandler }) {
  return (
    <div className="info-card">
      {title && years && (
        <div className="title years">
          <h2>{title}</h2>
          <h3>{years}</h3>
        </div>
      )}
      {positionTitle && <h4>{positionTitle}</h4>}
      {point && <div className="points">{point}</div>}
      <button type="button" onClick={editClickHandler} className="edit-btn">
        <span>Edit</span>
        <img src={editButtonIcon} />
      </button>
    </div>
  );
}

export default function Section({
  sectionHeading,
  infoCardArray,
  editClickHandler,
}) {
  return (
    sectionHeading && (
      <section className={`${sectionHeading.toLowerCase()} section`}>
        <h1>{sectionHeading}</h1>
        {infoCardArray &&
          infoCardArray.map((infoCard) => (
            <InfoCard
              key={
                infoCard.title && infoCard.years
                  ? infoCard.title + infoCard.years
                  : infoCard.point
              }
              {...infoCard}
              editClickHandler={editClickHandler}
            />
          ))}
      </section>
    )
  );
}
