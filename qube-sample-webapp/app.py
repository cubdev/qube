from flask import Flask, request, render_template

#Set Flask context here
app = Flask(__name__)

CAREERS = ["SMOKE WEED"]

@app.route("/")
def home():
	return render_template("index.html")

@app.route("/careers", methods = ['GET', 'POST'])
def get_career():
	global CAREERS
	if request.method == "GET":
		return ','.join(CAREERS)
	elif request.method == "POST":
		CAREERS.append(request.data)
	

if __name__ == "__main__":
	app.run(debug=True)
