"""
This script runs the PyServer application using a development server.
"""
from PyServer import app
from waitress import serve
from decouple import config
import logging

from config import PORT


if __name__ == '__main__':
    logger = logging.getLogger()

    if app.debug:
        app.run(host='0.0.0.0', port=PORT)

    else:
        try:
            serve(app, host='0.0.0.0', port=PORT)

        except SystemExit:
            app.logger.error('Server shutdown.')
        except:
            app.logger.critical('Unknown error.')
