import json
import urllib
from datetime import datetime

from flask import render_template, request, jsonify, abort

from PyServer import app
from config import API_URL, RESOURCE_URL


@app.route('/recipes/')
def showrecipes():
    """Renders the recipe page"""
    return render_template(
        'recipes.html',
        title='All Recipes',
        year=datetime.now().year,
        app=app,
        RESOURCE_URL=RESOURCE_URL
    )


@app.route('/recipes/<id>/')
def showrecipe(id):
    """Renders the recipe page"""
    try:
        url = 'http://' + API_URL + '/recipes/' + id
        data = urllib.request.urlopen(url, timeout=1)
        data = json.loads(data.read().decode('utf-8'))
        return render_template(
            'showrecipe.html',
            title='All Recipes',
            year=datetime.now().year,
            recipe=data,
        )

    except urllib.error.URLError:
        return abort(404)


@app.route('/recipes/add/', methods=['GET', 'POST'])
def addrecipe():
    """Renders the recipe submission page."""

    try:

        if request.method == 'POST':
            recipe = request.get_json()
            if recipe is not None:
                return jsonify(recipe)
            else:
                abort(400)
            return render_template(
                'addrecipe.html',
                title='Submit Recipe',
                year=datetime.now().year,
                API_URL=API_URL,
                RESOURCE_URL=RESOURCE_URL
            )
    except KeyError:
        abort(403)
