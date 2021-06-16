import React from 'react'
import styled from 'styled-components'

// const SpaceColor = styled.div`
//     height: 10vh;
//     background-color: #19181d;
// `

const SpaceTransition = styled.div`
    height: 30vh;
    background-image: linear-gradient(to bottom, #19181d, #19181d, #19181d, #19181d, #19181d, #1f1e26, #25242f, #2a2a39, #353950, #3e4968, #455b80, #486d9a);
`

const Space = () => {
    return (
        <>
            {/* <SpaceColor/> */}
            <SpaceTransition />
        </>
    )
}

export default Space
