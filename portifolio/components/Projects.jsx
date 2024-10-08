
// Style constants
const containerStyle = {
    display: 'flex',            // Align items in a row (horizontally)
    justifyContent: 'center',    // Center the content horizontally
    alignItems: 'center',        // Align items vertically in the center
    gap: '30px',                 // Space between each item (title + image)
    width: '100%',               // Ensure it stretches the full width of the parent
  };
  
  const itemStyle = {
    textAlign: 'center',         // Center the title above each image
    width: '450px',              // Make sure each item has a fixed width for the image
  };
  
  const imageStyle = {
    width: '450px',      // Force the width to 450px
    height: '300px',     // Force the height to 300px
    objectFit: 'cover',  // Ensures images fill the area while maintaining aspect ratio
  };
  
  const AboutMe = () => {
    return (
      <div style={containerStyle}>
        {/* First item */}
        <div style={itemStyle}>
          <h3>Remember these runes! <br />(Mobile Game)<br />(Solo developer)</h3>
          <img src="Project1.png" alt="Image 1" style={imageStyle} />
        </div>
        
        {/* Second item */}
        <div style={itemStyle}>
          <h3>Nordestek <br />(Junior company)<br />(Backend developer)</h3>
          <img src="Project2.png" alt="Image 2" style={imageStyle} />
        </div>
        
        {/* Third item */}
        <div style={itemStyle}>
          <h3>Grow! <br />(Desktop game)<br />(Backend developer)</h3>
          <img src="Project3.png" alt="Image 3" style={imageStyle} />
        </div>
      </div>
    );
  };

export default function Projects() {
    return (
      <div>
        <AboutMe />
      </div>
    );
  }