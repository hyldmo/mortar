from Model.recipe_ingredient import *


class Recipe(object):
    """A Recipe Class
    
    Attributes:
        name: A string representing the recipes's name.
        image: A string represting recipe's image's url.
        ingredients: A list of ingredient objects.
        directions: A string representing how to make the recipe.
    """

    def __init__(self, name='', image=None, ingredients=[RecipeIngredient()], directions='', tips=''):
        """Return a Recipe object whose name is *name* and starting
        directions is *directions*."""
        self.name = name
        self.image = image
        self.ingredients = ingredients
        self.directions = directions
        self.tips = tips


