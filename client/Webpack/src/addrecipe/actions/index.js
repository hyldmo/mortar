let nextTodoId = 0;

export const addIngredient = (ingredient) => {
    return {
        type: 'ADD_INGREDIENT',
        id: nextTodoId++,
        ...ingredient
    }
};

export const editIngredientName = (id, substance) => {
    return {
        type: 'EDIT_INGREDIENT',
        id,
        substance
    }
};

export const editIngredientAmount = (id, amount) => {
    return {
        type: 'EDIT_INGREDIENT_AMOUNT',
        id,
        amount
    }
};

export const editIngredientUnit = (id, unit) => {
    return {
        type: 'EDIT_INGREDIENT_UNIT',
        id,
        unit
    }
};

export const removeIngredient = (id) => {
    return {
        type: 'REMOVE_INGREDIENT',
        id: id
    }
};

export const selectSuggestion = (id, suggestion) => {
    return {
        type: 'SELECT_SUGGESTION',
        id,
        suggestion
    }
};

export const REQUEST_SUGGESTIONS = 'REQUEST_SUGGESTIONS';
function requestSuggestions(id, query) {
    return {
        type: REQUEST_SUGGESTIONS,
        id,
        query
    }
}

export const RECEIVE_SUGGESTIONS = 'RECEIVE_SUGGESTIONS';
function receiveSuggestions(id, suggestions) {
    return {
        type: RECEIVE_SUGGESTIONS,
        id,
        suggestions
    }
}

export function fetchSuggestions(id, substance) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.

    return function (dispatch) {

        // First dispatch: the app state is updated to inform
        // that the API call is starting.

        dispatch(requestSuggestions(id, substance));

        // The function called by the thunk middleware can return a value,
        // that is passed on as the return value of the dispatch method.

        // In this case, we return a promise to wait for.
        // This is not required by thunk middleware, but it is convenient for us.
        let results = [];
        return $.getJSON(`http://${ENV.API_URL}/ingredients/search?term=${substance}&limit=${10}`)
            .success(data => {
                // We can dispatch many times!
                // Here, we update the app state with the results of the API call.

                if (data['totalResults'] > 0) {

                    data['results'].forEach(function (result, index) {
                        results[index] = result['substance'];
                    });
                }
            })
            .success(() => dispatch(receiveSuggestions(id, results)));
    }
}
