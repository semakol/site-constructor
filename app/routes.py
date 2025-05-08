from datetime import datetime

import random
from werkzeug.utils import redirect
from bs4 import BeautifulSoup as bs

from app import app
from flask import render_template, flash, make_response, session, url_for, request, Response, jsonify
# # from app.forms import AuthForm, RegForm
# from app.models import *
# from app.common import *


@app.route('/')
def index():
    return 'scam'


@app.route('/auth', methods=['POST', 'GET'])
def auth():
    if request.method == 'POST':
        data = request.json
        if data['login'] == '123':
            return jsonify({
                "message": "Login successful",
                "token": "some-jwt-token"
            }), 200
        else:
            return jsonify({
                    "message": "scam"
                }), 203
    if request.method == 'GET':
        return jsonify({
            "message": "Login successful",
            "token": "some-jwt-token"
        }), 200