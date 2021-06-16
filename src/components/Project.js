import { React, useState } from 'react'
import { Spring } from '@react-spring/web'
import styled from 'styled-components'
import UAVImg from '../images/UAVClub.png'

const StdContainer = styled.div`
    height: 600px;
    width: 80%;
    display: flex;
    //align-items: center;
    justify-content: center;
    margin: 0 auto 0 auto;
    background-color: #fff;
`

const AboutWrap = styled.div`
    height: 100%;
    width: 94%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    align-items: center;
    justify-content: space-around; 
    background-color: #54DEFD;
    box-shadow: -30px 20px 20px rgba(0,0,0,0.3);
`

const Pic = styled.div`
    width: 100%;
    height: 90%;
    background-color: #fff;
    background-image: url(${UAVImg});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-style: solid;
    border-width: 5px;
    border-color: #001011;
`

const TextContainter = styled.div`
    width: 40%;
    height: 80%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    background-color: #54DEFD;
`

const TextH = styled.div`
    color: #001011;
    font-size: 25px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    line-height: 3.5;
    text-align: left;
`

const TextP = styled.div`
    color: #001011;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.25;
    text-align: left;
`


const Projects = ( {toggled} ) => {


    return (
        <StdContainer id="projects">
            <AboutWrap>
                <TextContainter>
                    <Pic />
                </TextContainter>
                <TextContainter>
                    <TextH>
                        UAV Club - Lead Software Developer
                    </TextH>
                    <TextP>
                    As part of Notre Dame's UAV Club, I have and am currently working
                    on the software involved with both the autonomous guidance of the drone
                    through utilization of Python and Robotic Operating Systems, as well as 
                    the image recognition software that utilizes machine learning in TensorFlow.
                    The goal of this years project is to allow the drone to fly autonomously
                    over a series of waypoints, and at each waypoint a) detect an alphanumeric
                    symbol located on the ground and b) classify the symbols meaning and report it 
                    back to us on the team server.
                    </TextP>
                    {/* <GitLink>
                        GitHub repository link here!
                    </GitLink> */}
                </TextContainter>
            </AboutWrap>
        </StdContainer>
    )
}

export default Projects
