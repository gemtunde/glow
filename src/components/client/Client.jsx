import React from 'react'
import styled from 'styled-components';
import Image1 from '../img/batman.png';
import Image2 from '../img/spiderman.png';
import Image3 from '../img/ironman.png';
import Image4 from '../img/superman.png';
import Image5 from '../img/phone.png';

const Client = () => {
  return (
    <Container>
        <ImageWrapper>
             <Image 
                 src={Image1}
                 alt='phone'
             />
        </ImageWrapper>
        <ImageWrapper>
             <Image 
                 src={Image2}
                 alt='super'
             />
        </ImageWrapper>
        <ImageWrapper>
             <Image 
                 src={Image3}
                 alt='iron'
             />
        </ImageWrapper>
        <ImageWrapper>
             <Image 
                 src={Image4}
                 alt='bat'
             />
        </ImageWrapper>
        <ImageWrapper>
             <Image 
                 src={Image5}
                 alt='spider'
             />
        </ImageWrapper>
    </Container>
  )
}

export default Client;

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   margin: 0 50px; 
   margin-top: -150px; 
`;

const ImageWrapper = styled.div`
    width: 120px;
    height: 80px;
`;
const Image = styled.img`
width: 100%;
    
`;