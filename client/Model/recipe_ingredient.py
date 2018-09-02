from enum import Enum


class Unit(Enum):
    tsp, tbl, ml, dl, g, pcs = range(6)

    def description(self):
        switcher = {
            Unit.g: 'gram'
        }
        return switcher.get(self, self.name)


class RecipeIngredient(object):
    """Ingredient Class

    Attributes:
        substance (str): A string representing the ingredient's name.
        amount (int): The amount of ingredient.
        unit (enum): An enum for which unit of measurement the ingredient is using.
    """

    def __init__(self, substance='', amount=1, unit=Unit.pcs):
        self.substance = substance
        self.amount = amount
        self.unit = unit
