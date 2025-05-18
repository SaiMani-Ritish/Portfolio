import React, { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <nav className="navbar">
        <h1>Sai Mani Ritish</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={toggleDarkMode} className="toggle-mode">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      <section id="home" className="section fade-in">
        <h2>Welcome</h2>
        <p>I am a Full-Stack Developer with a focus on AI/ML and Cloud technologies.</p>
      </section>

      <section id="about" className="section fade-in">
        <h2>About Me</h2>
        <p>I'm currently pursuing an M.S. in Computer Science with strong interests in building intelligent, scalable applications.</p>
      </section>

      <section id="skills" className="section fade-in">
        <h2>Skills</h2>
        <ul>
          <li>Languages: Python, C++, SQL, JavaScript</li>
          <li>Frameworks: React, Node.js, Express</li>
          <li>Tools: Docker, AWS, Git</li>
        </ul>
      </section>

      <section id="projects" className="section fade-in">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="card">
            <img src="/images/schedulearn.png" alt="ScheduLearn" />
            <h3>ScheduLearn</h3>
            <p>AI-powered scheduling assistant.</p>
            <a href="#">View Project</a>
          </div>
          <div className="card">
            <img src="/images/finance.png" alt="Finance App" />
            <h3>Personal Finance App</h3>
            <p>MERN stack with AI financial insights.</p>
            <a href="#">View Project</a>
          </div>
          <div className="card">
            <img src="/images/bloodbank.png" alt="Blood Bank" />
            <h3>Online Blood Bank System</h3>
            <p>AWS-based scalable system.</p>
            <a href="#">View Project</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section fade-in">
        <h2>Contact</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="footer">© 2025 Sai Mani Ritish. All rights reserved.</footer>
    </div>
  );
}

export default App;