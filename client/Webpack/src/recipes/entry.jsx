import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'

import reducers from './reducers'
import { fetchRecipes } from './actions/recipes'
import select from './selectors/filters'
import Root from './containers/Root'

require("../stylesheets/recipes.less");

const loggerMiddleware = createLogger();

const initialState = {
	filters:
	{
		query: '',
		ingredients: []
	},
	pages: {
		current: 1,
		total: 1,
	},
	recipes: []
};

//Only add logger in debug mode
const store = process.env.NODE_ENV == 'PRODUCTION' ?
	createStore(reducers, initialState, applyMiddleware(ReduxThunk)) :
	createStore(reducers, initialState, applyMiddleware(ReduxThunk, loggerMiddleware));

store.dispatch(fetchRecipes());
store.subscribe(() => { handleChange(store) });
render(
	<Root store={store} />,
	document.getElementById('recipes')
);


let currentValue = select(initialState);

function handleChange(store) {
    let previousValue = currentValue;
    const state = store.getState();
    currentValue = select(state);

    if (previousValue !== currentValue) {
        store.dispatch(fetchRecipes(currentValue));
    }
}