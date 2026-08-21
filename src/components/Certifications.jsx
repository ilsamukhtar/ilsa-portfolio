function Certifications() {
  return (
    <section id="certifications" className="section">

      <div className="section-heading">
        <span>05</span>
        <p>CERTIFICATIONS</p>
      </div>

      <div className="cert-header">

        <h2>
          Credentials that
          <br />
          <span>back my skills.</span>
        </h2>

        <p>
          Professional learning and certifications in DevOps,
          cloud infrastructure and related technologies.
        </p>

      </div>

      <div className="certificate-card">

        <div className="certificate-badge">
          CERT
          <strong>01</strong>
        </div>

        <div className="certificate-content">

          <span className="certificate-label">
            AL NAFI
          </span>

          <h3>Certificate in DevOps and Cloud</h3>

          <p>
            Successfully completed the DevOps and Cloud program
            at Al Nafi.
          </p>

          <div className="certificate-details">

            <div>
              <span>ISSUED</span>
              <strong>09 June 2026</strong>
            </div>

            <div>
              <span>CERTIFICATE ID</span>
              <strong>33414-2</strong>
            </div>

            <div>
              <span>ISSUED TO</span>
              <strong>Ilsa Mukhtar</strong>
            </div>

          </div>

        </div>

        <a
          href={`${window.location.origin}/ilsa-portfolio/certificates/devops-cloud.pdf`}
          target="_blank"
          rel="noreferrer"
          className="certificate-button"
        >
          View Certificate
          <span>↗</span>
        </a>

      </div>

    </section>
  );
}

export default Certifications;