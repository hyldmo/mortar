import RECEIVE_SUGGESTIONS from '../actions'

const ingredient = (state, action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return {
                id: action.id,
                substance: '',
                amount: 1,
                unit: 'pcs',
                suggestions: []
            };
        case 'EDIT_INGREDIENT':
            if (state.id !== action.id)
                return state;

            return {
                ...state,
                substance: action.substance
            };
        case 'EDIT_INGREDIENT_AMOUNT':
            if (state.id !== action.id)
                return state;

            return {
                ...state,
                amount: action.amount
            };
        case 'EDIT_INGREDIENT_UNIT':
            if (state.id !== action.id)
                return state;

            return {
                ...state,
                unit: action.unit
            };
        case 'SELECT_SUGGESTION':
            if (state.id !== action.id)
                return state;

            return {
                ...state,
                substance: action.suggestion,
                suggestions: []
            };
        case 'RECEIVE_SUGGESTIONS':
            if (state.id !== action.id)
                return state;

            return {
                ...state,
                suggestions: action.suggestions
            };

        default:
            return state;
    }
};

const ingredients = (state = [], action) => {
    switch (action.type) {
        case 'ADD_INGREDIENT':
            return [
                ...state,
                ingredient(undefined, action)
            ];
        case 'EDIT_INGREDIENT':
        case 'EDIT_INGREDIENT_AMOUNT':
        case 'EDIT_INGREDIENT_UNIT':
        case 'RECEIVE_SUGGESTIONS':
        case 'SELECT_SUGGESTION':
            return state.map(
                t => ingredient(t, action)
            );
        case 'REMOVE_INGREDIENT':
            return state.filter(item => {
                return item.id != action.id;
            });
        default:
            return state;
    }
};



export default ingredients