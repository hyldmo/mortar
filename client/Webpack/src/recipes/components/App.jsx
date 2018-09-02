import React, { Component, PropTypes } from 'react'
import Recipes from '../containers/Recipes'
import Pages from '../containers/Pages'
import Ingredients from '../containers/Ingredients'

class App extends Component {
    render() {
        const {recipes,
            search, queryChange, query, ingredients,
            addIngredient, changeFilterType, removeIngredient
        } = this.props;

        return(
            <div>
                <h2>All Recipes</h2>
                <hr/>
                <div className="row">
                    <div className="col-md-9">
                        <Recipes recipes={recipes} />
                        <Pages />
                    </div>
                    <div id="filters" className="col-md-3">
                        <h3>Filters</h3>
                        <hr/>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Recipe name" value={query} onChange={e => queryChange(e.target.value, ingredients)}/>
                            <span className="input-group-btn">
                                <button className="btn btn-success" onClick={e => search(query, ingredients)}>
                                    <span className="glyphicon glyphicon-search" />
                                </button>
                            </span>
                        </div>
                        <hr/>
                        <Ingredients ingredients={ingredients} addIngredient={addIngredient} changeFilterType={changeFilterType} removeIngredient={removeIngredient} />
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    recipes: PropTypes.array,
    pages: PropTypes.number,
    currentPage: PropTypes.number.isRequired,
    swapPage: PropTypes.func.isRequired,
};

export default App