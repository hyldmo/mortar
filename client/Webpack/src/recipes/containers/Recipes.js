import { connect } from 'react-redux'
import Recipes from '../components/RecipeList'
import fetchRecipes from '../actions/recipes'

const mapStateToProps = (state) => {
    return {
        recipes: (state.recipes)
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const RecipeList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Recipes);

export default RecipeList