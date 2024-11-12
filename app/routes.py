from http.client import responses

from sqlalchemy.testing.suite.test_reflection import users
from werkzeug.utils import redirect

from app import app
from flask import render_template, flash, make_response, session, url_for, request
from app.forms import AuthForm, RegForm
from app.models import *

@app.route('/')
def index():
    user = User.query.get(session['user_id'])
    return render_template('index.html', session=user.username)

@app.route('/auth', methods=['POST', 'GET'])
def auth():
    form = AuthForm()
    if request.method == 'POST':
        if form.validate_on_submit():
            username = form.username.data
            password = form.password.data
            print(f"Пользователь: {username}, Пароль: {password}")
            user = User.query.filter(User.username == username).first()
            if not user:
                flash('Неверный логин или пароль')
                return redirect(url_for('auth'))
            session['user_id'] = user.id
            return redirect(url_for('index'))
    return render_template('auth.html', form=form)

@app.route('/reg', methods=['POST', 'GET'])
def registration():
    form = RegForm()
    if request.method == 'POST':
        if form.validate_on_submit():
            username = form.username.data
            password = form.password.data
            print(f"Пользователь: {username}, Пароль: {password}")
            return redirect(url_for('index'))
    return render_template('registration.html', form=form)