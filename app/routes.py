from crypt import methods
from datetime import datetime
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
    role = check_auth(session)
    if role == 'editor':
        return redirect(url_for('internship'))
    elif role == 'intern':
        return redirect(url_for('internship'))
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
            first_name = form.name.data
            second_name = form.subName.data
            role = form.role.data
            if password != repPassword:
                flash('Несовпадает пароль')
                return redirect(url_for('registration'))
            print(f"Пользователь: {username}, Пароль: {password}")
            new_user = User(username=username, password_hash=hash_password(password),
                            role=role, first_name=first_name, second_name=second_name)
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id
            return redirect(url_for('internship'))
    return render_template('registration.html', form=form)


@app.route('/internship')
def internship():
    return render_template('internship.html')

@app.route('/PA-record-student')
def PA_record_student():
    role = check_auth(session)
    if role == 'None':
        return redirect(url_for('auth'))
    results = (db.session.query(Sample, SampleUser).join(SampleUser)
               .filter(SampleUser.userId == session['user_id'], SampleUser.relationship == 'subscriber')
               .limit(4).all())
    data = [
        {'id': item[0].id,
         'name': item[0].name}
        for item in results
    ]
    return render_template('PA-record-student.html', data=data)

@app.route('/PA-redactor')
def PA_redactor():
    role = check_auth(session)
    if role == 'None':
        return redirect(url_for('auth'))
    results = (db.session.query(Sample, SampleUser).join(SampleUser)
               .filter(SampleUser.userId == session['user_id'], SampleUser.relationship=='creator')
               .limit(4).all())
    data = [
        {'id': item[0].id,
         'name': item[0].name}
        for item in results
    ]
    return render_template('PA-redactor.html', data=data)

@app.route('/PA-student')
def PA_student():
    role = check_auth(session)
    if role == 'None':
        return redirect(url_for('auth'))
    results = (db.session.query(Sample, SampleUser).join(SampleUser)
               .filter(Sample.state == 'open')
               .limit(4).all())
    data = [
        {'id': item[0].id,
         'name': item[0].name}
        for item in results
    ]
    return render_template('PA-student.html', data=data)

@app.route('/sample')
def sample():
    role = check_auth(session)
    if role == 'None':
        return redirect(url_for('auth'))
    return render_template('sample-0.html')

@app.route('/sample/<sample_id>')
def sample_check(sample_id):
    role = check_auth(session)
    if role == 'None':
        return redirect(url_for('auth'))
    query = Sample.query.get(sample_id)
    if query.state == 'close':
        rel = SampleUser.query.filter(SampleUser.userId == session['user_id'],
                                      SampleUser.relationship == 'creator',
                                      SampleUser.sampleId == query.id)
        if rel is None:
            return redirect(url_for('auth'))
    data = query.data.decode('utf-8')
    name = query.name
    return render_template('style-temp.html', body=data, name=name)


@app.route('/api/v1/sample', methods=['POST'])
def sample_api():
    role = check_auth(session)
    if role == 'None':
        return
    user_id = session.get('user_id')
    if request.method == 'POST':
        new_sample = Sample(data=request.data, name='test',
                            date_create=datetime.utcnow(), date_update=datetime.utcnow(),
                            state='close')
        db.session.add(new_sample)
        db.session.commit()
        new_realt = SampleUser(relationship='creator' ,userId=user_id, sampleId=new_sample.id)
        db.session.add(new_realt)
        db.session.commit()
        return 'привет, Евгений'

@app.route('/api/v1/exit', methods=['POST'])
def exit_user():
    session['user_id'] = None
    return redirect('auth')