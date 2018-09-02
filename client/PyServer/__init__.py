"""
The flask application package.
"""
from flask import Flask
from config import PORT, DEBUG, SECRET_KEY

app = Flask(__name__)
app.config.update(
    PORT=PORT,
    DEBUG=DEBUG,
    SECRET_KEY=SECRET_KEY
)


def enumfilter(data):
    try:
        return data[5:]
    except:
        return 'qty'

app.jinja_env.filters['enum'] = enumfilter

from PyServer.views import *
