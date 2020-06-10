import { GET_COCKTAILS_ERR } from '../Actions/index'
import { GET_COCKTAILS_SUCCESS } from '../Actions'
import { GET_COCKTAILS_START } from '../Actions'

const initialState = {
    drinks: [ {strDrink: '', strDrinkThumb: ''}],
    error: '',
    isFetching: false
    
}

export const updateCards = (state = initialState, action) => {
    switch(action.type){
        case GET_COCKTAILS_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }


        case GET_COCKTAILS_SUCCESS:
            return {
                drinks: [action.payload],
                isFetching: false,
                error: ''
            }
        
        case GET_COCKTAILS_ERR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default: return state
    }
}