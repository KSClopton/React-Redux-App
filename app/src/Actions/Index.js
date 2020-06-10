import axios from 'axios'

export const GET_COCKTAILS_START = 'GET_COCKTAILS_START';
export const GET_COCKTAILS_SUCCESS = 'GET_COCKTAILS_SUCCESS';
export const GET_COCKTAILS_ERR = 'GET_COCKTAILS_ERR';

export const getCocktails = (cocktail) => dispatch => {
    dispatch({ type: GET_COCKTAILS_START });
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`)
    .then(res => {
        dispatch({type: GET_COCKTAILS_SUCCESS, payload: res.data.results})
    })
    .catch(err => {
        dispatch({type: GET_COCKTAILS_ERR, payload: err})
    })
};