import React from 'react'
import './App.css'
import TagList from './components/TagList'
import ProjectGrid from './components/ProjectGrid'
import github from './assets/github-logo.png'
import link from './assets/link.png'

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="hero">
          <h1>Code Groove</h1>
          <h2>A code a day, keeps the bug away!</h2>
        </div>
        <div className="user" style={{ gridArea: 'user1' }}>
          <a
            href="https://github.com/vbhv98"
            target="_blank"
            rel="noopener noreferrer">
            <img src={github} alt="github" />
            /vbhv98
          </a>
          <a href="http://vbhv.me" target="_blank" rel="noopener noreferrer">
            <img src={link} alt="link" />
            vbhv.me
          </a>
        </div>
        <div className="user" style={{ gridArea: 'user2' }}>
          <a href="http://aedit.me" target="_blank" rel="noopener noreferrer">
            <img src={link} alt="link" />
            aedit.me
          </a>
          <a
            href="https://github.com/aedit"
            target="_blank"
            rel="noopener noreferrer">
            <img src={github} alt="github" />
            /aedit
          </a>
        </div>
      </header>
      <hr />
      <TagList />
      <ProjectGrid />
    </div>
  )
}

export default App
