import React, { MouseEventHandler } from 'react'

interface args {
  title: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}
export const AddCourseButton = ({ title, handleClick }: args) => {
  return (
    <button onClick={handleClick} style={{
      borderRadius: 35,
      backgroundColor: "#f3e5f5",
      padding: "18px 36px",
      fontSize: "18px",
      marginLeft: '15px'
    }}>{title}</button>
  )
}
