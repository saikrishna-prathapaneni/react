import urllib.parse
from flask import Flask,jsonify,request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS



app = Flask(__name__)
CORS(app)
ma = Marshmallow(app)
# Encode the password using urllib.parse.quote_plus()
password = 'mypassword'
encoded_password = urllib.parse.quote_plus(password)

# Construct the database URL with the encoded password
app.config['SQLALCHEMY_DATABASE_URI'] = f"postgresql://myuser:{encoded_password}@localhost/flasksql"

# Disable SQLAlchemy modification tracking, as it can cause overhead and is not needed for this example
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create the SQLAlchemy instance
db = SQLAlchemy(app)

# Define the Articles model
class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    body = db.Column(db.Text())
    date = db.Column(db.DateTime, default=datetime.datetime.now)

    def __init__(self, title, body):
        self.title = title
        self.body = body



class ArticleSchema(ma.Schema):
    class Meta:
        fields =('id','title','body','date')

article_schema= ArticleSchema()
article_schemas= ArticleSchema(many=True)

# Define a route to add an article to the database
@app.route('/',methods=['GET'])
def home():
    articles = Articles.query.all()
    result = []
    for article in articles:
        article_data = {}
        article_data['id'] = article.id
        article_data['title'] = article.title
        article_data['body'] = article.body
        article_data['date'] = article.date
        result.append(article_data)
    return jsonify(result)
    # Create a new article
  
    # Return a message indicating success
    
@app.route('/add_article',methods=['POST'])
def add_article():
    # Create a new article
    title = request.json['title']
    body = request.json['body']
    article = Articles(title,body)
    # Add the article to the database
    db.session.add(article)
    db.session.commit()
    # Return a message indicating success
    articles = Articles.query.all()
    result = []
    for article in articles:
        article_data = {}
        article_data['id'] = article.id
        article_data['title'] = article.title
        article_data['body'] = article.body
        article_data['date'] = article.date
        result.append(article_data)
    return jsonify(result)
# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
