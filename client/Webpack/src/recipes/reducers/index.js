import { combineReducers } from 'redux'
import recipes from './recipes'
import { pages } from './pages'
import ingredients from './ingredients'
import suggestions from './suggestions'
import query from './query'

const reducers = combineReducers({
    recipes,
    pages,
    filters: combineReducers({ingredients, query}),
    suggestions
});

export default reducers

