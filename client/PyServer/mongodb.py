from pymongo import MongoClient

from config import DB_HOST, DB_TIMEOUT

db = MongoClient(DB_HOST, 27017, connect=False, serverSelectionTimeoutMS=DB_TIMEOUT).topkook
