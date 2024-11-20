from flask import Flask, send_from_directory, abort, safe_join
import os

app = Flask(__name__)

# Define the path to your files directory
FILES_DIR = os.path.join(os.getcwd(), 'C:\VunderBAR')

@app.route('/templates/index.html')
def home():
    return '/index.html'

@app.route('C:\VunderBAR')
def get_file(filename):
    try:
        # Safely join the filename to the files directory
        file_path = safe_join(FILES_DIR, filename)
        return send_from_directory(FILES_DIR, filename, as_attachment=True)
    except (FileNotFoundError, IsADirectoryError, NotADirectoryError):
        abort(404)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
