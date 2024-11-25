from http.client import responses

from sqlalchemy.testing.suite.test_reflection import users
from werkzeug.utils import redirect

from app import app
from flask import render_template, flash, make_response, session, url_for, request
from app.forms import AuthForm, RegForm
from app.models import *
from app.common import *

@app.route('/')
def index():
    user_id = session.get('user_id')
    user = None
    if user_id:
        user = User.query.get(user_id).username
    return render_template('index.html', session=user)

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
            if not check_password(password, user.password_hash):
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
            repPassword = form.repPassword.data
            role = form.role.data
            if password != repPassword:
                flash('Несовпадает пароль')
                return redirect(url_for('registration'))
            print(f"Пользователь: {username}, Пароль: {password}")
            new_user = User(username = username, password_hash = hash_password(password), role = role)
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id
            return redirect(url_for('index'))
    return render_template('registration.html', form=form)

@app.route('/intership')
def intership():
    return render_template('intership.html')

@app.route('/sample')
def sample():
    return render_template('sample-0.html')