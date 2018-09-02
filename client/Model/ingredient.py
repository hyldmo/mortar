class Fats(object):
    def __init__(self, saturated=0, trans=0, monounsaturated=0, polyunsaturated=0):
        self.saturated = saturated
        self.trans = trans
        self.monounsaturated = monounsaturated
        self.polyunsaturated = polyunsaturated


class Carbohydrates(object):
    def __init__(self, carbohydrate='', fiber=0, sugar=0, starch=0):
        self.carbohydrate = carbohydrate
        self.fiber = fiber
        self.sugar = sugar
        self.starch = starch


class NutritionValues(object):
    """Nutritional Values Class
    All values must be in grams per 100g

    Attributes:
        calories (int): A string representing the ingredient's name.
        fats (Fats): A Fats Object
        carbohydrates (Carbohydrates): Carbohydrates Object
        sodium (int): Tags for food type, such as:
            meat, dairy, or info related to allergies

    """
    def __init__(self, calories=0, fats=Fats(), carbohydrates=Carbohydrates(), sodium=0):
        self.calories = calories
        self.fats = fats
        self.carbohydrates = carbohydrates
        self.sodium = sodium


class Ingredient(object):
    """Ingredient Class

    Attributes:
        substance (str): A string representing the ingredient's name.
        nutrients (NutritionValues): An enum for which unit of measurement the ingredient is using.
        tags ([str]): Tags for food type, such as:
            meat, dairy, or info related to allergies

    """
    def __init__(self, substance='', nutrients=NutritionValues(), tags=[]):
        self.substance = substance
        self.nutrients = nutrients
        self.tags = tags