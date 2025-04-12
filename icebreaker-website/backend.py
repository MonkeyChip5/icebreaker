# app.py
from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client.icebreakerDB
collection = db.activities

@app.route('/api/activities', methods=['GET'])
def get_activities():
    activities = list(collection.find({}, {'_id': 0}))  # Convert Mongo cursor to list
    return jsonify(activities)

if __name__ == '__main__':
    app.run(debug=True)
