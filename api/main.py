
from dotenv import load_dotenv
load_dotenv()
import os

from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

from flask_cors import CORS, cross_origin


# connection = MySQLdb.connect(
#   host= os.getenv("HOST"),
#   user=os.getenv("USERNAME"),
#   passwd= os.getenv("PASSWORD"),
#   db= os.getenv("DATABASE"),
#   ssl_mode = "VERIFY_IDENTITY",
#   ssl      = {
#     "ca": "/etc/ssl/cert.pem"
#   }
# )


app = Flask(__name__)
cors= CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['MYSQL_HOST'] = os.getenv("HOST")
app.config['MYSQL_USER'] = os.getenv("USERNAME")
app.config['MYSQL_PASSWORD'] = os.getenv("PASSWORD")
app.config['MYSQL_DB'] = os.getenv("DATABASE")

mysql = MySQL(app)

# Routes

# GET methods
@app.route('/api/clients')
@cross_origin()
def getAllClient():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM clients;")
    data = cur.fetchall()
    result = []
    for row in data:
        content = {'id': row[0], 'firstname': row[1], 'lastname': row[2], 'email': row[3], 'phone': row[4], 'address': row[5]}
        result.append(content)
    
    return jsonify(result)

@app.route('/api/clients/<int:id>')
@cross_origin()
def getClient(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM clients WHERE clients.id = "+ str(id) +";")
    data = cur.fetchall()

    for row in data:
        content = {'id': row[0], 'firstname': row[1], 'lastname': row[2], 'email': row[3], 'phone': row[4], 'address': row[5]}

    
    return jsonify(content)

# POST method
@app.route('/api/clients', methods=['POST'])
@cross_origin()
def createClient():
    cur = mysql.connection.cursor()
    cur.execute("INSERT INTO clients (firstname, lastname, email, phone, address) VALUES (%s, %s, %s, %s, %s);", 
    (request.json['firstname'], request.json['lastname'], request.json['email'], request.json['phone'], request.json['address']))
    mysql.connection.commit()
    return "Client Created"

# PUT method
@app.route('/api/clients', methods=['PUT'])
@cross_origin()
def updateClient():
    cur = mysql.connection.cursor()
    cur.execute("UPDATE clients SET firstname = %s, lastname = %s, email = %s, phone = %s, address = %s WHERE clients.id = %s;", 
    (request.json['firstname'], request.json['lastname'], request.json['email'], request.json['phone'], request.json['address'], request.json['id']))
    mysql.connection.commit()
    return "Client Changed"


# DELETE method
@app.route('/api/clients/<int:id>', methods=['DELETE'])
@cross_origin()
def removeClient(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM clients WHERE id = "+ str(id) +" ;")
    mysql.connection.commit()
    return "Client deleted"



if __name__ == '__main__':
    print("Running...")

