import React, { useEffect } from 'react';
import './App.css';
import api from '../../utils/api';
import Card from '../Card/Card';
import styled from "styled-components";

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
padding: 0 22px;
`

const ContainerBox = styled.div`
margin: 0 22px;
`

const Content = styled.div`
position: relative;
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
`

const Input = styled.input.attrs({
  type: 'checkbox',
})`
margin: 0 5px 0 0;
&:hover {
  cursor: pointer;
}
`

const Box = styled.div`
display: flex;
align-items: center;
font-size: 10px;
padding-left: 16px;
margin-bottom: 22px;
`

const BoxButton = styled.div`
padding: 20px 0;
width: 100%;
display: flex;
justify-content: center;
`

const Button = styled.button`
width: 100px;
height: 30px;
border-radius: 5px;
background-color: #828282;
color: white;
border: none;
// margin: 50px 50%;
&:hover {
  cursor: pointer;
}
`

const Title = styled.h1`
margin: 20px 0 10px 16px;
font-weight: 700;
font-size: 32px;
`

const SubTitle = styled.p`
margin: 0 0 20px 16px;
font-weight: 400;
font-size: 14px;
color: #828282;
`


function App() {
  const [data, setData] = React.useState<any[]>([]); //массив всех карточек
  const [actualData, setActualData] = React.useState<any[]>([]); //массив карточек, которые есть в наличии
  const [visibleItem, setVisibleItem] = React.useState(6); //пагинация
  const [renderStatus, setRenderStatus] = React.useState(false); //статус рендеренга типа(все или только те, что в наличии) карточек
  const [loaderStatus, setLoaderStatus] = React.useState(true); //статус лоадера

  const showMorItems = () => {
    setVisibleItem(visibleItem + 4);
  };

  //функция фильтрации, которая запускается в зависимости от значения чекбокса
  const filterItems = (e: any) => {
    if (e.target.checked === true) {
      let newData = data.filter(data => data.quantity_available > 0);
      setActualData(newData);
      setRenderStatus(true);
    } else {
      setRenderStatus(false);
    }
  }

  //делам REST API запрос на получения массива данных при первичном рендеринге
  useEffect(() => {
    api.getData()
      .then((res) => {
        setLoaderStatus(false)
        setData(res.data.products);
      })
  }, [])

  return (
    <Container>
      <ContainerBox>
        <Title>Explore</Title>
        <SubTitle>Buy and sell digital fashion NFT art</SubTitle>
        <Box>
          <Input
            onClick={filterItems}
          />
          <label>product in stock</label>
        </Box>
        <Content>
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
                <BoxButton>
                  <Button
                    onClick={showMorItems}
                  >
                    more...
                  </Button>
                </BoxButton>
              </>
          }
        </Content>
      </ContainerBox>
    </Container>
  );
}

export default App;
function e(e: any): void {
  throw new Error('Function not implemented.');
}

