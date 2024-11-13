import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = 'postgresql+psycopg2://postgres:12345@localhost/postgres'
    SQLALCHEMY_TRACK_MODIFICATIONS = False