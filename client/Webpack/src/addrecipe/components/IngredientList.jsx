import React, { PropTypes } from 'react'

import Ingredient from './Ingredient'

const IngredientList = ({ ingredients, onIngredientRemoveClick, onIngredientNameChange, onIngredientAmountChange, onSuggestionClick, onIngredientUnitChange }) => (
    <ul className="list-group">
        {ingredients.map(ingredient =>
            <Ingredient
                key={ingredient.id}
                {...ingredient}
                onRemoveClick={() => onIngredientRemoveClick(ingredient)} //TODO: Change to .id
                onNameChange={e => onIngredientNameChange(ingredient.id, e.target.value)}
                onSuggestionClick={value => onSuggestionClick(ingredient.id, value)}
                onAmountChange={e => onIngredientAmountChange(ingredient.id, e.target.value)}
                onUnitChange={e => onIngredientUnitChange(ingredient.id, e.target.value)}
            />
        )}
    </ul>
);

IngredientList.propTypes = {
    ingredients: PropTypes.arrayOf(
        PropTypes.shape(Ingredient.propTypes)
    ).isRequired,
    onIngredientRemoveClick: PropTypes.func.isRequired,
    onIngredientNameChange: PropTypes.func.isRequired,
    onIngredientAmountChange: PropTypes.func.isRequired,
    onIngredientUnitChange: PropTypes.func.isRequired,
    onSuggestionClick: PropTypes.func.isRequired
};

export default IngredientList