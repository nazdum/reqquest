import React from 'react';
import './outputArea.css'

function OutputArea({ responseData }) {


  const { statusCode, latency, resultText } = responseData

  const statusCodeStyle = {
    color: statusCode === 200 ? 'green' : (statusCode === 404 ? 'red' : 'black')
  };

  const latencyStyle = {
    color: latency <= 100 ? 'green' : (latency >= 300 ? 'red' : 'black')


  };

  return (
    <div className="outputs">
      <div className="status-container">
        <h3 style={statusCodeStyle}> {statusCode}</h3>
        <h3 style={latencyStyle}>{latency} ms</h3>
      </div>                
      <div className="textareas-container">
        <div id="container-history-textarea">
          <label className="textarea-label">History:</label>
          <textarea readOnly id="history-textarea"  />
        </div>

        <div id="container-response-textarea">
          <textarea readOnly id="response-textarea" value={resultText} />
        </div>

      </div>
    </div>
  );
}

export default OutputArea
