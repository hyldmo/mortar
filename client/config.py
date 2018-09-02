import uuid
from decouple import config as env

DOCKER = env('DOCKER', cast=bool)

# ------------------- #
#    Flask config     #
# ------------------- #
PORT = env('PORT', cast=int),
DEBUG = env('DEBUG', cast=bool, default=False)
SECRET_KEY = env('SECRET_KEY', default=str(uuid.uuid4()))

# ------------------- #
# External URL config #
# ------------------- #
if DOCKER or not DEBUG:
    API_URL = 'mortar.no:3000'
else:
    API_URL = 'localhost:3000'

if DEBUG and not DOCKER:
    RESOURCE_URL = 'http://localhost:1338'
else:
    RESOURCE_URL = ''


# ------------------- #
#   Database config   #
# ------------------- #
DB_HOST = 'localhost'
DB_TIMEOUT = 50

if DOCKER:
    HOST = 'db'
    timeout = 30000