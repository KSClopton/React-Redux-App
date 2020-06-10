import React from 'react'
import styled from 'styled-components'

export const NavBar = () => {

    return (
        <HeaderDiv>
            <LogoDiv>
                <img src={'nothing'}/>
                <h2>Cocktail Finder</h2>
            </LogoDiv>
            <div>
                <NavItems>
                    <a href='home'>Home</a>
                    <a href='contact us'>Contact Us</a>
                    <a href='news'>News</a>
                    <a href='about us'>About us</a>
                </NavItems>
            </div>
        </HeaderDiv>
    )
}
const HeaderDiv = styled.div`
    background-color: rgb(45, 45, 54);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4%;


`
const LogoDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    h2{
        color: rgb(160,82,45)
    }

    img{
            height: 50px;
            width: 50px;
            border-radius: 5px;
        }
`

const NavItems = styled.div`
    display: flex;



    a   {
        text-decoration: none;
        list-style: none;
        color: rgb(160,82,45);
        padding-left: 20px;
        padding-right: 20px; 
     
    }
`