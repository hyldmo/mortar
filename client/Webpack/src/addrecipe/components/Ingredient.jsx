import React, { PropTypes } from 'react'
import Suggestions from './Suggestions'

const Ingredient = ({ substance, amount, unit, suggestions, onRemoveClick, onNameChange, onSuggestionClick, onAmountChange, onUnitChange }) => (
    <li className="form-group list-group-item well well-sm" >
        <button type="button" className="btn btn-xs btn-danger remove pull-right" onClick={onRemoveClick} >
            <span className="glyphicon glyphicon-trash" />
        </button>
        <label>Ingredient name:</label>
        <input className='form-control list-group-dropdown-header' placeholder="Enter ingredient name" value={substance} onChange={e => onNameChange(e)} />
        <Suggestions suggestions={suggestions} onSuggestionClick={value => onSuggestionClick(value)} term={substance}/>
        <label>Amount:</label>
        <div className="input-group">
            <input className="form-control" placeholder="0" min="1" max="9999" type="number" defaultValue={amount} onChange={e => onAmountChange(e)}/>
            <span className="input-group-btn">
                <select className="form-control" defaultValue={unit} onChange={e => onUnitChange(e)}>
                    <option value="tsp">tsp</option>
                    <option value="tbl">tbl</option>
                    <option value="ml">ml</option>
                    <option value="dl">dl</option>
                    <option value="g">gram</option>
                    <option value="pcs">pcs</option>
                </select>
            </span>
        </div>
    </li>
);

Ingredient.propTypes = {
    substance: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    suggestions: PropTypes.array
};

export default Ingredient
