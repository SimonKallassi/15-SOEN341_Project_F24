from flask import Flask, render_template, request, redirect, url_for, flash, session 
import mysql.connector
from werkzeug.security import check_password_hash, generate_password_hash


app = Flask(__name__)
app.secret_key = 'project_seon321'

if __name__ == "__main__":
    app.run(debug=True)


# def get_db_connection():
#     conn = mysql.connector.connect(
#         host="localhost",  
#         user="root",  
#         password="",  
#         database="student_database_id"  
#     )
#     return conn

@app.route('/signup', methods=['GET', 'POST'])
def signup():
    print("hello")

    return render_template('signup.html')
