import {useState} from 'react';
import './App.css';
import {Request} from "../wailsjs/go/main/App";

function App() {

    const [resultText, setResultText] = useState('');
    const [statusCode, setStatusCode] = useState('Status');
    const [url, setUrl] = useState('');
    const [latency, setLatency] = useState(0);
    const updateUrl = (e) => setUrl(e.target.value);

    const request = async () =>{
        try{
            const response = await Request(url);
            setResultText(response.Body);
            setStatusCode(response.StatusCode);
            setLatency(response.Latency);
        }catch(error){
            console.log(error);
        }
    }

    const statusCodeStyle = {
        color: statusCode === 200 ? 'green' : (statusCode === 404 ? 'red' : 'black')
    };

    const latencyStyle = {
        color: latency  <= 100 ? 'green' : (latency >= 300 ? 'red' : 'black')
    };

    return (
        <div className="app">

            <div className="inputs">
            <input placeholder="https://www.test.com/api/" id="url" onChange={updateUrl} type="text"/>
            <button id="request-button" onClick={request}>Request</button>
            </div>

            <div className="outputs">

              <div className="status-container">
                <h3 style={statusCodeStyle}> {statusCode}</h3>
                <h3 style={latencyStyle}>{latency} ms</h3>
              </div>
            <textarea readOnly id="response-textarea" value={resultText} />
            </div>

        </div>
    )
}

export default App
