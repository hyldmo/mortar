import { connect } from 'react-redux'
import { editRecipeName, editDirections, editTips } from '../actions/recipe'
import Recipe from '../components/Recipe'

const mapStateToProps = (state) => {
    return {
        name: (state.name),
        directions: (state.directions),
        tips: (state.tips)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNameChange: (name) => {
            dispatch(editRecipeName(name));
        },
        onDirectionsChange: (directions) => {
            dispatch(editDirections(directions));
        },
        onTipsChange: (tips) => {
            dispatch(editTips(tips));
        }
    }
};

const RecipeApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipe);

export default RecipeApp