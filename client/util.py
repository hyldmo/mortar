from enum import Enum

def dictify(obj):    
    if isinstance(obj, dict) :
        data = {}
        for (k, v) in obj.items():
            if not k.startswith('_'):
                data[k] = dictify(v)
        return data
    elif isinstance(obj, Enum):
        data = [(str(type(obj)), obj.name)]
        return obj.name
    elif hasattr(obj, "__iter__") and not isinstance(obj, str):
        return [dictify(v) for v in obj]
    elif hasattr(obj, "__dict__"):
        data = dict([(key, dictify(value)) 
            for key, value in obj.__dict__.items() 
            if not callable(value) and not key.startswith('_')])
        return data
    else:
        return obj

from Model.recipe import *
from types import SimpleNamespace

def tryparse(object):
    return hardcode(object)


def hardcode(obj):
    if (isinstance(obj, Recipe)):
        for ingredient in obj.ingredients:
            for key, value in ingredient.__dict__.items():
                if (key == 'unit') and (hasattr(value, 'name')):
                    setattr(ingredient, key, value.name)
    return obj
    

def parseEnums(obj):
    if isinstance(obj, Enum):
        return obj.name
    elif hasattr(obj, "__iter__") and not isinstance(obj, str):
        return [parseEnums(v) for v in obj]
    elif hasattr(obj, "__dict__"):
        data = type(
            'Recipe', 
            (object,), 
            (
            {key: parseEnums(value)}
                for key, value in obj.__dict__.items() 
                if not callable(value) and not key.startswith('_')
            )
        )

        return data
    else:
        return obj