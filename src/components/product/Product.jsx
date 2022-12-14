import React, {useEffect} from 'react'
import styled from 'styled-components';
import Makeup from '../img/cosmetic.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Product = () => {
      useEffect(()=>{
        Aos.init({duration:2000})
    },[]);
  return (
    <Container>
        <LeftContainer data-aos="zoom-in">
           <ImageWrapper data-aos="zoom-in">
            <div></div>
                 <Image 
              src={Makeup}
              alt='makeup'
            />
           </ImageWrapper>
           
        </LeftContainer>
        <RightContainer data-aos='fade-up'>
            <Text>The Self care brand that's setting
                a new <Span>standard Clean </Span> products.
            </Text>
            <SubContainer>
                <Sub1>
                    <SubText>Where are products made? </SubText>
                    <SubDescription>
                        Many brands, especially in skin care, carry products
                        that take centuries and they still are  best.
                    </SubDescription>
                </Sub1>
                <Sub2>
                    <SubText>Where are products made? </SubText>
                    <SubDescription>
                        Many brands, especially in skin care, carry products
                        that take centuries and they still are  best.
                    </SubDescription>
                </Sub2>
            </SubContainer>
        </RightContainer>
    </Container>
  )
}

export default Product;

const Container = styled.div`
  display: flex;
   margin: 0 50px;  
`;
const LeftContainer = styled.div`
 width: 50%;
   display: flex;
    align-items: center;
    justify-content: end;
    z-index:5;
`;
const ImageWrapper= styled.div`
    width: 350px;
    height: 400px;
    background-color: #a754a788;
    display: flex;
    align-items: center;
    justify-content: end;
    border-radius: 150px 150px 0px 0px;
`;
const Image= styled.img`
    width: 100%;
    //height: 300px;
`;
const RightContainer = styled.div`
//background-color: white;
width: 50%;
display: flex;
flex-direction:column;
align-items:center;
justify-content: start;
padding: 40px;
 z-index:5;
`;

const Text = styled.h1`
 font-size: 48px;
 color: #350c35d3;
 font-weight: normal;
`;
const Span = styled.span`
  color: #f15507;
`;
const SubContainer = styled.div`
display: flex;
align-items: center;
justify-content: start;
margin-top: 20px;
padding: 10px;
`;
const Sub1 = styled.div`
display: flex;
flex-direction:column;
//align-items: center;
//justify-content: start;
//margin: 15px;
//padding: 5px;
margin-right: 10px;
`;
const Sub2 = styled.div`
display: flex;
flex-direction:column;
margin-left: 10px;
//align-items: center;
//justify-content: start;
//margin: 15px;
//padding: 5px;
`;
const SubText = styled.h4`
font-size: 18px;
 color: #350c35d3;
`;
const SubDescription = styled.p`
margin-top: 10px;
color: grey;
font-size: 16px;
`;







