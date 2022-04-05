import React, { useEffect } from 'react';
import './App.css';
import api from '../../utils/api';
import Card from '../Card/Card';

function App() {
  const [data, setData] = React.useState<any[]>([]); //массив всех карточек
  const [actualData, setActualData] = React.useState<any[]>([]); //массив карточек, которые есть в наличии
  const [visibleItem, setVisibleItem] = React.useState(10); //пагинация
  const [renderStatus, setRenderStatus] = React.useState(false); //статус рендеренга типа карточек
  const [loaderStatus, setLoaderStatus] = React.useState(true); //статус лоадера

  const showMorItems = () => {
    setVisibleItem(visibleItem + 10);
  };

  const filterItems = (e: any) => {
    if (e.target.checked === true) {
      let newData = data.filter(data => data.quantity_available > 0);
      setActualData(newData);
      setRenderStatus(true);
    } else {
      setRenderStatus(false);
    }
  }

  useEffect(() => {
    api.getData()
      .then((res) => {
        setLoaderStatus(false)
        setData(res.data.products);
      })
  }, [])

  return (
    <div className='app'>
      <div className='app__container'>
        <h1>Explore</h1>
        <p>Buy and sell digital fashion NFT art</p>
        <div className='app__box'>
          <input
            className='app__input'
            type='checkbox'
            onClick={filterItems}
          />
          <label>product in stock</label>
        </div>
        <div className='app__cards'>
          {
            loaderStatus ?
              <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
              : <>
                {
                  renderStatus ?
                    actualData
                      .slice(0, visibleItem)
                      .map((item, index) => (
                        <Card
                          key={index}
                          item={item}
                        />
                      )) :
                    data
                      .slice(0, visibleItem)
                      .map((item, index) => (
                        <Card
                          key={index}
                          item={item}
                        />
                      ))
                }
                {
                  renderStatus ?
                    actualData
                      .slice(0, visibleItem)
                      .map((item, index) => (
                        <Card
                          key={index}
                          item={item}
                        />
                      )) :
                    data
                      .slice(0, visibleItem)
                      .map((item, index) => (
                        <Card
                          key={index}
                          item={item}
                        />
                      ))
                }
                <button
                  className='app__button'
                  onClick={showMorItems}
                >
                  more...
                </button>
              </>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
function e(e: any): void {
  throw new Error('Function not implemented.');
}

