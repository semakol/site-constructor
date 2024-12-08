import os

class Settings:
    DB_PASSWORD = '12345'
    DB_NAME = 'postgres'

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    SQLALCHEMY_DATABASE_URI = f'postgresql+psycopg2://postgres:{Settings.DB_PASSWORD}@localhost/{Settings.DB_NAME}'
    SQLALCHEMY_TRACK_MODIFICATIONS = False