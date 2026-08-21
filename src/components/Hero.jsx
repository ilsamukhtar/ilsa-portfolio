function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">

        <div className="hero-content">

          <div className="availability">
            <span></span>
            OPEN TO OPPORTUNITIES
          </div>

          <p className="eyebrow animated-role">
            CLOUD & DEVOPS ENGINEER
          </p>

          <h1>
            Building
            <br />
            <span>reliable</span> infrastructure.
          </h1>

          <p className="hero-text">
            I'm Ilsa Mukhtar, a Cloud & DevOps Engineer focused on
            infrastructure automation, CI/CD, cloud platforms,
            containerization and observability.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              Explore My Work
              <span>→</span>
            </a>

            <a href="#contact" className="btn-outline">
              Let's Connect
            </a>
          </div>

          <div className="hero-links">
            <a
              href="https://github.com/ilsamukhtar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ilsa-mukhtar"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:ilsamukhtar3@gmail.com">
              Email ↗
            </a>
          </div>

        </div>

        <div className="hero-terminal">

          <div className="terminal-window">

            <div className="terminal-header">
              <div className="terminal-dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <span>ilsa@devops: ~</span>
            </div>

            <div className="terminal-body">

              <p>
                <b>$</b> whoami
              </p>

              <p className="terminal-output">
                ilsa@cloud-devops
              </p>

              <p>
                <b>$</b> kubectl get pods
              </p>

              <p className="terminal-output">
                NAME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;STATUS
              </p>

              <p className="terminal-success">
                portfolio&nbsp;&nbsp;&nbsp;Running
              </p>

              <p>
                <b>$</b> terraform apply
              </p>

              <p className="terminal-success">
                Infrastructure deployed ✓
              </p>

              <p>
                <b>$</b> docker ps
              </p>

              <p className="terminal-success">
                Containers running ✓
              </p>

              <span className="cursor">_</span>

            </div>

          </div>

          <div className="floating-tech tech-one">
            AWS
          </div>

          <div className="floating-tech tech-two">
            Kubernetes
          </div>

          <div className="floating-tech tech-three">
            Terraform
          </div>

        </div>

      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div></div>
      </div>

    </section>
  );
}

export default Hero;