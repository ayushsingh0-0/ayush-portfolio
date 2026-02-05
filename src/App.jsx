import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Layout, Smartphone, ChevronDown } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className="portfolio-container">
      {/* --- HERO SECTION --- */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="name">Ayush Singh</h1>
          <h2 className="title">Full Stack Developer</h2>
          <p className="tagline">
            Specializing in Java, Node.js, and Scalable Web Solutions. <br />
            300+ DSA Problems Solved.
          </p>
          
          <div className="contact-links">
            <a href="mailto:ayushsingh.as1920@gmail.com" className="btn btn-primary">
              <Mail size={18} /> Contact Me
            </a>
            {/* Replace '#' with your actual profile links */}
            <a href="#" className="btn btn-outline"><Linkedin size={18} /> LinkedIn</a>
            <a href="#" className="btn btn-outline"><Github size={18} /> GitHub</a>
          </div>
        </div>
      </header>

      {/* --- SKILLS SECTION --- */}
      <section className="section skills-section">
        <h3 className="section-title">Technical Arsenal</h3>
        <div className="skills-grid">
          <div className="skill-card">
            <Code className="skill-icon" />
            <h4>Languages</h4>
            <p>Java, JavaScript, SQL</p>
          </div>
          <div className="skill-card">
            <Layout className="skill-icon" />
            <h4>Frontend</h4>
            <p>React.js, Angular, HTML/CSS</p>
          </div>
          <div className="skill-card">
            <Database className="skill-icon" />
            <h4>Backend</h4>
            <p>Node.js, Express.js, MySQL</p>
          </div>
          <div className="skill-card">
            <Smartphone className="skill-icon" />
            <h4>Tools</h4>
            <p>Git, GitHub, Android Studio</p>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section className="section">
        <h3 className="section-title">Experience</h3>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-header">
              <div>
                <h4>Sabado Technologies</h4>
                <span className="role">Full Stack Developer Intern</span>
              </div>
              <span className="date">2025 - Present</span>
            </div>
            <ul className="timeline-details">
              <li>Built production-grade backend logging using <strong>Winston (Node.js)</strong> with daily log rotation and severity filtering.</li>
              <li>Migrated Angular application from v13 to v20, implementing <strong>PrimeNG v19</strong> for consistent UI.</li>
              <li>Enhanced code maintainability and runtime performance through strategic refactoring.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="section bg-light">
        <h3 className="section-title">Featured Projects</h3>
        <div className="projects-grid">
          
          {/* Project 1: Hospital Management */}
          <div className="project-card">
            <div className="project-header">
              <h4>Hospital Management System</h4>
              <span className="badge">Desktop App</span>
            </div>
            <p className="project-desc">
              A comprehensive system to manage administrative workflows, patient records, appointment scheduling, and billing modules.
            </p>
            <div className="tech-stack">
              <span>Java</span>
              <span>SQL</span>
              <span>Swing</span>
            </div>
            <div className="project-links">
              <a href="#" className="link-text">View Code <ExternalLink size={14} /></a>
            </div>
          </div>

          {/* Project 2: QR Scanner */}
          <div className="project-card">
            <div className="project-header">
              <h4>QR Code Scanner</h4>
              <span className="badge">Android App</span>
            </div>
            <p className="project-desc">
              Real-time QR code processing application featuring camera integration, result parsing, and intuitive UI handling.
            </p>
            <div className="tech-stack">
              <span>Java</span>
              <span>Android SDK</span>
              <span>ZXing Lib</span>
            </div>
            <div className="project-links">
              <a href="#" className="link-text">View Code <ExternalLink size={14} /></a>
            </div>
          </div>

        </div>
      </section>

      {/* --- EDUCATION SECTION --- */}
      <section className="section">
        <h3 className="section-title">Education</h3>
        <div className="education-card">
          <div className="edu-header">
            <h4>Madan Mohan Malaviya University of Technology</h4>
            <span>2021 - 2025</span>
          </div>
          <p className="degree">B.Tech in Electrical Engineering</p>
          <p className="gpa">GPA: 7.97</p>
          <div className="achievements">
            <small>• Core organizer of TechSrijan (Annual Tech Fest)</small>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <p>© 2026 Ayush Singh. Built with React.</p>
        <div className="footer-contact">
          <span><Phone size={14} /> +91 8299540876</span>
          <span><Mail size={14} /> ayushsingh.as1920@gmail.com</span>
        </div>
      </footer>
    </div>
  );
};

export default App;