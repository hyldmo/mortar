import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers'

import RecipeApp from './containers/RecipeApp'

const loggerMiddleware = createLogger();

const store = createStore(reducers, applyMiddleware(ReduxThunk, loggerMiddleware));

render(
    <Provider store={store}>
        <RecipeApp onSubmit={onSubmit} />
    </Provider>,
    document.getElementById('recipe')
);

function onSubmit() {
    console.log('Submitting');
    let recipe = JSON.stringify({
        ...store.getState().recipe,
        ingredients: store.getState().ingredients
    });

    console.log(recipe);
    $.ajax('', {
        type: "POST",
        contentType: "application/json",
        data: recipe,
        dataType: "json"
    }).success(resp => {
        console.log('Response:');
        console.log(resp)
    })
}