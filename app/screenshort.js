import React from 'react';
import html2canvas from 'html2canvas';

class ScreenCapture extends React.Component {
  captureScreen = () => {
    const element = document.getElementById('capture');
    const rect = element.getBoundingClientRect();

    html2canvas(element, {
      x: rect.left,
      y: rect.top,
      width: 500, // Width of the area to capture
      height: 400, // Height of the area to capture
      windowWidth: document.documentElement.scrollWidth,
      windowHeight: document.documentElement.scrollHeight
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      localStorage.setItem('screenshot', imgData);
      alert('Screenshot captured and saved to local storage.');
    });
  }

  render() {
    return (
      <div>
        <div id="capture" style={{ width: '500px', height: '400px', border: '1px solid black' }}>
          {/* Content to capture */}
          <h1>Screen Capture Example</h1>
          <p>This is the content you want to capture.</p>
        </div>
        <button onClick={this.captureScreen}>Capture</button>
      </div>
    );
  }
}

export default ScreenCapture;
