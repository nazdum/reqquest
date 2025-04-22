import {useState} from 'react';
import './App.css';
import {Request} from "../wailsjs/go/main/App";

function App() {
    const [resultText, setResultText] = useState("");
    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);
    const updateResultText = (result) => setResultText(result);

 
    const request = ()=>{
        Request(name).then(updateResultText)
    }

    return (
        <div className="app">

            <div className="inputs">
            <input placeholder="https://www.test.com/api/" id="url" onChange={updateName} type="text"/>
            <button id="request-button" onClick={request}>Request</button>
            </div>

            <div className="outputs">
            <textarea readOnly id="response-textarea" value={resultText} />
            </div>
            
        </div>
    )
}

export default App
