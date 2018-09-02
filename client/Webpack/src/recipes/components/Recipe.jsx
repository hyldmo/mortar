import React, { Component, PropTypes } from 'react'

class Recipe extends Component {
    render() {
        const { href, title, ingredients, thumbnail } = this.props;

        let image = thumbnail || '../static/images/404.png';
        let style = {
            backgroundImage: `url(${image})`
        };

        let ingredientsArray = typeof ingredients === "string" ?
            ingredients.split(', ') :
            ingredients;

        return (
            <div className="col-xs-6 col-sm-4 col-md-3 col-lg-3">
                <div className="recipe panel panel-box">
                    <a href={href} target="_blank"/>
                    <div className="panel-title bg-image" style={style}/>
                    <div className="panel-body">
                        <h3>{title}</h3>
                        <ul className="ingredients">
                        {ingredientsArray.map((ingredient, i) =>
                            <li key={`${i}-${ingredient}`}>{ingredient}</li>
                        )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

Recipe.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    thumbnail: PropTypes.string
};

export default Recipe
