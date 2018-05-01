import os
from flask import send_from_directory
from app import create_app

app = create_app(__name__)


# Serve UI static files
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path == "":
        return send_from_directory('ui/build', 'index.html')
    else:
        if os.path.exists("ui/build/" + path):
            return send_from_directory('ui/build', path)
        else:
            return send_from_directory('ui/build', 'index.html')


if __name__ == "__main__":
    app.run()


@app.shell_context_processor
def make_shell_context():
    return {}