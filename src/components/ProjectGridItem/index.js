import React from 'react'
import './index.css'

const ProjectGridItem = ({ day, title, desc, tags }) => {
  return (
    <div className="card">
      <h2>#{day}</h2>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul className="tags">
        {tags.map(e => (
          <li className="tags__item">{e}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProjectGridItem
