import sqlite3
import json
from flask_cors import CORS
from flask import Flask, request, jsonify


# getting all the data into the list page.
app = Flask('knowledgeExplorerApi')
CORS(app)


@app.route('/')
def index():
    conn = sqlite3.connect('kbe.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    records = cursor.execute('select * from knowledge_base')
    # return json.dumps([list (row) for row in records.fetchall()])

    # return json.dumps(records.fetchall())


# this function is giving rows and column and dict is or zip is combining it all.
    columns = ['id', 'title', 'desc']
    records = [dict(zip(columns, row)) for row in records.fetchall()]
    # print(records)
    return json.dumps(records)


# Creating the data in Create page
@app.route('/create', methods=['POST'])
def create():
    conn = sqlite3.connect('kbe.db')
    data = request.get_json()
    title = data['title']
    desc = data['desc']
    cursor = conn.cursor()
    cursor.execute(
        'create table if not exists knowledge_base(id integer primary key autoincrement, title text, desc text)')
    cursor.execute(
        'insert into knowledge_base(title, desc) values ("{}", "{}")'.format(title, desc))
    conn.commit()
    return title

# getting information from a title ID in to the Detail page


@app.route('/detail/<id>')
def detail(id):
    conn = sqlite3.connect('kbe.db')  # connecting the database
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    records = cursor.execute(
        'select * from knowledge_base where id = {}'.format(id))
    # this function is giving rows and column and dict is or zip is combining it all.
    columns = ['id', 'title', 'desc']
    return json.dumps(dict(zip(columns, records.fetchone())))


# Searhing the item from Search Bar
@app.route('/search/<query>')
def search(query):
    conn = sqlite3.connect('kbe.db')
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    # parameter and matches to populte like things
    records = cursor.execute(
        'select * from knowledge_base where title like "%{}%" or desc like "%{}%" '.format(query, query))
    columns = ['id', 'title', 'desc']
    # return json.dumps(dict(zip(columns, records.fetchall())))

    records = [dict(zip(columns, row)) for row in records.fetchall()]
    return json.dumps(records)

# ---------------------------------------------

# Deleting an item from a list


@app.route('/delete/<id>')
def delete(id):
    conn = sqlite3.connect('kbe.db')  # connecting the database
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    executionStr = 'delete from knowledge_base where id = {}'.format(int(id))
    cursor.execute(executionStr)
    # print(executionStr)
    conn.commit()
    # records = cursor.execute('select * from knowledge_base')

    # columns = ['id', 'title', 'desc']
    # records = [dict(zip(columns, row)) for row in records.fetchall()]
    # # print(records)
    # # e = "yo"
    # # response ={
    # # 'status':False,
    # # 'message':str(e),
    # # 'plots':[]
    # # }
    # # print(response)
    # return json.dumps(records)
    # response = {'status':'done'}
    return "Done"

# Updating list_Edit page


@app.route('/list_Edit', methods=['POST'])
def list_Edit_Update():
    conn = sqlite3.connect('kbe.db')
    data = request.get_json()
    title = data['title']
    desc = data['desc']
    id = data['id']
    cursor = conn.cursor(z)
    cursor.execute(
        'update  knowledge_base set title= "{}", desc="{}" where id = "{}"'.format(title, desc, id))
    conn.commit()
    return title



# see the example website.
# need a session management.
# to implement the logic see the react router page.


app.run()
