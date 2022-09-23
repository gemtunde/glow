import React,{useEffect} from 'react';
import styled from 'styled-components';
import Woman from '../img/business.png';
import {ImQuotesLeft} from 'react-icons/im'

import Aos from 'aos';
import 'aos/dist/aos.css';

const Testimony = () => {
   useEffect(()=>{
        Aos.init({duration:2000})
    },[]);
  return (
    <Container>
        <LeftContainer data-aos='fade-left'>
            <Span> <ImQuotesLeft /></Span>
            <Text> The uk jewellery award is an event we look forward to
                and we are so honoured to be recognized</Text>
            <Title>Jane Copper</Title>
            <SubContainer>
                <SubTitle>Naperville, USA</SubTitle>
                <Sub>
                    <SubContent></SubContent>
                    <SubContent1></SubContent1>
                    <SubContent></SubContent>
                </Sub>
            </SubContainer>
        </LeftContainer>
        <RightContainer>
            <ImageWrapper data-aos='zoom-in'>
                    <Image 
              src={Woman}
              alt='woman'
            />
            </ImageWrapper>            
        </RightContainer>
    </Container>
  )
}

export default Testimony;

const Container = styled.div`
   display: flex;
   margin: -170px 0px 50px 50px; 
 
`;
const LeftContainer = styled.div`
width: 60%;
padding: 30px;
margin: 30px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: flex-start;
  z-index:5;

`;
const Text = styled.h1`
font-size: 30px;
font-weight: normal;
color: #350c35d3;
`;
const Title = styled.h1`
font-size: 20px;
font-weight: bold;
color: #350c35d3;
`;
const Span = styled.span`
 color: #f15507;
 font-size: 65px;
`;
const SubContainer = styled.div`
 display: flex;
 width: 100%;
 align-content: center;
 justify-content:space-between
`;

const SubTitle = styled.h1`
font-size: 14px;
color: grey;
`;
const Sub = styled.div`
display: flex;


`;
const SubContent = styled.div`
width: 20px;
height: 20px;
margin-right: 5px;
border: 1px solid #350c35d3;
background-color: white
`;
const SubContent1 = styled.div`
width: 20px;
height: 20px;
margin-right: 5px;
border: 1px solid #350c35d3;
background-color: #f15507;
`;

const RightContainer = styled.div`
width: 40%;
display: flex;
align-items: center;
justify-content: start;
  z-index:5;
`;
const ImageWrapper = styled.div`
    width: 300px;
    height: 300px;
    background-color:#f7964c;
    border-radius: 50%;
`
const Image = styled.img`
    width: 70%;
    object-fit: contain;
`