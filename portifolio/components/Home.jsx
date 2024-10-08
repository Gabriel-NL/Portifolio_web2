import { Link } from 'react-router-dom';


//Styles
const containerStyle = {
  display: 'flex',
  alignItems: 'center', // Center items vertically
  padding: '20px',
  backgroundColor: '#496ab9',
  justifyContent: 'center',
};

const imageStyle = {
  flex: '0 0 auto', // Prevent image from stretching
  width: '150px', // Adjust as needed
  height: 'auto', // Maintain aspect ratio
  marginRight: '20px', // Space between image and text
  borderRadius: '15px',
};

const textContainerStyle = {
  width: '38%',
  
};
const h1Style = {
  margin: '0 0 10px 0', 
  fontSize: '24px', 
  color:'#d9811f'
};

const pStyle = {
  margin: '0', // Remove margin for paragraph
  color:'#ffffff'
};

const linkStyle = {
  color: '#FFFFFF', // Set the text color to black
  textDecoration: 'none', // Optional: remove underline
  backgroundColor: '#000000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width:"200px",
  padding: "10px",
  margin: "5px",
  borderRadius: '15px',
};

//HTML elements

const Presentation = () => {
  return (
    <div style={containerStyle}>
      <img
        src="MyPic2.jpg" // Replace with your image URL
        alt="Description"
        style={imageStyle}
      />
      <div style={textContainerStyle}>
        <h1 style={h1Style}>
          "They called me a prodigy, talented, blessed.<br />But they don't know how hard I've worked."
        </h1>
        <p style={pStyle}>
          Versatile programmer with expertise in Unity, web development, and graphic design.<br />Currently honing game programming skills.
        </p>
        <Link to="/about" style={linkStyle}>Learn more about me!</Link>
      </div>
    </div>
  );
};


export default function Home() {
  return (
    <div>
      <Presentation />
      
    </div>
  );
}