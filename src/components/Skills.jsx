const skillGroups = [
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Azure"],
  },
  {
    title: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes", "Helm"],
  },
  {
    title: "CI/CD & Automation",
    skills: ["Jenkins", "GitHub Actions", "GitLab CI"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform", "Ansible"],
  },
  {
    title: "Monitoring & Logging",
    skills: ["Prometheus", "Grafana", "ELK Stack"],
  },
  {
    title: "OS & Scripting",
    skills: ["Linux", "Bash", "Python"],
  },
  {
    title: "Version Control",
    skills: ["Git", "GitHub", "GitLab"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section">

      <div className="section-heading">
        <span>02</span>
        <p>TECH STACK</p>
      </div>

      <div className="skills-intro">
        <h2>
          Tools I use to
          <br />
          <span>build & automate.</span>
        </h2>

        <p>
          A practical toolkit focused on cloud infrastructure,
          automation, containerization and observability.
        </p>
      </div>

      <div className="skills-grid">

        {skillGroups.map((group, index) => (
          <div className="skill-group" key={group.title}>

            <div className="skill-index">
              0{index + 1}
            </div>

            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;