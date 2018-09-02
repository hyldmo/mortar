import { ADD_INGREDIENT, REMOVE_INGREDIENT, CHANGE_FILTER_TYPE, CHANGE_INGREDIENTS} from '../actions/ingredients'

let nextID = 0;

const ingredient = (state = {}, action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            const capitalizedName = `${action.name.substring(0, 1).toUpperCase()}${action.name.substring(1)}`;

            return {
                id: nextID++,
                name: capitalizedName,
                filterType: action.filterType
            };
        case CHANGE_FILTER_TYPE:
            if (state.id !== action.id)
                return state;

            return {
                ...state,
                filterType: action.filterType
            };

        default:
            return state;
    }
};

const ingredients = (state = [], action) => {
    switch (action.type) {
        case ADD_INGREDIENT:
            let matches = state.filter(item => {
                return item.name.toUpperCase() == action.name.toUpperCase();
            }).length;

            //Don't add empty or existing items
            if (action.name.length < 1 || matches > 0)
                return state;

            return [
                ...state,
                ingredient(undefined, action)
            ];

        case CHANGE_FILTER_TYPE:
        case CHANGE_INGREDIENTS:
            return state.map(
                t => ingredient(t, action)
            );

        case REMOVE_INGREDIENT:
            return state.filter(item => {
                return item.id != action.id;
            });

        default:
            return state;
    }
};



export default ingredients