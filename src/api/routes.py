"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint, current_app
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager
import json 

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

## login post
## registro post
## ruta privada get all users

 
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/register', methods=['POST'])
def register():
    body=json.loads(request.data)
    add_user= User.query.filter_by(email=body["email"]).first()
    
    if add_user is None:
        password_hash=current_app.bcrypt.generate_password_hash(body["password"]).decode("utf-8")
        new_user=User(
            email=body["email"],
            password=password_hash,
            name=body["name"],
            last_name=body["last_name"]
        )
        db.session.add(new_user)
        db.session.commit()
        db.session.refresh(new_user)
        return jsonify(new_user.serialize()),200
    return jsonify({"msg":"el usuario ya existe"}),404


# Create a route to authenticate your users and return JWTs. The
# create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user= User.query.filter_by(email=email).first()
    
    if user is None:
        return jsonify({"msg":"el usuario no existe"}),404
    valid_password=current_app.bcrypt.check_password_hash(user.password, password)
    if email != user.email or not valid_password:
        return jsonify({"msg": "invalid credentials"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(user=user.serialize(), access_token=access_token)


@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    email = get_jwt_identity()

    user= User.query.filter_by(email=email).first()
    
    if user is None:
        return jsonify({"msg":"el usuario no existe"}),404
    return jsonify(user=user.serialize()),202