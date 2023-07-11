import React from 'react'
import { useNavigate } from "react-router-dom";

export const AddCourseButton = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (localStorage.getItem('url') === "/addCourse") {
      navigate('/');
    } else if (localStorage.getItem('url') === "/") {
      navigate('/addCourse');
    }

  }
  return (
    <div>
      {localStorage.getItem('url') === "/addCourse" ?
        <button onClick={handleClick} style={{
          borderRadius: 35,
          backgroundColor: "#f3e5f5",
          padding: "18px 36px",
          fontSize: "18px",
          marginLeft: '15px'
        }}>Main Page</button> :
        <button onClick={handleClick} style={{
          borderRadius: 35,
          backgroundColor: "#f3e5f5",
          padding: "18px 36px",
          fontSize: "18px",
          marginLeft: '15px'
        }}>Add Course</button>}
    </div>
  )
}
