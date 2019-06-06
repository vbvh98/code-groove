import React from 'react'
import './App.css'
import TagList from './components/TagList'
import ProjectGrid from './components/ProjectGrid'

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Code Groove</h1>
        <h2>A code a day, keeps the bug away!</h2>
      </header>
      <hr />
      <TagList />
      <ProjectGrid />
    </div>
  )
}

export default App
