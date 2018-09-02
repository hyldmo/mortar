import { connect } from 'react-redux'
import Ingredients from '../components/Ingredients'
import { fetchSuggestions, selectSuggestion } from '../../addrecipe/actions'

const mapStateToProps = (state) => {
    return {
        ingredient: state.suggestions.ingredient,
        suggestions: state.suggestions.suggestions
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectSuggestion: substance => {
            dispatch(selectSuggestion(0, substance))
        },
        getSuggestions: query => {
            dispatch(fetchSuggestions(0, query))
        }
    }
};

const _Ingredients = connect(
    mapStateToProps,
    mapDispatchToProps
)(Ingredients);

export default _Ingredients