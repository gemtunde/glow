import React from 'react'
import styled from 'styled-components';
import BodyOil from '../img/BodyOil.png';
import {AiOutlineArrowRight} from 'react-icons/ai';

const Essential = () => {
  return (
    <Container>
        <TopContainer>
            <SubContainer>
              <TopText>Trending on 
                <Span> Essentials</Span></TopText>
              <TopDescription>
                Many brands, especially in skin care, carry products
                 that take centuries and they still are  best.
                 Many brands, especially in skin care, carry products
                 that take centuries and they still are  best.            
              </TopDescription>
              <Button>
                Browse All Products 
                <AiOutlineArrowRight />
              </Button>
           </SubContainer>
            <SubContainer>
              <ImageContainer>
                 <Image
                   src={BodyOil}
                   alt='oil'
                 />
              </ImageContainer>
              <Text>Body Oil</Text>
              <Price>#190.00</Price>
           </SubContainer>
            <SubContainer>
              <ImageContainer>
                 <Image
                   src={BodyOil}
                   alt='oil'
                 />
              </ImageContainer>
              <Text>Body Oil</Text>
              <Price>#190.00</Price>
           </SubContainer>
       </TopContainer>  
       <BottomContainer>
           <SubContainer>
              <ImageContainer>
                 <Image
                   src={BodyOil}
                   alt='oil'
                 />
              </ImageContainer>
              <Text>Body Oil</Text>
              <Price>#190.00</Price>
           </SubContainer>
           <SubContainer>
              <ImageContainer>
                 <Image
                   src={BodyOil}
                   alt='oil'
                 />
              </ImageContainer>
              <Text>Body Oil</Text>
              <Price>#190.00</Price>
           </SubContainer>
           <SubContainer>
              <ImageContainer>
                 <Image
                   src={BodyOil}
                   alt='oil'
                 />
              </ImageContainer>
              <Text>Body Oil</Text>
              <Price>#190.00</Price>
           </SubContainer>
        </BottomContainer>  
    </Container>
  )
}

export default Essential;

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: start;
   margin: 0 50px; 
`;
const TopContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 30px;
`;
const TopText = styled.h1`
 font-size: 48px;
 color: #350c35d3;
 font-weight: normal;
`;
const Span = styled.span`
 color: #f15507;
`;
const TopDescription = styled.p`
font-size: 16px;
color: grey;
margin: 20px 0px;
`;
const Button = styled.button`
padding: 20px;
margin: 10px;
background-color:white;
width: 250px;
border-radius:35px;
border:1px solid #f15507;
color:#f15507;
font-size: 18px;
display: flex;
justify-content: start;
`;

const BottomContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 30px;
`;
const SubContainer = styled.div`
  width: 400px;
  height: 400px;
  padding: 10px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`;
const ImageContainer = styled.div`
  width: 400px;
  height: 370px;
  background-color:white;
`;
const Image = styled.img`
width: 100%;
object-fit:contain;
`;
const Text = styled.h3`
font-size: 22px;
margin: 10px 0px;

`;
const Price = styled.p`
font-size: 16px;
`;