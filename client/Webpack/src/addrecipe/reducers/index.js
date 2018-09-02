import { combineReducers } from 'redux'
import ingredients from './ingredients'
import recipe from './recipe'

const reducers = combineReducers({ recipe, ingredients });

export default reducers