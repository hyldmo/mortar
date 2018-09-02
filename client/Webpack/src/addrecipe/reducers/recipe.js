import { EDIT_RECIPE_NAME, EDIT_DIRECTIONS, EDIT_TIPS } from '../actions/recipe'

const recipe = (state = { name:'', directions:'', tips:'' }, action) => {
    switch (action.type) {
        case EDIT_RECIPE_NAME:
            return {
                ...state,
                name: action.name
            };
        case EDIT_DIRECTIONS:
            return {
                ...state,
                directions: action.directions
            };
        case EDIT_TIPS:
            return {
                ...state,
                tips: action.tips
            };
        default:
            return state;
    }
};

export default recipe