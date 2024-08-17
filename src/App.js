import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navigationBar">
          <div className="nav-logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div className={menuOpen ? 'line open' : 'line'}></div>
            <div className={menuOpen ? 'line open' : 'line'}></div>
            <div className={menuOpen ? 'line open' : 'line'}></div>
          </div>
          <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Case</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Recent Work</a></li>
            <li><a href="#">Get in Touch</a></li>
          </ul>
          <div className="navSocials">
            <img src="github.svg" alt="github" />
            <img src="linkedin.svg" alt="linkedin" />
          </div>
        </nav>
      </header>

      <section className="heroSection">
        <div className="heroSectionContainer">
          <div className="heroSectionText">
            <h1 className="heroSectionMainText">Your Name Here</h1>
            <p className="heroSectionSubText">Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="heroSectionButton">Let's get started
              <img className="vector" src="Vector.png" alt="Arrow" />
            </button>
          </div>
          <div className="heroSectionImage">
            <img className="personalImage" src="https://placehold.co/350x350" alt="Personal" />
          </div>
        </div>
        <div className="heroMentions">
          <p className="mentionsText">Worked with</p>
          <div className="mentionsCards">
            <img src="logos.png" alt="Logos" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
