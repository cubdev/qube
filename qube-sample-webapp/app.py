from flask import Flask, request, render_template
from dbi import get_questions, post_questions

#Set Flask context here
app = Flask(__name__)

@app.route("/")
def home():
	return render_template("index.html")

@app.route("/getQuestions", methods = ['GET'])
def get():
	questions = get_questions()
	return questions

@app.route("/addQuestions", methods = ['POST'])
def post():
	response = ""
	try:
		post_questions(request.json)
		response = "DONE!"
	except Exception as e:
		response = "FAILED TO UPDATE, check input data"
	return response


if __name__ == "__main__":
	app.run(debug=False, host="0.0.0.0", port=5000)
