from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

# Importar os dados da linha do tempo da filosofia
from filosofia import timeline_data

app = Flask(__name__, static_folder='./static', static_url_path='/')
CORS(app)

# Rota de teste
@app.route('/test')
def test_route():
    return 'Hello from Flask!'

# Rota para a linha do tempo da filosofia
@app.route('/api/filosofia/timeline')
def filosofia_timeline():
    return jsonify(timeline_data)

# Rota para servir o index.html do frontend
@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

# Rota para servir outros arquivos estáticos (CSS, JS, etc.)
@app.route('/<path:filename>')
def serve_static(filename):
    return send_from_directory(app.static_folder, filename)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
