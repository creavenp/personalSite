import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    height: 10vh;
    background: #486d9a;
    position: relative;
    margin: 0 auto 0 auto;
    z-index: -1;
`


const HeaderStyle = styled.div`
    position: absolute;
    bottom: 10%;
    color: #4062BB;
    font-size: 30px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
`


const Header = (props) => {
    
    return (
        <HeaderContainer>
            <HeaderStyle>{props.title}</HeaderStyle>
        </HeaderContainer>
    )
}

export default Header
