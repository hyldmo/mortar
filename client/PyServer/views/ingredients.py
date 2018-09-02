from PyServer import app
from flask import flash, redirect, render_template, request, url_for, jsonify, abort, session
from datetime import datetime
from Model.ingredient import Ingredient
import util
import pymongo

from PyServer.mongodb import db

table = db.ingredients
try:
    table.create_index('substance', unique=True)
except:
    pass  # This will fail if the key is already created, which means we're good


@app.route('/ingredients/add/', methods=['GET', 'POST'])
def add_ingredient():
    """Renders the recipe submission page."""
    try:
        if session['username'] == 'admin':
            if request.method == 'POST':
                text_list = request.form['ingredients'].split(',')
                ingredients_set = list(set(text_list))

                for ingredient in ingredients_set:
                    table.insert_one(
                            util.dictify(Ingredient(ingredient.capitalize()))
                    )

                return redirect(url_for('all_ingredients'))

            return render_template(
                    'addingredient.html',
                    title='Submit Ingredients',
                    year=datetime.now().year
            )

        return abort(403)

    except Exception as ex:
        flash(str(ex))
        return abort(403)


@app.route('/ingredients/')
def all_ingredients():
    ingredients = table.find({}).sort('substance', pymongo.ASCENDING)
    return jsonify({'ingredients': util.dictify(ingredients)})
