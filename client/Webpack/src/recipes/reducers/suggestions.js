const suggestions = (state = { suggestions: [], ingredient: '' }, action) => {
    switch (action.type) {
        case 'REQUEST_SUGGESTIONS':
            return {
                ...state,
                ingredient: action.query
            };

        case 'SELECT_SUGGESTION':
            return {
                ...state,
                ingredient: action.suggestion,
                suggestions: []
            };

        case 'RECEIVE_SUGGESTIONS':
            return {
                ...state,
                suggestions: action.suggestions
            };

        default:
            return state;
    }
};

export default suggestions