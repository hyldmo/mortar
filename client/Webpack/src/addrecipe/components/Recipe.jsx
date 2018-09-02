import React, { PropTypes } from 'react'
import AddIngredient from '../containers/AddIngredient'
import VisibleIngredientList from '../containers/EditableIngredientList'

const Recipe = ({ name, directions, tips, onNameChange, onDirectionsChange, onTipsChange, onSubmit }) => (
    <div className="form-group">
        <div className="form-group">
            <label for="name">Name</label>:
            <input className="form-control" name="name" placeholder="Enter recipe name here" type="text" value={name} onChange={e => onNameChange(e.target.value)}/>
        </div>
        <VisibleIngredientList />
        <AddIngredient />
        <div className="form-group">
            <label for="directions">Directions</label>:
            <textarea className="form-control" name="directions" placeholder="Enter cooking directions here" rows="3" value={directions} onChange={e => onDirectionsChange(e.target.value)}/>
        </div>
        <div class="form-group">
            <label for="tips">Tips</label>:
            <textarea className="form-control" name="tips" placeholder="Enter tips here" rows="3" value={directions} onChange={e => onTipsChange(e.target.value)}/>
        </div>
        <input type="submit" className="btn btn-default" value="Submit Recipe" onClick={onSubmit} />
    </div>
);

Recipe.propTypes = {
    name: PropTypes.string.isRequired,
    directions: PropTypes.string.isRequired,
    tips: PropTypes.string.isRequired,
    onNameChange: PropTypes.func.isRequired,
    onDirectionsChange: PropTypes.func.isRequired,
    onTipsChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Recipe
