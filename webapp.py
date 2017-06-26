from flask import Flask, url_for

app = Flask(__name__) #__name__ = "__main__" if this is the file that was run.  Otherwise, it is the name of the file (ex. webapp)

@app.route("/")
def render_main():
    return app.send_static_file(url_for('static', filename='home.html'))
    
if __name__=="__main__":
    app.run(debug=False, port=54321)
