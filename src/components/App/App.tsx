import React, { useEffect } from 'react';
import './App.css';
import api from '../../utils/api';
import Card from '../Card/Card';

function App() {
  const [data, setData] = React.useState([]);
  const [actualData, setActualData] = React.useState([]);
  const [visibleItem, setVisibleItem] = React.useState(10); //пагинация

  const showMorItems = () => {
    setVisibleItem(visibleItem + 10);
  };

  const filterItems = (e: any) => {
    console.log(e.target.checked, '8888')
  }

  useEffect(() => {
    api.getData()
      .then((res) => {
        setData(res.data.products);
      })
  }, [])

  return (
    <div className='app'>
      <h1>Explore</h1>
      <p>Buy and sell digital fashion NFT art</p>
      <input
        type='checkbox'
        onClick={filterItems}
      />
      <div className='app__cards'>
        {
          data
            .slice(0, visibleItem)
            .map((item, index) => (
              <Card
                key={index}
                item={item}
              />
            ))
        }
      </div>
      <button
        className='app__button'
        onClick={showMorItems}
      >
        more...
      </button>
    </div>
  );
}

export default App;
function e(e: any): void {
  throw new Error('Function not implemented.');
}

