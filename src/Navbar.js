import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'

const NavbarContainer = styled.div`
    width: 100%;
    height: 80px;
    background: #001011;
    position: fixed;
    top: 0;
    z-index: 30;
`

const NavWrap = styled.div`
    width: 100%;
    height: 50%;
    margin: 0 auto;
    z-index: 20;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-between;
`

const Nav = styled.div`
    flex: 1;
    position: relative;
    text-align: center;
    &:hover{
        cursor: pointer;
        font-size: 25px;
        transition: 0.2s ease-in-out;
    }
`

const NavLink = styled(Link)`
    color: #fff;
    padding: 0 25px;
    font-size: 20px;
    line-height: 80px;
    font-weight: 500;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;

    /* &:hover{
        cursor: pointer;
        font-size: 25px;
        transition: 0.2s ease-in-out;
    } */
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavWrap>
                <Nav>
                    <NavLink activeClass='active' to='slide-container' spy={true} smooth={true} duration={600}>Home</NavLink>
                    <NavLink activeClass="active" to='about' spy={true} smooth={true} duration={600} offset={-80}>About</NavLink>
                    <NavLink activeClass="active" to='projects' spy={true} smooth={true} duration={600} offset={-180}>Projects</NavLink>
                    <NavLink to='/'>Resume</NavLink>
                </Nav>
            </NavWrap>
        </NavbarContainer>
    )
}

export default Navbar
