from datetime import datetime
from werkzeug.utils import redirect
from bs4 import BeautifulSoup as bs

from app import app
from flask import render_template, flash, make_response, session, url_for, request
from app.forms import AuthForm, RegForm
from app.models import *
from app.common import *


@app.route('/')
def index():
    return redirect(url_for('auth'))


@app.route('/auth', methods=['POST', 'GET'])
def auth():
    role = check_auth(session)
    if role == 'editor':
        return redirect(url_for('PA_redactor'))
    elif role == 'intern':
        return redirect(url_for('PA_student'))
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
            role = check_auth(session)
            if role == 'editor':
                return redirect(url_for('PA_redactor'))
            elif role == 'intern':
                return redirect(url_for('PA_student'))
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
            query_user = User.query.filter(User.username == username).all()
            if len(query_user) != 0:
                flash('Пользователь уже существует')
                return redirect(url_for('registration'))
            new_user = User(username=username, password_hash=hash_password(password),
                            role=role, first_name=first_name, second_name=second_name)
            db.session.add(new_user)
            db.session.commit()
            session['user_id'] = new_user.id
            if role == 'editor':
                return redirect(url_for('PA_redactor'))
            elif role == 'intern':
                return redirect(url_for('PA_student'))
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
               .filter(SampleUser.userId == session['user_id'], SampleUser.relationship == 'record')
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
    if role != 'editor':
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
    if role == 'intern':
        soup = bs(data, "html.parser")
        hidden = soup.find_all(class_=['hidden', 'setting', 'content', 'trash', 'on-off'])
        # record = soup.find('button', class_='button-a')
        # if record:
        #     record['onclick'] = f'Record({sample_id})'
        for i in hidden:
            i.decompose()
        data = soup.prettify()
        return render_template('style-temp-2.html', body=data, name=name)
    else:
        return render_template('style-temp.html', body=data, name=name)


@app.route('/api/v1/sample', methods=['POST'])
def sample_api():
    role = check_auth(session)
    if role == 'None':
        return
    user_id = session.get('user_id')
    if request.method == 'POST':
        data = request.data
        soap = bs(data, "html.parser")
        title = soap.find('section', class_='header').find('div', class_='titles').find('h1', class_='title-1')
        new_sample = Sample(data=request.data,
                            date_create=datetime.utcnow(), date_update=datetime.utcnow(),
                            state='close', name=title.text if title else 'test')
        db.session.add(new_sample)
        db.session.commit()
        new_realt = SampleUser(relationship='creator' ,userId=user_id, sampleId=new_sample.id)
        db.session.add(new_realt)
        db.session.commit()
        return url_for('sample') + '/' + str(new_sample.id)

@app.route('/api/v1/exit', methods=['POST'])
def exit_user():
    session['user_id'] = None
    return ''

@app.route('/api/v1/open-sample/<id>', methods=['POST'])
def open_sample(id):
    role = check_auth(session)
    if role != 'editor':
        return
    sample_query = Sample.query.get(id)
    if not sample_query:
        return
    sample_query.state = 'open'
    db.session.commit()
    return 'true'

@app.route('/api/v1/image-save', methods=['POST'])
def image_save():
    # role = check_auth(session)
    # if role != 'editor':
    #     return
    data = request.data
    new_image = Images(image=data)
    db.session.add(new_image)
    db.session.commit()
    return f'/api/v1/image/{new_image.id}'

@app.route('/api/v1/image/id')
def image_get(id):
    image = Images.query.get(id)
    if not image:
        return None
    return f'data:image/png;base64,{image.image}'

@app.route('/api/v1/record/<id>', methods=['POST'])
def record_sample(id):
    role = check_auth(session)
    if role == 'None':
        return
    new_rel = SampleUser(relationship='record', userId=session['user_id'], sampleId=id)
    db.session.add(new_rel)
    db.session.commit()
    return ''