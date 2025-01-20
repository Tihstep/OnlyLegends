from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI(title="Only Legend")

# Mount static files to a subdirectory like /static
app.mount('/static', StaticFiles(directory='static'), name='static')

@app.get('/')
def homepage():
    """Возвращает HTML-файл при переходе на корневой URL."""
    return FileResponse('static/test.html')

@app.get('/work-work')
def about():
    """Возвращает HTML-файл при переходе на корневой URL."""
    return FileResponse('static/index.html')
