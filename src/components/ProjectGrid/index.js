import React from 'react'
import ProjectGridItem from '../ProjectGridItem'

const projects = [
  {
    title: 'Asd',
    desc:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, temporibus!',
  },
  {
    title: 'ren',
    desc:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, temporibus!',
  },
]

const ProjectGrid = () => {
  return (
    <section>
      {projects.map(project => (
        <ProjectGridItem {...project} />
      ))}
    </section>
  )
}

export default ProjectGrid
