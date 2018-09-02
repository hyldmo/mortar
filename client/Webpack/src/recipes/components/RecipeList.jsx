import React, { PropTypes } from 'react'
import Recipe from './Recipe'

const RecipeList = ({recipes}) => (
    <div className="row">
        {recipes.map((recipe, i) =>
            <Recipe key={i} {...recipe} />
        )}
    </div>
);

export default RecipeList;