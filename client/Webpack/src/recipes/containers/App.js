import { connect } from 'react-redux'

import { swapPage, queryChange } from '../actions/app'
import { addIngredient, changeFilterType, removeIngredient } from '../actions/ingredients'
import { fetchRecipes } from '../actions/recipes'

import App from '../components/App'

const mapStateToProps = (state) => {
    return {
        recipes: state.recipes,
        query: state.filters.query,
        ingredients: state.filters.ingredients,
        currentPage: state.pages.current,
        totalPages: state.pages.total
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        swapPage: (page) => {
            dispatch(swapPage(page));
        },
        addIngredient: name => {
            dispatch(addIngredient(name));
        },
        changeFilterType: (id, filterType) => {
            dispatch(changeFilterType(id, filterType));
        },
        removeIngredient: id => {
            dispatch(removeIngredient(id));
        },
        queryChange: query => {
            dispatch(queryChange(query));
        }
    }
};

const ConnectedApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default ConnectedApp;