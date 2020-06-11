import React from 'react'
import styled from 'styled-components'

const SelectedCocktails = ({cocktail}) => {
    
    return (
        <Card>
            <img src={cocktail.strDrinkThumb}/>
            <h3>{cocktail.strDrink}</h3>
        </Card>
    )
}



const Card = styled.div`
    border: solid white 2px;
    height: 250px;
    width: 200px;
    margin: 2% 6%;
    background: rgb(250, 246, 244);
    border-radius: 5px;

    img {
        height: 150px;
        width: 100%;
        border-radius: 5px;
        
    }
    h3{
        background: rgb(250, 246, 244);
    }


`


export default SelectedCocktails;