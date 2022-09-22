import React from 'react'
import styled from 'styled-components';
import MiddleFooter from './MiddleFooter';
import TopFooter from './TopFooter';

const Footer = () => {
  return (
    <Container>
        <TopFooter />
        <MiddleFooter />
    </Container>
  )
}

export default Footer;

const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 0 50px; 
   margin-top: -150px; 
`;
