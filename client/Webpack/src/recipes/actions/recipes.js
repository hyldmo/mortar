export const REQUEST_RECIPES = 'REQUEST_RECIPES';
function requestRecipes() {
    return {
        type: REQUEST_RECIPES
    }
}

export const RECEIVE_RECIPES = 'RECEIVE_RECIPES';
function receiveRecipes(data) {
    console.log(data);
    return {
        type: RECEIVE_RECIPES,
        recipes: data.results,
        totalPages: Math.ceil(data.totalResults / data.resultsPerPage)
    }
}

export function fetchRecipes(filters = { query: '', ingredients: [], page: 1 }) {
    return function (dispatch) {
        let ingredientString = '';

        for (let filter of filters.ingredients) {
            if (filter.filterType==='exclude')
                ingredientString += '-';

            ingredientString += `${filter.name.toLowerCase()},`;
        }

        dispatch(requestRecipes());

        let request = new XMLHttpRequest();
        request.open('GET', `http://${ENV.API_URL}/recipes/puppies?q=${filters.query}&i=${ingredientString}&p=${filters.page}&limit=12`);

        request.onload = function () {
            if (request.status >= 200 && request.status < 400) {
                var data = JSON.parse(request.responseText);
                //We got the data, yo
                dispatch(receiveRecipes(data));
            }
        };
        request.onerror = function() {
            //TODO: Handle this
        };
        request.send();

        return request;
    }
}