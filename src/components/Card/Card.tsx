import './Card.css';
import styled, { css } from "styled-components";
import img from '../../img/222.png';

const Container = styled.section`
position: relative;
width: 305px;
height: 482px;
margin: 16px;
box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.07);
border-radius: 8px;
@media (max-width: 768px) {
    margin: 10px;
  }
`

const Column1 = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
background-image: url(${img});
background-repeat: no-repeat;
background-size: contain;
padding: 16px;
box-sizing: border-box;
width: 305px;
height: 405px;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
`

const Column2 = styled.div`
display: flex;
justify-content: space-between;
`

const Box = styled.div`
padding: 16px;
box-sizing: border-box;
&:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`

const TextCreator = styled.p`
margin: 0;
font-size: 12px;
color: #F3F3F3;
`

const TextAuthor = styled.p`
margin: 2px 0 0;
font-size: 14px;
font-weight: bold;
color: #FFFFFF;
`

const TextAbout = styled.p`
margin: 2px 0 0;
font-size: 18px;
color: #FFFFFF;
`

const TextLigth = styled.p`
margin: 0;
font-size: 12px;
color: #808080;
`

const TextEtg = styled.p`
margin: 10px 0 0;
color: #0c47e1;
font-weight: bold;
`

interface CardProps {
    item: any
}

function Card({ item }: CardProps) {

    return (
        <Container>
            <Column1>
                <div>
                    <TextCreator>created by</TextCreator>
                    <TextAuthor>{item.created_by.display_name}</TextAuthor>
                </div>
                <TextAbout>{item.name}</TextAbout>
            </Column1>
            <Column2>
                <Box>
                    <TextLigth>available</TextLigth>
                    <p className={item.quantity_available === 0 ? 'card__place_red' : 'card__place'}>{item.quantity_available} of 50</p>
                </Box>
                <Box>
                    <TextLigth>price</TextLigth>
                    <TextEtg>0.07 ETH</TextEtg>
                </Box>
            </Column2>
        </Container>
    );
}

export default Card;