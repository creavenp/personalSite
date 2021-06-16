import React from 'react'
import styled from 'styled-components'
import Img from '../images/beach.jpg'


const MidImage = styled.div`
    height: 100vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url(${Img});
`


const Mid = () => {
    return (
        <MidImage></MidImage>
    )
}

export default Mid
