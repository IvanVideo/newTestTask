import React, { useEffect } from 'react';
import './App.css';
import api from '../../utils/api';
import Card from '../Card/Card';

function App() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    api.getData()
      .then((res) => {
        setData(res.data.products)
      })
  }, [])

  return (
    <div className='app'>
      <h1>Explore</h1>
      <p>Buy and sell digital fashion NFT art</p>
      <div className='app__cards'>
        {
          data.map((item, index) => (
            <Card
              key={index}
              item={item}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
