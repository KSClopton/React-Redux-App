import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import  Margarita from '../Images/Margarita.jpg'
import  Martini from '../Images/Martini.jpg'
import  Mimosa from '../Images/Mimosa.jpg'
import  Mojito from '../Images/Mojito.jpg'
import  Whiskey from '../Images/Whiskey.jpg'
import {getCocktails} from '../Actions/index'
import {useDispatch} from 'react-redux'



export const DrinkCards = (props) => {
    const dispatch = useDispatch()
    const drinksArr = ['Margarita', 'Martini', 'Mojito', 'Daiquiri', 'Mimosa', 'Whiskey'];

    return (
        <CardDiv>
            <h1>Click on your favorite cocktail to find delicious recipes!</h1>
            <CardContainer>
                <Card onClick={() => dispatch(getCocktails(drinksArr[0]))}>
                    <Link className='link' to='/DrinkRecipe' style={{ textDecoration: 'none'}}>
                    <img src={Margarita}/>
                    <h3>{drinksArr[0]}</h3>
                    </Link>
                </Card>
                <Card onClick={() => dispatch(getCocktails(drinksArr[1]))}>
                    <Link className='link' to='/DrinkRecipe' style={{ textDecoration: 'none'}}>
                        <img src={Martini}/>
                        <h3>{drinksArr[1]}</h3>
                    </Link>
                </Card>
                <Card onClick={() => dispatch(getCocktails(drinksArr[2]))}>
                    <Link className='link' to='/DrinkRecipe' style={{ textDecoration: 'none'}}>
                        <img src={Mojito}/>
                        <h3>{drinksArr[2]}</h3>
                    </Link>
                </Card>
                <Card onClick={() => dispatch(getCocktails(drinksArr[3]))}>
                     <Link className='link' to='/DrinkRecipe' style={{ textDecoration: 'none'}}>
                        <img src={Mimosa}/>
                        <h3>{drinksArr[3]}</h3>
                    </Link>
                </Card>
                <Card onClick={() => dispatch(getCocktails(drinksArr[4]))}>
                    <Link className='link' to='/DrinkRecipe' style={{ textDecoration: 'none'}}>
                        <img src={Mimosa}/>
                        <h3>{drinksArr[4]}</h3>
                    </Link>
                </Card>
                <Card onClick={() => dispatch(getCocktails(drinksArr[5]))}>
                    <Link className='link' to='/DrinkRecipe' style={{ textDecoration: 'none'}}>
                        <img src={Whiskey}/>
                        <h3>{drinksArr[5]}</h3>
                    </Link>
                </Card>
            </CardContainer>
        </CardDiv>
    )
}

const CardDiv = styled.div`
    background-color: rgb(160,82,45);
    padding: 2% 5%;

    h1{
        color: rgb(250, 246, 244);
    }
`
const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
`
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