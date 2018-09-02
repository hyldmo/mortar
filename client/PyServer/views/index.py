from datetime import datetime

from bson import ObjectId
from flask import redirect, request, render_template

from Model.recipe import Recipe, Unit, RecipeIngredient as Ingredient
from PyServer import app
from PyServer.mongodb import db
from config import API_URL
from util import dictify


@app.route('/')
@app.route('/home/')
def home():
    """Renders the home page."""
    return render_template(
        'index.html',
        title='Home Page',
        year=datetime.now().year,
    )


@app.route('/about/')
def about():
    """Renders the about page."""
    return render_template(
        'about.html',
        title='About',
        year=datetime.now().year,
        message='Your application description page.',
    )


@app.route('/api/')
def api():
    return redirect('http://' + API_URL)


@app.route('/test/', methods=['GET', 'PUT', 'DELETE'])
def testrecipe():
    recipe_id = None

    if request.method == 'DELETE':
        db.recipes.drop()
        return "lol"

    if request.method == 'PUT':
        ingredients = [
            Ingredient("Flour", 600, Unit.g),
            Ingredient("Milk", 10, Unit.dl),
            Ingredient("Eggs", 6, Unit.pcs)
        ]
        recipe = Recipe("Pancakes", None, ingredients, "JUST DO IT")
        recipe_id = str(ObjectId(table.insert_one(dictify(recipe)).inserted_id))
        with open("item.txt", "w") as text_file:
            text_file.write(recipe_id)
        return recipe_id

    with open("item.txt", "r") as text_file:
        recipe_id = ObjectId(text_file.read())

    return render_template(
        'showrecipe.html',
        title='Recipe',
        year=datetime.now().year,
        recipe=table.find_one({"_id": recipe_id})
    )
