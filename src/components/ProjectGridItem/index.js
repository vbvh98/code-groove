import React from 'react'

const ProjectGridItem = props => {
  return (
    <div>
      {props.title}
      <p>{props.desc}</p>
    </div>
  )
}

export default ProjectGridItem
