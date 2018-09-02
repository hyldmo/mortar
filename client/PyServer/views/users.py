from PyServer import app
from PyServer.mongodb import db
from PyServer.form import UserForm
from flask import abort, redirect, render_template, request, url_for, session, flash, session
from Model.user import User
from datetime import datetime
from passlib.hash import sha256_crypt
import util


@app.route('/login/', methods=['GET', 'POST'])
def login():
    if 'username' in session:
        return redirect('/user/' + session['username'])
    user = User()
    form = UserForm(obj=user)

    if request.method == 'POST':
        if form.validate():
            error = None
            user.name = form.username.data

            if form.newUser.data:
                try:
                    user.password = sha256_crypt.encrypt(form.password.data)
                    db.users.insert_one(util.dictify(user))
                except:
                    error = 'User already exists'
            else:
                try:
                    pw = db.users.find_one({'name': user.name})['password']
                    if not sha256_crypt.verify(form.password.data, pw):
                        raise
                except:
                    error = 'Wrong password or user doesn\'t exist'

            if not error:
                session['username'] = user.name
                return redirect('/user/' + user.name)
            else:
                flash(error)

    return render_template(
        'login.html',
        title='Login',
        year=datetime.now().year,
        form=form,
    )


@app.route('/logout')
def logout():
    # remove the username from the session if it's there
    session.pop('username', None)
    return redirect(url_for('home'))


@app.route('/user/<name>', methods=['GET', 'DELETE'])
def userProfile(name):
    if request.method == 'DELETE':
        if 'username' in session and (session['username'] == 'admin' or session['username'] == name):
            result = db.users.delete_one({"name": name})
            if result.deleted_count > 0:
                return 'deleted user ' + str(name)
            else:
                return abort(410)
        else:
            return abort(403)

    user = db.users.find_one({"name": name})

    return render_template(
        'profile.html',
        title=user['name'] + '\'s Profile',
        year=datetime.now().year,
    )


@app.route('/user/', methods=['GET'])
def users():
    if 'username' in session and session['username'] == 'admin':

        return render_template(
            'users.html',
            title='All users',
            year=datetime.now().year,
            users=db.users.find({})
        )
    else:
        abort(403)
