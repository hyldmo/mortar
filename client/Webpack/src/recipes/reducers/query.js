import { QUERY_CHANGE } from '../actions/app'

export const query = (state = '', action) => {
    switch (action.type) {
        case QUERY_CHANGE:
            return action.query;
        default:
            return state;
    }
};

export default query