import React, { Component, PropTypes } from 'react'
import Ingredient from './Ingredient'
import Suggestions from '../../addrecipe/components/Suggestions'

class Ingredients extends Component {
    render() {
        const {
            ingredients, addIngredient, removeIngredient, changeFilterType,
            ingredient, suggestions, selectSuggestion, getSuggestions
        } = this.props;

        return(
            <div className="filters">
                {ingredients.map((ingredient, i) =>
                    <Ingredient key={i} {...ingredient} removeIngredient={removeIngredient} changeFilterType={changeFilterType}/>
                )}

                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Ingredient name" value={ingredient} onChange={e => getSuggestions(e.target.value)} />
                    <span className="input-group-btn">
                        <button className="btn btn-success" onClick={e => addIngredient(ingredient)}>
                            <span className="glyphicon glyphicon-plus" />
                        </button>
                    </span>
                </div>
                <Suggestions suggestions={suggestions} onSuggestionClick={suggestion => selectSuggestion(suggestion)} term={ingredient}/>
            </div>
        );
    }
}

Ingredients.propTypes = {
};

export default Ingredients