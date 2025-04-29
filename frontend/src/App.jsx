import { useState } from 'react';
import './App.css';
import { Request } from "../wailsjs/go/main/App";
import InputArea from './components/input/InputArea';
import OutputArea from './components/output/OutputArea';

function App() {

    const [url, setUrl] = useState('');
    const updateUrl = (e) => setUrl(e.target.value);

    const [outputData, setOutputData] = useState({
        statusCode: 'Status',
        latency: 0,
        resultText: ''
    })

    const request = async () => {
        try {
            const response = await Request(url , "GET");
            setOutputData({
                statusCode: response.statusCode,
                latency: response.latency,
                resultText: response.body
            })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="app">
            <InputArea onRequest={request} onUrlChange={updateUrl} />
            <OutputArea responseData={outputData} />
        </div>
    )
}

export default App
