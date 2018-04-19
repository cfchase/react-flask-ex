from flask import jsonify, g
from apiv1 import apiv1

@apiv1.route("/version", methods=['GET'])
def version():
    return jsonify({
        "version": "0.1"
    })