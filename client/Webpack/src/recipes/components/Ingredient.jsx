import React, { Component, PropTypes } from 'react'

class Ingredient extends Component {
    render() {
        const { id, name, filterType, changeFilterType, removeIngredient } = this.props;

        return(
            <div id={`ingredient-${id}-${name}`} className={`filters-ingredient ${filterType}`}>
                <button onClick={e => changeFilterType(id, filterType)} className={`glyphicon glyphicon-${filterType === 'include' ? 'plus' : 'minus'}`} />
                <strong>{name}</strong>
                <button onClick={e => removeIngredient(id)} className="glyphicon glyphicon-remove" />
            </div>
        );
    }
}

Ingredient.propTypes = {
};

export default Ingredient