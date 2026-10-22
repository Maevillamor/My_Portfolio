import './my_portfolio.css'
import profileImg from './My2x2pic.jpg'

function App() {
  return (
    <div className="container">

      <nav>
        <span className="logo">Exploring and Learning</span>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="home">
        <div className="home-text">
          <p className="greeting">Hello, welcome to my portfolio</p>
          <h1> I'm <span className="accent">Mae Villamor</span></h1>
          <p className="intro">
            Aspiring UI/UX designer and Data Analyst.
          </p>
          
          <div className="buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <img src={profileImg} alt="Mae Villamor" className="home-img" />
      </section>

      <section id="projects">
      <h2>Projects</h2>
       <div className="cards">

      <div className="card">
      <h3>Clinic LogBook System</h3>
      <p>A web-based system for managing clinic logs and patient information.</p>
      <a
        href="https://github.com/Maevillamor/Python_Final-Project"
        target="_blank"
        rel="noreferrer"
        className="card-link"
      >
        View on GitHub ↗
      </a>
      </div>

    <div className="card">
      <h3>Alday Dental Clinic System</h3>
      <p>A web-based system for managing patient records and appointments at Alday Dental Clinic.</p>
      <a
        href="https://github.com/Maevillamor/AldayDentClinic"
        target="_blank"
        rel="noreferrer"
        className="card-link"
      >
        View on GitHub ↗
      </a>
    </div>

    <div className="card">
      <h3>My Music Playlist</h3>
      <p>A simple web application for creating and managing music playlists.</p>
      <a
        href="https://github.com/Maevillamor/music-playlist"
        target="_blank"
        rel="noreferrer"
        className="card-link"
      >
        View on GitHub ↗
      </a>
    </div>

     </div>
    </section>
      <section id="about">
        <h2>About Me</h2>
        <p>I'm a third-year student at Batangas State University-TNEU Balayan Campus who loves to explore and share ideas 
          about building projects. I'm currently looking for an internship or entry-level opportunity
          where I can learn and grow as a UI/UX designer and Data Analyst.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:villamormaeg@gmail.com">villamormaeg@gmail.com</a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/Maevillamor" target="_blank" rel="noreferrer">
            github.com/Maevillamor
          </a>
        </p>
      </section>

    </div>
  )
}

export default App