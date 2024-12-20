from app import db

class Images(db.Model):
    __tablename__ = 'images'

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.LargeBinary, nullable=False)

    rel = db.relationship('Sample', backref='image', lazy=True)

    def __repr__(self):
        return f'<Image {self.id}>'

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(128), unique=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    role = db.Column(db.String(128), nullable=True)
    first_name = db.Column(db.String(128), nullable=True)
    second_name = db.Column(db.String(128), nullable=True)

    rel = db.relationship('SampleUser', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.username}>'

class Sample(db.Model):
    __tablename__ = 'samples'

    id = db.Column(db.Integer, primary_key=True)
    data = db.Column(db.LargeBinary, nullable=False)
    name = db.Column(db.String(128), nullable=False)
    state = db.Column(db.String(16), nullable=True)
    date_create = db.Column(db.DateTime, nullable=True)
    date_update = db.Column(db.DateTime, nullable=True)

    imageId = db.Column(db.Integer, db.ForeignKey('images.id'), nullable=True)
    rel = db.relationship('SampleUser', backref='sample', lazy=True)

    def __repr__(self):
        return f'<Sample {self.name}>'

class SampleUser(db.Model):
    __tablename__ = 'sampleUser'

    id = db.Column(db.Integer, primary_key=True)
    relationship = db.Column(db.String(128), nullable=False)

    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    sampleId = db.Column(db.Integer, db.ForeignKey('samples.id'), nullable=False)


    def __repr__(self):
        return f'<SampleUser {self.id}>'
