import React from "react";
import { Link } from "react-router-dom";


const navStyle = {
  display: "flex",
  justifyContent: "center", // Centers the links horizontally
  alignItems: "center",     // Centers them vertically (optional)
  gap: "20px",              // Adds spacing between links (replaces the | symbols)
  padding: "10px",
  width: "100%",            // Ensures the nav takes full width of the screen
  height:"50px",
  backgroundColor: '#FFFFFF',
  
};

const imgStyle = {
  height: '100%', // Image takes the full height of the parent
  objectFit: 'contain', // Keep the aspect ratio of the image
  
};

const linkStyle = {
  color: '#8099D6', // Set the text color to black
  textDecoration: 'none', // Optional: remove underline
};

export default function Layout() {
  return (
    <>
      <nav style={navStyle}>
        <img src="GL_logo.png" alt="" style={imgStyle} />
        <Link to="/" style={linkStyle}>Home</Link> | 
        <Link to="/about" style={linkStyle}>About Me</Link> |
        <Link to="/education" style={linkStyle}>Education</Link> |
        <Link to="/project" style={linkStyle}>Project</Link> |
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </nav>
      <br />
    </>
  );
}
