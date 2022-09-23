import React,{useEffect} from 'react'
import styled from 'styled-components';
import Woman from '../img/business.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
   useEffect(()=>{
        Aos.init({duration:2000})
    },[]);
  return (
    <Container>
        <LeftContainer data-aos='fade-up'>
            <Text>We make going all natural <Span>Beauty</Span></Text>
            <Description data-aos='fade-up'>
                Made with natural best ingredients.  Made with natural best ingredients.
                 Made with natural best ingredients. Made with natural best ingredients.
            </Description>
            <SubContainer data-aos='fade-up'>
                <Sub>
                    <SubTitleWrapper>
                    <SubTitle>Product <br />Users</SubTitle>
                    </SubTitleWrapper>
                    <SubDescription>7M+</SubDescription>
                </Sub>
                <Sub>
                    <SubTitle>Product <br />Users</SubTitle>
                    <SubTitleWrapper1>
                    <SubDescription>7M+</SubDescription>
                    </SubTitleWrapper1>
                </Sub>
                <Sub>
                    <SubTitleWrapper>
                    <SubTitle>Product <br />Users</SubTitle>
                    </SubTitleWrapper>
                    <SubDescription>7M+</SubDescription>
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

export default About;

const Container = styled.div`
   display: flex;
   margin: 0px 50px; 
 
`;
const LeftContainer = styled.div`
width: 50%;
padding: 30px;
margin: 30px;
display: flex;
flex-direction: column;
align-items: center;
  z-index:5;

`;
const Text = styled.h1`
font-size: 60px;
font-weight: normal;
color: #350c35d3;
`;
const Span = styled.span`
 color: #f15507;
`;
const Description = styled.p`
color: grey;
font-size: 16px;
margin-top: 10px;
`;
const SubContainer = styled.div`
 display: flex;
 align-content: center;
 justify-content:space-around;
 margin: 10px;
 padding: 10px;
`;
const Sub = styled.div`
margin: 30px;
 padding: 10px;
 width: 100px;
 height: 150px;
 border-radius: 50px;
 border: 1px solid white;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 //margin-right: 25px;
   transform: rotate(35deg);
`;
const SubTitleWrapper = styled.div`
background-color:white;
padding: 10px;
width: 100px;
height: 80px;
border-radius: 40px 40px 0 0;
margin-top: -8px;
`;
const SubTitleWrapper1 = styled.div`
background-color:white;
padding: 10px;
width: 100px;
height: 80px;
border-radius: 0 0 40px 40px;
margin-bottom: -8px;
`;
const SubTitle = styled.h1`
font-size: 16px;
color: #350c35d3;
`;
const SubDescription = styled.p`
     color: #f15507;
     font-size: 35px;
`;

const RightContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: start;
  z-index:5;
`;
const ImageWrapper = styled.div`
    width: 400px;
    height: 500px;
    background-color:#f7964c;
    border-radius: 200px;
`
const Image = styled.img`
    width: 90%;
    object-fit: contain;
`