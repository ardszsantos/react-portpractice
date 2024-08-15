import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav className="navigationBar">
        <ul>
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
      <section className='heroSection'>
        <div className='heroSectionContainer'>
          <div className='heroSectionText'>
            <h1 className='heroSectionMainText'>Your Name Here</h1>
            <p className='heroSectionSubText'>Intro text: Lorem ipsum dolor sit amet, consectetur <br/>
              adipiscing elit, sed do eiusmod tempor incididunt ut <br/>
              labore et dolore magna aliqua.</p>
            <button className='heroSectionButton'>Let's get started
              <img className='vector' src='Vector.png'/>
            </button>
          </div>
          <div className='heroSectionImage'>
            <img className='personalImage' src='https://placehold.co/350x350'/>
          </div>
        </div>
        <div className='heroMentions'>
            <p className='mentionsText'>Worked with</p>
            <div className='mentionsCards'>
              <img  src='logos.png' />
            </div>
        </div>
      </section>
    </div>
  );
}

export default App;
