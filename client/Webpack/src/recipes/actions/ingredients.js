export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export function addIngredient(name) {
    return {
        type: ADD_INGREDIENT,
        name,
        filterType: 'include'
    }
}

export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export function removeIngredient(id) {
    return {
        type: REMOVE_INGREDIENT,
        id
    }
}

export const CHANGE_FILTER_TYPE = 'CHANGE_FILTER_TYPE';
export function changeFilterType(id, filterType) {
    return {
        type: CHANGE_FILTER_TYPE,
        id,
        filterType: filterType == 'include' ? 'exclude' : 'include'
    }
}

export const CHANGE_INGREDIENTS = 'CHANGE_INGREDIENTS';
export function changeIngredients(ingredients) {
    return {
        type: CHANGE_INGREDIENTS,
        ingredients
    }
}