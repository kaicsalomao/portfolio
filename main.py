from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home_page():
    return render_template("index.html")


@app.route("/user/<user_name>")
def user(user_name):
    return render_template("user.html", user_name=user_name)


if __name__ == "__main__":
    app.run("localhost", 8080, debug=True)
