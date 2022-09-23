import React from 'react'
import styled from 'styled-components';

const BottomFooter = () => {
  
  return (
    <Container>
       <Text>Copyright @ 2022 gemtunde | All Rights Reserved</Text>
    </Container>
  )
}

export default BottomFooter;

const Container = styled.div`
   display: flex;   
   z-index: 5;
   border-top: 1px solid grey;
   padding: 10px;
   width: 50%;
   align-items: center;
   justify-content: center;
`;
const Text = styled.p`
    color: grey;
    font-size: 14px;
`;
