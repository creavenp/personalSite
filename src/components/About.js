import React from 'react'
import styled from 'styled-components'
import me from '../images/IMG-4278.JPG'
import { AiFillMail, AiFillPhone, AiFillEnvironment, AiFillLinkedin } from 'react-icons/ai'


const AboutContainer = styled.div`
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(to bottom, #486d9a, #487bad, #458ac0, #3e99d3, #32a9e6, #29b0ee, #1cb8f7, #00bfff, #00bfff, #00bfff, #00bfff, #00bfff);
    display: flex;
    position: relative;
    justify-content: space-around;
    align-items: center;
`

const AboutMainWrap = styled.div`
    height: 100vh;
    width: 90%;
    background-color: transparent;
    display: flex;
    justify-content: space-between;
    position: relative;
`

const AboutWrapper1 = styled.div`
    height: 80%;
    width: 50%;
    background-color: transparent;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
`

const AboutWrapper2 = styled.div`
    height: 80%;
    width: 50%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
`

const TitleDiv = styled.div`
    height: 10%;
    width: 100%;
    position: absolute;
    top: 2%;
    left: 12%;
    background-color: transparent;
    color: #fff;
    font-size: 500%;
    font-weight: 500;
    font-family: 'Rubik', sans-serif;
`


const BioTitle = styled.div`
    height: 8%;
    width: 100%;
    top: 8%;
    background-color: transparent;
    color: #19181d;
    font-weight: 600;
    font-size: 250%;
    border-bottom: solid;
    border-color: #19181d;
    font-family: 'Roboto', sans-serif;
    position: relative;

`


const BioDiv = styled.div`
    height: 15%;
    width: 100%;
    position: relative;
    background-color: transparent;
    color: #19181d;
    font-size: 120%;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    line-height: 1.4;
`

const PicOverlap = styled.div`
    width: 70%;
    height: 70%;
    position: absolute;
    left: 9%;
    top: 20%;
    background-color: #d00000;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-style: solid;
    border-width: 4px;
    border-color: #19181d;
`


const PicDiv = styled.div`
    width: 70%;
    height: 70%;
    position: absolute;
    top: 17%;
    left: 12%;
    background-image: url(${me});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-style: solid;
    border-width: 4px;
    border-color: #19181d;
`

const ContactDivTitle = styled.div`
    height: 8%;
    width: 100%;
    bottom: 3%;
    position: relative;
    background-color: transparent;
    font-size: 250%;
    font-weight: 600;
    color: #19181d;
    border-bottom: solid;
    border-color: #19181d;
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
`

const ContWrap = styled.div`
    height: 33%;
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    top: -12%;
`

const IconWrap = styled.div`
    height: 30%;
    width: 100%;
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    position: relative;
`

const IconDiv= styled.div`
    position: relative;
    left: 10%;
    background-color: transparent;
    color: #19181d;
    font-size: 120%;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    line-height: 1.4;
`

const SymbolDiv= styled.div`
    height: 60%;
    width: 7%;
    top: 25%;
    left: 0%; 
    background-color: #fff;
    position: absolute;
    color: #EAB464;
    border-color: #19181d;
    border-style: solid;
    border-width: 2px;
`

const EmailIcon = styled(AiFillMail)`
    height: 80%;
    width: 100%;
    position: absolute;
    top: -15%;
`

const PhoneIcon = styled(AiFillPhone)`
    height: 80%;
    width: 100%;
    position: absolute;
    top: -15%;
`

const LocationIcon = styled(AiFillEnvironment)`
    height: 80%;
    width: 100%;
    position: absolute;
    top: -15%;
`

const LinkedInIcon = styled(AiFillLinkedin)`
    height: 80%;
    width: 100%;
    position: absolute;
    top: -15%;
`

const About = () => {
    return (
        <AboutContainer id="about">
            <AboutMainWrap>
                <AboutWrapper1>
                    <TitleDiv>About Me</TitleDiv>
                    <PicOverlap></PicOverlap>
                    <PicDiv></PicDiv>
                </AboutWrapper1>
                <AboutWrapper2>
                    <BioTitle>Interests</BioTitle>
                    <BioDiv>I am rising senior Computer Science major at the University of Notre Dame.
                        Made obvious by the home page, I have a love for space! I also have a passion
                        for autonomous vehicles and vehicle software, and an interest in quantitative finance. In my 
                        free time I love to surf, play guitar, and drop 20 pieces on 7th graders at my local park. </BioDiv>
                    <ContactDivTitle>Contact Information</ContactDivTitle>
                    <ContWrap>
                        <IconWrap>
                            <SymbolDiv><EmailIcon/></SymbolDiv>
                            <IconDiv>School: pcreaven@nd.edu | Personal: patrickcreaven18@gmail.com</IconDiv>
                        </IconWrap>
                        <IconWrap>
                        <SymbolDiv><PhoneIcon/></SymbolDiv>
                            <IconDiv>(516) 640-0103</IconDiv>
                        </IconWrap>
                        <IconWrap>
                            <SymbolDiv><LocationIcon/></SymbolDiv>
                            <IconDiv>Long Island, NY</IconDiv>
                        </IconWrap>
                        <IconWrap>
                            <a href="https://www.linkedin.com/in/patrick-r-creaven-3a5793189">
                                <SymbolDiv><LinkedInIcon/></SymbolDiv>
                            </a>
                            <IconDiv>LinkedIn</IconDiv>
                        </IconWrap>
                    </ContWrap>
                </AboutWrapper2>
            </AboutMainWrap>
        </AboutContainer>
    )
}

export default About
