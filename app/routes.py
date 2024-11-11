from http.client import responses

from sqlalchemy.testing.suite.test_reflection import users
from werkzeug.utils import redirect

from app import app
from flask import render_template, flash, make_response, session, url_for, request
from app.forms import SignInForm
from app.models import *

@app.route('/')
def index():
    user = User.query.get(session['user_id'])
    return render_template('index.html', session=user.username)

@app.route('/signin', methods=['POST', 'GET'])
def signin():
    form = SignInForm()
    if request.method == 'POST':
        if form.validate_on_submit():
            username = form.username.data
            password = form.password.data
            print(f"Пользователь: {username}, Пароль: {password}")
            user = User.query.filter(User.username == username).first()
            if not user:
                flash('Неверный логин или пароль')
                return redirect(url_for('signin'))
            session['user_id'] = user.id
            return redirect(url_for('index'))
    return render_template('sign_in.html', form=form)