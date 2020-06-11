import React from 'react'
import styled from 'styled-components'
import SelectedCocktails from './SelectedCocktails'


export const DrinkRecipe = props => {
  

    return (

        <MainDiv>
           {props.drinks.drinks.map(item => (<SelectedCocktails cocktail={item}/>))}
        </MainDiv>
    )
}
const MainDiv = styled.div`
    background-color: rgb(160,82,45);
    padding: 2% 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

`