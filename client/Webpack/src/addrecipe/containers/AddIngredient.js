import React from 'react'
import { connect } from 'react-redux'
import { addIngredient } from '../actions'

let AddIngredient = ({ dispatch }) => {
    return (
        <div className="form-group">
            <button className="btn btn-success" onClick={
                e => {
                    e.preventDefault();
                    dispatch(addIngredient(e.target));
                }}>
                Add Ingredient
            </button>
        </div>
    )
};

AddIngredient = connect()(AddIngredient);

export default AddIngredient