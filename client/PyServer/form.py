from flask_wtf import Form
from wtforms import StringField, TextAreaField, IntegerField, SelectField, FormField, FileField, FieldList, PasswordField, BooleanField, validators
from wtforms.validators import InputRequired, NumberRange, Optional, Length
from Model.recipe_ingredient import Unit
import util

inputReq = InputRequired('Cannot be empty')
nameVals = [inputReq, Length(2, 60, 'Name not correct length')]
textAreaVal = Length(max=2000, message='TOO LONG; DIDNT READ')


class IngredientForm(Form):
    substance = StringField('Ingredient name', nameVals)
    amount = IntegerField('Amount', [NumberRange(0.01, 32767, 'Number not in valid range')])
    unit = SelectField(u'Unit of measurement', choices=[(u.name, u.description()) for u in Unit])


class RecipeForm(Form):
    name = StringField('Name', nameVals)
    ingredients = FieldList(FormField(IngredientForm))
    image = FileField()
    directions = TextAreaField('Directions', [inputReq, textAreaVal])
    tips = TextAreaField('Tips',  [textAreaVal])

    # Hack to parse enums
    def __init__(self, obj):
        return super().__init__(obj=util.tryparse(obj))


class UserForm(Form):
    username = StringField('Name', nameVals)
    password = PasswordField('Password', nameVals)
    newUser = BooleanField('New User')
