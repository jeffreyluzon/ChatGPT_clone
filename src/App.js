import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import './App.css';
// import './.env'
// import { Dotenv } from 'dotenv';


function App() {
  const [prompt, setPrompt] = useState('');
  const APIKEY = process.env.REACT_APP_API_KEY
  const configuration = new Configuration({
    apiKey: APIKEY,
  });

  const openai = new OpenAIApi(configuration);

  const generateImage = async () => {
    const res = await openai.createImage({
      prompt: "this is a test",
      n: 1,
      size: '1024x1024'
    });

    console.log(res)
  }

  return (
    <div className='App'>
      <input type="text" className='app-input' />
      <button onClick={generateImage}>generate Image</button>
      {/* <img src={} alt="" /> */}
    </div>
  );
}

export default App;
