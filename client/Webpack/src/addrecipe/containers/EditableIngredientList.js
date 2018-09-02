import { connect } from 'react-redux'
import { removeIngredient, editIngredientAmount, editIngredientName, editIngredientUnit, fetchSuggestions, selectSuggestion } from '../actions'
import IngredientList from '../components/IngredientList'

const mapStateToProps = (state) => {
    return {
        ingredients: (state.ingredients)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIngredientRemoveClick: (ingredient) => {
            dispatch(removeIngredient(ingredient.id));
        },
        //TODO: Refactor this to handle different field changes
        onIngredientNameChange: (id, substance) => {
            dispatch(editIngredientName(id, substance));
            dispatch(fetchSuggestions(id, substance));
        },
        onIngredientAmountChange: (id, amount) => {
            dispatch(editIngredientAmount(id, amount));
        },
        onIngredientUnitChange: (id, amount) => {
            dispatch(editIngredientUnit(id, amount));
        },
        onSuggestionClick: (id, value) => {
            dispatch(selectSuggestion(id, value));
        }
    }
};

const VisibleIngredientList = connect(
    mapStateToProps,
    mapDispatchToProps
)(IngredientList);

export default VisibleIngredientList