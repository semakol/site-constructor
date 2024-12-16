import bcrypt
from app.models import *

def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password.decode('utf-8')


def check_password(password: str, hashed_password: str) -> bool:
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8'))

def check_auth(session):
    user = session.get('user_id')
    if not user:
        return 'None'
    q_user = User.query.get(user)
    if not q_user:
        return 'None'
    return q_user.role


