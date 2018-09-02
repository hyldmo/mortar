import { SWAP_PAGE } from '../actions/app'
import { RECEIVE_RECIPES } from '../actions/recipes';

export const pages = (state = { current: 1, total: 1 }, action) => {
    switch (action.type) {
        case SWAP_PAGE:
            return {
                ...state,
                current: action.page
            };
        case RECEIVE_RECIPES:
            return {
                ...state,
                total: action.totalPages
            };
        default:
            return state;
    }
};