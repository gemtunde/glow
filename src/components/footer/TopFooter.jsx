import React from 'react'
import styled from 'styled-components';
import Image1 from '../img/batman.png';
import Image2 from '../img/spiderman.png';
import Image3 from '../img/ironman.png';
import Image4 from '../img/superman.png';

const TopFooter = () => {
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
    </Container>
  )
}

export default TopFooter;

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

const ImageWrapper = styled.div`
    width: 250px;
    height: 250px;
    margin-right: 10px;
    background-color: crimson ;
`;
const Image = styled.img`
width: 100%;
    
`;