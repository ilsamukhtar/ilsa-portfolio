const experience = [
  {
    company: "Al Nafi.Cloud",
    role: "Junior DevOps Engineer",
    date: "Nov 2025 — Apr 2026",
    points: [
      "Engineered and maintained 5+ CI/CD pipelines using Jenkins and GitHub Actions.",
      "Packaged 3+ applications into Docker containers using multi-stage builds and deployed them on Kubernetes.",
      "Provisioned repeatable AWS infrastructure using Terraform and standardized server configurations with Ansible.",
      "Established observability using Prometheus and Grafana for proactive monitoring and alerting.",
    ],
  },
  {
    company: "Al Nafi.Cloud",
    role: "Linux System Administrator",
    date: "Feb 2025 — Oct 2025",
    points: [
      "Administered 10+ Linux servers across Ubuntu, CentOS and Debian environments.",
      "Developed 15+ Bash automation scripts to eliminate repetitive administrative tasks.",
      "Configured and maintained DNS, DHCP and NFS services across multi-server environments.",
      "Performed system health audits, log analysis and incident troubleshooting.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section">

      <div className="section-heading">
        <span>03</span>
        <p>EXPERIENCE</p>
      </div>

      <h2 className="large-title">
        Where I've <span>worked.</span>
      </h2>

      <div className="experience-list">

        {experience.map((job, index) => (
          <article className="experience-item" key={index}>

            <div className="experience-number">
              0{index + 1}
            </div>

            <div className="experience-main">

              <div className="experience-top">

                <div>
                  <h3>{job.role}</h3>
                  <p>{job.company}</p>
                </div>

                <span>{job.date}</span>

              </div>

              <ul>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Experience;