from pymongo import MongoClient
from bson.json_util import dumps

# Hardcoding MongoDB localhost here, host ip is picked from DB's container name("db") host.
client = MongoClient(host="db", port=27017)

# Setting database context to qube
db = client['qube']

def get_questions():
	career = db['career']
	return dumps(db.career.find())	

def post_questions(question):
	career = db['career']
	db.career.insert(question)
