//Styles
const containerStyle = {
  display: "flex",
  alignItems: "center", // Center items vertically
  padding: "20px",
  backgroundColor: "#496ab9",
  justifyContent: "center",
};
const textContainerStyle = {
  width: '38%',
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
const h1Style = {
  margin: '0 0 10px 0', 
  fontSize: '24px', 
  color:'#d9811f'
};

const imageStyle = {
  flex: "0 0 auto", // Prevent image from stretching
  width: "150px", // Adjust as needed
  height: "auto", // Maintain aspect ratio
  marginRight: "20px", // Space between image and text
  borderRadius: "15px",
};

const pStyle = {
  margin: '0', // Remove margin for paragraph
  color:'#ffffff'
};

//HTML elements

const AboutMe = () => {
  return (
    <div style={containerStyle}>
      <img
        src="MyPic2.jpg" // Replace with your image URL
        alt="Description"
        style={imageStyle}
      />

      <div style={textContainerStyle}>
        <h1 style={h1Style}>
          "About me:"
        </h1>

        <p style={pStyle}>
          Legal name: Gabriel Nogueira Lages<br />
          If your intention is hiring / making temporary contracts with someone with these traits:<br />
          <br />
          -Great intelligence<br />
              -Honest and straightforward<br />
              -Skilled in low and high level languages (Java, Python, Web trinity, Node.Js, C#, MySql, Sqlite, Mongo DB and more)<br />
              -Skilled in Web & Unity back end development (Planning, development and deployment)<br />
              -Skilled in Data Crawling<br />
              -Skilled in Microsoft Office (Word, Excel, Powerpoint,Teams) & Google tools<br />
              -Computer scientist & post graduated in Game Programming (W.I.P)<br />
              <br />
          Then, you found the right person. If you need proof, all you have to do is ask
        </p>
        <a href="Resume.pdf" style={linkStyle} download>
          Download my resume!
        </a>
      </div>
    </div>
  );
};

export default function About() {
  return (
    <div>
      <AboutMe />
    </div>
  );
}
