import React from 'react'
import styled from 'styled-components';
import {RiDoorLockFill} from 'react-icons/ri';

const Navigation = () => {
  return (
    <Container>
        <Wrapper>        
            <LeftContainer>
                <Logo>Glow</Logo>
                <DotIcon></DotIcon>
            </LeftContainer>
            <RightContainer>
                <Menu>
                    <MenuItem>Product</MenuItem>
                    <MenuItem>About</MenuItem>
                    <MenuItem>Blog</MenuItem>
                    <MenuItem>Reviews</MenuItem>
                </Menu>
                <Icon><RiDoorLockFill color='#f15507' size={40} /> </Icon>
                <Counter>1</Counter>
            </RightContainer>
        </Wrapper>
    </Container>
  )
}

export default Navigation;

const Container = styled.div`
    height: 50px;
    margin: 0 50px;
`;
const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;   
   margin-top: 20px;
`;
const LeftContainer = styled.div`
display: flex;
align-items:flex-start;

//justify-content: center;
width: 60%;
`;
const Logo = styled.h1`
    font-size: 35px;
    font-weight: normal;
`;
const DotIcon = styled.div`
    width: 10px;
    height: 10px;
    margin-top: 26px;
    border-radius: 50%;
    background-color:#f15507
`;
const Counter = styled.div`
    width: 15px;
    height: 15px;
    background-color:black;
    border: 1px solid white;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;font-size: 10px;
    border-radius: 50%;

    position: absolute;
    top:0px;
    right: 50px;
`;
const RightContainer = styled.div`
 width: 40%;
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
`;
const Menu = styled.ul`
    display: flex;
    align-items: center;
    justify-content:space-evenly
`
const MenuItem = styled.li`
    margin-right: 35px;
    list-style-type:none ;
    font-size: 16px;
    font-weight:bold;
    color: grey;
`;

const Icon = styled.div`
    
`;
















