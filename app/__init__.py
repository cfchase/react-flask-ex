from flask import Flask
from app.config import Config


def create_app(app_name):
    app = Flask(app_name, static_folder='ui/build')

    app.config.from_object(Config)

    from app.apiv1 import apiv1
    app.register_blueprint(apiv1, url_prefix='/api/v1')

    return app
