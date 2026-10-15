import { useState } from 'react'
import './my_portfolio.css'

function App() {
  const [tab, setTab] = useState('home')

  return (
    <div className="container">

      <nav>
        <button onClick={() => setTab('home')}>Home</button>
        <button onClick={() => setTab('projects')}>Projects</button>
        <button onClick={() => setTab('contact')}>Contact</button>
      </nav>

      {tab === 'home' && (
        <div>
          <h1>Hi, I'm Mae Villamor</h1>
          <p>I'm a passionate student.</p>
        </div>
      )}

      {tab === 'projects' && (
        <div>
          <h1>Projects</h1>
          <p>Project One - short description</p>
          <p>Project Two - short description</p>
          <p>Project Three - short description</p>
        </div>
      )}

      {tab === 'contact' && (
        <div>
          <h1>Contact</h1>
          <p>Email: villamormae@gmail.com</p>
          <p>GitHub: github.com/mvillamor</p>
        </div>
      )}

    </div>
  )
}

export default App