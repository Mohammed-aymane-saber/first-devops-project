import './App.css';

function App() {
  return (
    <div className="App">
      {/* Animated background layers */}
      <div className="bg" aria-hidden="true">
        <div className="gradient" />
        <div className="stars" />
        <div className="twinkles" />
        <div className="orbs">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Sticky top navigation */}
      <nav className="top-nav">
        <div className="brand">DevOps Journey</div>
        <div className="links">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#pipeline">CI/CD</a>
          <a href="#aws">AWS</a>
          <a href="#tooling">Tooling</a>
          <a href="#deploy">Deployment</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero">
        <div className="hero-inner glass">
          <h1>Welcome to my first DevOps project</h1>
          <p>
            Fully automated with CI/CD, Infrastructure as Code, and cloud-native
            services. Scroll to explore the stack, pipeline, and deployment.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#pipeline">See the Pipeline</a>
            <a className="btn ghost" href="#about">Learn More</a>
          </div>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2>About the Project</h2>
            <p>
              This project demonstrates how modern DevOps practices accelerate
              delivery while improving reliability. It includes branch-based
              workflows, automated tests, and continuous deployment to a cloud
              environment.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Objectives</h3>
                <ul>
                  <li>Automate build, test, and deploy</li>
                  <li>Ensure repeatable infra with IaC</li>
                  <li>Enable rapid, safe iterations</li>
                </ul>
              </article>
              <article className="card">
                <h3>Outcomes</h3>
                <ul>
                  <li>Faster feedback cycles</li>
                  <li>Reduced manual effort and risk</li>
                  <li>Observable and auditable pipelines</li>
                </ul>
              </article>
              <article className="card">
                <h3>Security</h3>
                <ul>
                  <li>Dependency scanning</li>
                  <li>Secrets management</li>
                  <li>Least-privileged IAM roles</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Pipeline Section */}
        <section id="pipeline" className="section alt">
          <div className="container">
            <h2>CI/CD Pipeline</h2>
            <p>
              A typical run: lint → unit tests → build → security checks →
              package → deploy. On main branch merges, an automated production
              release is triggered.
            </p>
            <div className="timeline">
              <div className="step">
                <h4>1. Source & Lint</h4>
                <p>Pre-commit hooks and static analysis maintain code quality.</p>
              </div>
              <div className="step">
                <h4>2. Test</h4>
                <p>Unit and component tests run in parallel for fast feedback.</p>
              </div>
              <div className="step">
                <h4>3. Build</h4>
                <p>Optimized production bundles with cache-busting assets.</p>
              </div>
              <div className="step">
                <h4>4. Security</h4>
                <p>Dependency and container scans block vulnerable releases.</p>
              </div>
              <div className="step">
                <h4>5. Deploy</h4>
                <p>Zero-downtime rollout with health checks and monitoring.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AWS Section */}
        <section id="aws" className="section">
          <div className="container">
            <h2>Running on AWS</h2>
            <p>
              Hosted using AWS services. Common architectures include S3 + CloudFront
              for static hosting, or ECS/EKS for containerized workloads with
              Application Load Balancers and auto scaling.
            </p>
            <div className="grid">
              <div className="tile">S3 + CloudFront</div>
              <div className="tile">Route 53</div>
              <div className="tile">ECS/EKS</div>
              <div className="tile">RDS/DynamoDB</div>
              <div className="tile">CloudWatch</div>
              <div className="tile">IAM</div>
            </div>
          </div>
        </section>

        {/* Tooling Section */}
        <section id="tooling" className="section alt">
          <div className="container">
            <h2>Tooling</h2>
            <p>Languages, package managers, and CI providers used in the stack.</p>
            <ul className="pill-list">
              <li>React</li>
              <li>Node.js</li>
              <li>npm</li>
              <li>Jest</li>
              <li>ESLint</li>
              <li>GitHub Actions</li>
              <li>Docker</li>
              <li>Terraform</li>
            </ul>
          </div>
        </section>

        {/* Deployment Section */}
        <section id="deploy" className="section">
          <div className="container">
            <h2>Deployment Strategy</h2>
            <p>
              Uses environment-specific configuration and infrastructure
              promotion. Features are validated in staging before production.
            </p>
            <div className="cards">
              <article className="card">
                <h3>Blue/Green</h3>
                <p>Switch traffic only after the new environment is healthy.</p>
              </article>
              <article className="card">
                <h3>Canary</h3>
                <p>Gradually increase traffic while monitoring metrics.</p>
              </article>
              <article className="card">
                <h3>Rollback</h3>
                <p>Fast, automated revert to last known good version.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section alt">
          <div className="container">
            <h2>Contact</h2>
            <p>
              Want to learn more or collaborate? Reach out and let’s build
              something great.
            </p>
            <div className="contact-grid">
              <a className="btn primary" href="mailto:example@example.com">Email Me</a>
              <a className="btn ghost" href="#hero">Back to Top</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <small>© {new Date().getFullYear()} DevOps Journey • Built with React</small>
        </div>
      </footer>
    </div>
  );
}

export default App;
