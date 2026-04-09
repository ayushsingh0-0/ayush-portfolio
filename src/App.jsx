import React from 'react';
import { Mail, Phone, ArrowUpRight, Code, Database, Layout, Smartphone, Github, Linkedin } from 'lucide-react';

const App = () => {
  return (
    <div className="container">
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="logo">Ayush.</div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#projects">Works</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
        </div>
        <div className="contact-number">
          <Phone size={16} /> +91 8299540876
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="hero">
        <div className="hero-left">
           {/* Email oriented vertically like the design */}
          <a href="mailto:ayushsingh.as1920@gmail.com" className="vertical-email">
            ayushsingh.as1920@gmail.com
          </a>
        </div>

        <div className="hero-center">
          <h1 className="headline">
            Hey There, <br /> I’m <span className="highlight-text">Ayush</span>
          </h1>
          
          <div className="profile-container">
            {/* BRUSH STROKE BACKGROUND EFFECT */}
            <div className="brush-stroke"></div>
            {/* PLACEHOLDER IMAGE - REPLACE WITH YOUR PHOTO */}
            <img 
              src="https://placehold.co/400x500/1e4d45/FFF?text=Your+Photo" 
              alt="Ayush Singh" 
              className="profile-img" 
            />
          </div>
        </div>

        <div className="hero-right">
          <p className="bio-text">
            I build scalable full-stack applications and solve complex problems. And I love what I do.
          </p>
          
          <div className="badge-container">
            <div className="circular-badge">
              <span>Full Stack<br/>Developer</span>
            </div>
          </div>
        </div>
      </header>

      {/* --- STATS / EXPERIENCE BAR --- */}
      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-number">2025</span>
          <span className="stat-label">Internship @ Sabado</span>
        </div>
        <div className="stat-line"></div>
         <div className="stat-item">
          <span className="stat-number">300+</span>
          <span className="stat-label">DSA Problems Solved</span>
        </div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <section className="services-section" id="services">
        
        {/* Left Column: Service Cards */}
        <div className="services-list">
          <div className="service-card active">
            <div className="icon-box"><Layout size={24} /></div>
            <div className="service-info">
              <h3>Frontend Dev</h3>
              <p>React, Angular, Tailwind</p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-box"><Database size={24} /></div>
            <div className="service-info">
              <h3>Backend Dev</h3>
              <p>Node.js, Express, SQL</p>
            </div>
          </div>

          <div className="service-card">
            <div className="icon-box"><Smartphone size={24} /></div>
            <div className="service-info">
              <h3>App Dev</h3>
              <p>Android, Java, XML</p>
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="services-content">
          <h2 className="section-heading">What do I help?</h2>
          <p className="section-desc">
            I help companies build robust web solutions. From designing intuitive frontends to engineering complex backend logs and databases.
          </p>
          <p className="section-desc">
            Currently working on high-performance applications using the latest tech stack like Next.js and Node.js.
          </p>

          <div className="project-stats">
            <div className="p-stat">
              <h3>3+</h3>
              <p>Major Projects</p>
            </div>
            <div className="p-stat">
              <h3>8.9</h3>
              <p>CGPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <footer className="footer-cta">
        <div className="cta-content">
          <h2>Let's make something amazing together.</h2>
          <p>Start by <a href="mailto:ayushsingh.as1920@gmail.com" className="say-hi">saying hi</a></p>
        </div>
      </footer>
    </div>
  );
};

export default App;