import React from 'react'
import { useNavigate } from "react-router-dom";

export const AddCourseButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log(window.location.href);
    if (window.location.href === "http://localhost:3000/addCourse") {
      navigate('/');
    } else if (window.location.href === "http://localhost:3000/") {
      navigate('/addCourse');
    }

  }
  return (
    <div>
      {window.location.href === "http://localhost:3000/addCourse" ?
        <button onClick={handleClick} >Main Page</button> :
        <button onClick={handleClick} >Add Course</button>}
    </div>
  )
}
