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
