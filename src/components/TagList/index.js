import React from 'react'
import './index.css'

const taglist = ['Tag 1', 'Tag 1', 'Tag 1', 'Tag 1', 'Tag 1', 'Tag 1']

const TagList = () => {
  return (
    <ul className="tag-list">
      {taglist.map(tag => (
        <li className="tag-list__item">{tag} </li>
      ))}
    </ul>
  )
}

export default TagList
