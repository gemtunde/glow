import React from 'react'
import styled from 'styled-components';
import Cream01 from '../img/cream01.jpg';
import Cream02 from '../img/cream02.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';


const TopFooter = () => {
      React.useEffect(()=>{
        Aos.init({})
    },[]);
  return (
    <Container>
        <ImageWrapper >
             <Image 
                 src={Cream01}
                 alt='phone'
                  data-aos='fade-left'
            data-aos-easing="ease-out-cubic"
            data-aos-duration="5000"
             />
        </ImageWrapper>
        <ImageWrapper 
         data-aos='fade-left'
            data-aos-easing="ease-out-cubic"
            data-aos-duration="4000"
        >
             <Image 
                 src={Cream02}
                 alt='super'
             />
        </ImageWrapper>
        <ImageWrapper 
         data-aos='fade-left'
            data-aos-easing="ease-out-cubic"
            data-aos-duration="6000"
        >
             <Image 
                 src={Cream01}
                 alt='iron'
             />
        </ImageWrapper>
        <ImageWrapper 
         data-aos='fade-left'
            data-aos-easing="ease-out-cubic"
            data-aos-duration="7000"
        >
             <Image 
                 src={Cream02}
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
   margin-top: 130px;   
   z-index: 5;
`;

const ImageWrapper = styled.div`
    width: 300px;
    height: 300px;
    margin-right: 10px;
`;
const Image = styled.img`
width: 100%;
height: 60%;
object-fit: contain;
`;