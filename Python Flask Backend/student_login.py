from flask import Flask, render_template, request, redirect, url_for, flash, session
import mysql.connector
from werkzeug.security import check_password_hash

app = Flask(__name__)
app.secret_key = 'project_seon321'

# MySQL Database connection
def get_db_connection():
    conn = mysql.connector.connect(
        host="localhost",  # XAMPP default MySQL host
        user="root",  # XAMPP default MySQL user (replace with your username if you changed it)
        password="",  # XAMPP default MySQL password (replace with your password if you changed it)
        database="database_student_id"  # Database name
    )
    return conn

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Check if username exists
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute('SELECT * FROM users WHERE username = %s', (username,))
        user = cursor.fetchone()
        conn.close()

        if user is None:
            flash('Username not found!', 'error')
        elif check_password_hash(user['password'], password):
            session['user_id'] = user['id']
            flash('Login successful!', 'success')
            return redirect(url_for('dashboard'))
        else:
            flash('Incorrect password!', 'error')

    return render_template('login.html')


# Add this route to your Flask app
@app.route('/dashboard')
def dashboard():
    if 'user_id' in session:
        return 'Welcome to your dashboard!'
    else:
        return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
