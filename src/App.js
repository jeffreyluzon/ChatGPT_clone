import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import './App.css';
// import './.env'
// import { Dotenv } from 'dotenv';


function App() {
  // const configuration = new Configuration({
  //   apiKey: import.meta.env.API_KEY,
  // });

  // const openai = new OpenAIApi(configuration);

  // const generateImage = async () => {
  //   const res = await openai.createImage({
  //     prompt: "Say this is a test",
  //     n: 1,
  //     size: '1024x1024'
  //   });

  //   console.log(res)
  // }
    const APIKEY = process.env.REACT_APP_API_KEY
    const showApiKey = () => {
      console.log(APIKEY)
    }

  return (
    <div className='App'>
      <button onClick={showApiKey}>showApiKey</button>
      <button onClick={generateImage}>generate IMage</button>
    </div>
  );
}

export default App;
