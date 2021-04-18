import React from 'react'
import '../css/Stories.css';
import { FiChevronLeft,FiChevronRight } from "react-icons/fi";

const Stories = ({stories}) => {
  return (
    <div className="stories_container">
      <FiChevronLeft className="chevron_left chevron"/>
      <ul>
        {stories.map(story => {
          return (
            <li>
              <img src={story.profile_picture} alt=""/>
            </li>
          )
        })}
      </ul>
      <FiChevronRight className="chevron_right chevron"/>
    </div>
  )
}

export default Stories
