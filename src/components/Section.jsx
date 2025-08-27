import "../styles/section.css";

function InfoCard({ title, years, positionTitle, point }) {
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
    </div>
  );
}

export default function Section({ sectionHeading, infoCardArray }) {
  return (
    <section className={`${sectionHeading.toLowerCase()} section`}>
      <h1>{sectionHeading}</h1>
      {infoCardArray.map((infoCard) => (
        <InfoCard key={infoCard.title || infoCard.point} {...infoCard} />
      ))}
    </section>
  );
}
