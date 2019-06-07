import React from 'react'
import ProjectGridItem from '../ProjectGridItem'
import './index.css'
import projects from '../../assets/projects'

const ProjectGrid = () => {
  return (
    <div>
      <section className="container">
        {projects.reverse().map(project => (
          <ProjectGridItem {...project} />
        ))}
      </section>
    </div>
  )
}

export default ProjectGrid
