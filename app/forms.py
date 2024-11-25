from flask_wtf import FlaskForm
from wtforms import StringField, EmailField, SubmitField, RadioField
from wtforms.fields.simple import PasswordField
from wtforms.validators import DataRequired, Email
import wtforms.validators

class AuthForm(FlaskForm):
    username = StringField('Логин', validators=[DataRequired()])
    password = PasswordField('Пароль', validators=[DataRequired()])
    submit = SubmitField('Войти')

class RegForm(FlaskForm):
    name = StringField('Имя', validators=[DataRequired()])
    subName = StringField('Фамилия', validators=[DataRequired()])
    username = StringField('Логин', validators=[DataRequired()])
    password = PasswordField('Пароль', validators=[DataRequired()])
    repPassword = PasswordField('Повторите Пароль', validators=[DataRequired()])
    role = RadioField('Роль',
                      choices=[('editor', ' Я редактор '), ('intern', ' Я стажёр ')],
                      validators=[DataRequired()])
    submit = SubmitField('Зарегистрироваться')