from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

def saveClient():
    return "ok"

def removeClient():
    return "ok"

def getClient():
    return "ok"

def getAllClient():
    return "ok"

if __name__ == '__main__':
    app.run(None, 3000, True)

