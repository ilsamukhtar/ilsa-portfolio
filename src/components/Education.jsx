const education = [
  {
    title: "Development Operations & Cloud Advancement",
    institute: "Al Nafi International College",
    detail: "EduQual Level 4 (UK Endorsed)",
    date: "2024 — 2026",
  },
  {
    title: "Intermediate — ICS",
    institute: "FG College P.O.F Havelian Cantt",
    detail: "Computer Science",
    date: "Completed",
  },
];

function Education() {
  return (
    <section id="education" className="section">

      <div className="section-heading">
        <span>06</span>
        <p>EDUCATION</p>
      </div>

      <h2 className="large-title">
        Academic <span>foundation.</span>
      </h2>

      <div className="education-list">

        {education.map((item, index) => (
          <div className="education-item" key={index}>

            <span className="education-year">
              {item.date}
            </span>

            <div>
              <h3>{item.title}</h3>
              <p>{item.institute}</p>
              <span>{item.detail}</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Education;