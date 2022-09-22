import React from 'react'
import styled from 'styled-components';
import {BsArrowUpRightCircleFill} from 'react-icons/bs';
import {FaTwitterSquare, FaFacebookSquare,  FaInstagramSquare, FaLinkedin} from 'react-icons/fa';

const MiddleFooter = () => {
  return (
    <Container>
        <LeftContainer>
             <LogoContainer>
                      <Logo>Glow</Logo>
                       <DotIcon></DotIcon>
                </LogoContainer>
                <Description>
                    Keep up with our New releases, Beauty tips and what Emma has been
                    upto.
                </Description>
                <Wrapper>              
                    <PhoneWrapper>
                        <FaLinkedin
                          color='white'
                          size={25}
                        />
                    </PhoneWrapper>
                    <PhoneWrapper>
                        <FaFacebookSquare
                             color='white'
                          size={25}
                        />
                    </PhoneWrapper>
                    <PhoneWrapper>
                        <FaTwitterSquare 
                             color='white'
                          size={25}
                        />
                    </PhoneWrapper>
                    <PhoneWrapper>
                        <FaInstagramSquare 
                         color='white'
                          size={25}
                        />
                    </PhoneWrapper>
                </Wrapper>
        </LeftContainer>
        <RightContainer>
           <SubContainer>
             <Title>Company</Title>
             <Description>About</Description>
             <Description>Jobs</Description>
             <Description>Branding</Description>
             <Description>Newsroom</Description>
           </SubContainer>
           <SubContainer>
             <Title>Resource</Title>
             <Description>College</Description>
             <Description>Support</Description>
             <Description>Safety</Description>
             <Description>Streamkit</Description>
           </SubContainer>
           <SubContainer>
             <Title>Terms & Condition</Title>
             <Description>Policy</Description>
             <Description>FAQ</Description>
             <Description>Tracking</Description>
             <Description>Return & delivery</Description>
           </SubContainer>
           <SubContent>
             <Title>Subscribe</Title>
             <Description>Get 10% off your first order</Description>
             <InputWrapper>
                    <Input
                    type='text'
                    placeholder='Enter your email'
                    />
                     <BsArrowUpRightCircleFill color='red' size={25} />
             </InputWrapper>
           </SubContent>
        </RightContainer>
    </Container>
  )
}

export default MiddleFooter;

const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   //background-color: darkblue;
   width: 100%;
   padding: 20px;   
   z-index: 5;
   margin-top: -100px;
`;
const LeftContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction:column;
    padding: 35px;
`;
const LogoContainer = styled.div`
    display: flex;
`;
const Logo = styled.h1`
    font-size: 30px;
    font-weight: normal;
    color: white;
`;
const DotIcon = styled.div`
    width: 10px;
    height: 10px;
    margin-top: 20px;
    border-radius: 50%;
    background-color:#f15507
`;
const Description = styled.p`
    font-size: 14px;
    font-weight: normal;
    color: white;
    margin: 5px 0 ;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`
const PhoneWrapper = styled.div`
    width: 20px;
    height: 20px;
    margin-right: 10px;
`;
const RightContainer = styled.div`
    width: 70%;
    padding: 25px;
    display: flex;
    align-items: center;
    //justify-content: center;
`;
const SubContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
width: 200px;
margin-right: 20px;
padding: 20px;
`;
const SubContent = styled.div`
display: flex;
flex-direction: column;
align-items: start;
width: 200px;
margin-right: 20px;
margin-top: -40px;
`;
const Title = styled.h5`
 color: white;
 font-size: 18px;
`;
const InputWrapper = styled.div`
    background-color: darkgray;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:20px;
    padding: 10px;
`;
const Input = styled.input`
width: 200px;
  border-radius:20px;
  background-color: darkgray;
   
  border: none;
  outline: none;
`;

