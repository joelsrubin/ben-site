
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import axios from 'axios';
import { key } from './EnvVars.js';

const { API_KEY } = key;

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://api.the-odds-api.com/v4/sports', {
      params: {
        apiKey: API_KEY
      }
    })
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.response.data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Body data={data} error={error} />
    </div>
  );
}

export default App;
