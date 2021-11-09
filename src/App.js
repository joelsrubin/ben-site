
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import axios from 'axios';
import Sport from './components/Sport.jsx';
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
      <Routes>


        <Route path="/" element={<Body data={data} error={error} />} />
        <Route path="/sports/:id" element={<Sport data={data} apiKey={API_KEY} />} />

      </Routes>
    </div>
  );
}

export default App;
