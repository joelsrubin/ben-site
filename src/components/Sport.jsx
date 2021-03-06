import { useParams } from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import Grid from './Grid.jsx';
import axios from 'axios';

function Sport({ data, apiKey }) {

  const { id } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const findKey = data.filter((item) => {
        return item.title === id;
      });
      const response = await axios.get(`https://api.the-odds-api.com/v4/sports/${findKey[0].key}/odds/?apiKey=${apiKey}&regions=us`);

      setInfo(response.data);
    }
    fetchData();
  }, []);




  return (
    <div className="sport">
      <h1 className="text-6xl font-medium text-white">{id} </h1>
      <Grid data={info} type='teams' />
    </div>
  );
}

export default memo(Sport);