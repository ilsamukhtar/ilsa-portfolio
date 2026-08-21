function About() {
  return (
    <section id="about" className="section">

      <div className="section-heading">
        <span>01</span>
        <p>ABOUT ME</p>
      </div>

      <div className="about-grid">

        <div>
          <h2>
            Turning infrastructure
            <br />
            into <span>automation.</span>
          </h2>
        </div>

        <div className="about-content">

          <p>
            I'm a Cloud & DevOps Engineer with 1+ year of hands-on
            experience working with infrastructure automation,
            CI/CD pipelines, containers, Kubernetes and cloud
            environments.
          </p>

          <p>
            My focus is building reliable deployment workflows,
            automating repetitive infrastructure tasks and creating
            observable systems that are easier to operate and scale.
          </p>

          <div className="about-stats">

            <div>
              <strong>5+</strong>
              <span>CI/CD Pipelines</span>
            </div>

            <div>
              <strong>10+</strong>
              <span>Linux Servers</span>
            </div>

            <div>
              <strong>15+</strong>
              <span>Bash Scripts</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;