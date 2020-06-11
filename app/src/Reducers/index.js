import { combineReducers } from 'redux';
import { updateCards } from './UpdateCards'

const allReducers = combineReducers({
    updateCards: updateCards

})
export default allReducers;