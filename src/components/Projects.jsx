const projects = [
  {
    number: "01",
    featured: true,
    title: "Production-Ready CI/CD Pipeline on AWS",
    description:
      "End-to-end automated deployment pipeline combining Jenkins, GitHub Actions, Docker, AWS EKS and Terraform.",
    result:
      "Deployment time reduced from 45 minutes to under 8 minutes.",
    technologies: [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "AWS EKS",
      "Terraform",
      "Prometheus",
      "Grafana",
    ],
    github:
      "https://github.com/ilsamukhtar/cicd-pipeline-project",
  },

  {
    number: "02",
    title: "ELK Stack Log Ingestion Pipeline",
    description:
      "Fault-tolerant log ingestion architecture using Apache Kafka, Zookeeper, Logstash, Elasticsearch and Kibana.",
    result:
      "Designed for high-volume log ingestion and real-time observability.",
    technologies: [
      "Kafka",
      "Zookeeper",
      "Logstash",
      "Elasticsearch",
      "Kibana",
      "Docker",
    ],
    github:
      "https://github.com/ilsamukhtar/elk-kafka-log-pipeline",
  },

  {
    number: "03",
    title: "3-Tier React + Node.js + MySQL",
    description:
      "Production-style full-stack application using a React frontend, Node.js/Express backend and MySQL database.",
    result:
      "Implemented a complete 3-tier architecture with REST APIs and CRUD operations.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "AWS EC2",
      "PM2",
    ],
    github:
      "https://github.com/ilsamukhtar/3-Tier-react-node-mysql",
  },

  {
    number: "04",
    title: "Kubernetes Cluster Monitoring Stack",
    description:
      "Kubernetes observability stack deployed using Helm with Prometheus, Grafana and alerting.",
    result:
      "Built dashboards for CPU, memory and pod health with proactive alerting.",
    technologies: [
      "Kubernetes",
      "Helm",
      "Prometheus",
      "Grafana",
      "Alertmanager",
    ],
    github: "https://github.com/ilsamukhtar",
  },
];

function Projects() {
  return (
    <section id="projects" className="section">

      <div className="section-heading">
        <span>04</span>
        <p>FEATURED PROJECTS</p>
      </div>

      <div className="projects-header">

        <h2>
          Real work.
          <br />
          <span>Real infrastructure.</span>
        </h2>

        <p>
          Selected DevOps and cloud projects demonstrating
          automation, deployment, monitoring and infrastructure
          engineering.
        </p>

      </div>

      <div className="projects-list">

        {projects.map((project) => (
          <article
            className={`project ${project.featured ? "featured" : ""}`}
            key={project.number}
          >

            <div className="project-number">
              {project.number}
            </div>

            <div className="project-info">

              <div className="project-label">
                {project.featured && "★ FEATURED PROJECT"}
              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-result">
                <span>RESULT</span>
                <p>{project.result}</p>
              </div>

              <div className="project-tech">

                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Repository
                <span>↗</span>
              </a>

            </div>

            <div className="project-arrow">
              ↗
            </div>

          </article>
        ))}

      </div>

    </section>
  );
}

export default Projects;