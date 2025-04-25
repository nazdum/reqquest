import React from 'react';
import './inputArea.css'

function InputArea({ onUrlChange, onRequest }) {
  return (
    <div className="inputs">
      <input
        placeholder="https://www.test.com/api/"
        id="url"
        onChange={onUrlChange}
        type="text"
      />
      <button id="request-button" onClick={onRequest}>
        Request
      </button>
    </div>
  );
}

export default InputArea;