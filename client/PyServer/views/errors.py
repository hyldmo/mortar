from datetime import datetime
from flask import render_template
from PyServer import app


@app.errorhandler(404)
@app.errorhandler(403)
def forbidden(status):
    """Renders the home page."""
    return render_template(
        'errors.html',
        title=status,
        year=datetime.now().year,
    )