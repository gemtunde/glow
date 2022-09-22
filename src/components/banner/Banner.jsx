import React from 'react'
import styled from 'styled-components';
import {BsFillPlayFill} from 'react-icons/bs';
import {AiOutlineArrowRight} from 'react-icons/ai';
import Profile from '../img/business.png'

const Banner = () => {
  return (
    <Container>
        <LeftContainer>
            <Text>
                Let your Skin Going
                    <Image src={Profile} alt='profile' />
                 Out.
            </Text>
            <RoundTag></RoundTag>
            <Description>
               We want to bring to the world through our products
                that very special feeling joy, health and positive energy.
               We want to bring to the world through our products
                that very special feeling joy, health and positive energy
            </Description>
            <SubContainer>
                <Button>Shop Now <AiOutlineArrowRight/></Button>
                <SubContainerText>                        
                <Icon><BsFillPlayFill size={20} /></Icon>
                <Title>How to use</Title>
                </SubContainerText>
            </SubContainer>
        </LeftContainer>    
        <RightContainer>
            <BannerImage
                src={Profile}
                alt='profile'
            />
        </RightContainer>    
    </Container>
  )
}

export default Banner;

const Container = styled.div`
   height: calc(100vh - 50px);  
   margin: 0 50px;
   display: flex;
`;
const LeftContainer = styled.div`
width: 45%;
display: flex;
flex-direction:column;
align-items: center;
justify-content: start;
margin-top: 100px;

position: relative;
`;
const Text = styled.h2`
font-size: 85px;
font-weight: normal;
`;
const RoundTag = styled.div`
    width: 136px;
    height: 50px;
    border:2px solid white;
    background-color:transparent;
    border-radius: 30px;
    position: absolute;
    top: 136px;
    right: 204px;
`;
const Image = styled.img`
  width: 150px;
  height: 70px;  
  border-radius:40px;
  background-color:#7126668b;
  margin: 0 10px;
  object-fit:contain;
  padding: 2px;
`;
const Description= styled.p`
font-size: 18px;
color: grey;
`;
const SubContainer= styled.div`
width: 100%;
margin-top: 30px;
display: flex;
align-content: center;
justify-content: start;
`;
const Button= styled.button`
padding: 15px;
color: white;
background-color: #f15507;
border: none;
border-radius:30px;
width: 150px;
font-size: 17px;
margin-right: 15px;
display: flex;
align-items: center;
justify-content: center;
`;
const SubContainerText = styled.div`
    display: flex;
align-items: center;
justify-content: center;
`
const Icon= styled.div``;
const Title= styled.h3`
margin-left: 10px;
`;
const RightContainer = styled.div`
width: 55%;
`;

const BannerImage = styled.img`
    width: 90%;
`