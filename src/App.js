import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [activeId, setActiveId] = useState('hero');
  const [showTop, setShowTop] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sectionIds = ['hero', 'about', 'pipeline', 'aws', 'tooling', 'deploy', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 }
    );

    sections.forEach((sec) => io.observe(sec));

    // Reveal-on-scroll observer
    const revealTargets = Array.from(document.querySelectorAll('.reveal'));
    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealIO.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    revealTargets.forEach((el) => revealIO.observe(el));

    const onScroll = () => {
      setShowTop(window.scrollY > 400);
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setProgress(pct);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      io.disconnect();
      revealIO.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="App">
      {/* Scroll progress bar (like GitHub) */}
      <div className="progress-container" aria-hidden="true">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
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
          <a className={activeId === 'hero' ? 'active' : ''} href="#hero">Home</a>
          <a className={activeId === 'about' ? 'active' : ''} href="#about">About</a>
          <a className={activeId === 'pipeline' ? 'active' : ''} href="#pipeline">CI/CD</a>
          <a className={activeId === 'aws' ? 'active' : ''} href="#aws">AWS</a>
          <a className={activeId === 'tooling' ? 'active' : ''} href="#tooling">Tooling</a>
          <a className={activeId === 'deploy' ? 'active' : ''} href="#deploy">Deployment</a>
          <a className={activeId === 'contact' ? 'active' : ''} href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero">
        <div className="hero-inner glass reveal">
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
          <div className="container reveal">
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
          <div className="container reveal">
            <h2>CI/CD Pipeline</h2>
            <p>
              A typical run: lint → unit tests → build → security checks →
              package → deploy. On main branch merges, an automated production
              release is triggered.
            </p>
            <div className="diagram-wrap">
              <img src="/pipeline-diagram.svg" alt="CI/CD pipeline diagram" className="diagram" />
            </div>
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
          <div className="container reveal">
            <h2>Running on AWS</h2>
            <p>
              Hosted using AWS services. Common architectures include S3 + CloudFront
              for static hosting, or ECS/EKS for containerized workloads with
              Application Load Balancers and auto scaling.
            </p>
            <div className="diagram-wrap">
              <img src="/aws-architecture.svg" alt="AWS reference architecture" className="diagram" />
            </div>
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
          <div className="container reveal">
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
          <div className="container reveal">
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
          <div className="container reveal">
            <h2>Contact</h2>
            <p>
              Want to learn more or collaborate? Reach out and let’s build
              something great.
            </p>
            <div className="contact-grid">
              <a className="btn primary" href="mailto:your.email@example.com">Email Me</a>
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

      {showTop && (
        <button aria-label="Back to top" className="back-to-top" onClick={toTop}>
          ↑
        </button>
      )}
    </div>
  );
}

export default App;
