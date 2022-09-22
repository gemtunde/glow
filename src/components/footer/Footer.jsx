import React from 'react'
import styled from 'styled-components';
import Client from '../client/Client';
import MiddleFooter from './MiddleFooter';
import TopFooter from './TopFooter';

const Footer = () => {
  return (
    <MainContainer>
        <Client />
        <TopFooter />
        <MiddleFooter />
    </MainContainer>
  )
}

export default Footer;

const MainContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 0 50px; 
   margin-top: -150px; 
  // height: 100vh;
`;
