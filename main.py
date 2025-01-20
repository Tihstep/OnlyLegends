from fastapi import FastAPI, Response
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os


app = FastAPI(title="Only Legend")

# Mount static files to a subdirectory like /static
app.mount('/static', StaticFiles(directory='static'), name='static')

# Кэш для медиафайлов
CACHE = {}

def load_media_to_cache():
    """Загружает медиафайлы в оперативную память при старте приложения."""
    files_to_cache = [
        "static/231030/1.mp4",
        "static/231030/2.MOV",
        "static/231030/3.MOV",
        "static/231030/4.MOV",
        "static/230801/1.MOV",
        "static/230801/2.MOV",
        "static/230801/3.MOV",
        "static/230801/4.MOV",
        "static/230801/5.MOV",
        "static/230901/1.MP4",
        "static/230901/2.MOV",
        "static/230901/3.MOV",
        "static/230901/4.MOV",
        "static/230901/5.MOV",
        "static/230901/6.MOV",
        "static/230901/7.MP4",
        "static/231025/1.mp4",
        "static/231025/2.mp4"
    ]
    for file_path in files_to_cache:
        if os.path.exists(file_path):
            with open(file_path, "rb") as f:
                CACHE[file_path] = f.read()
        else:
            print(f"Warning: {file_path} does not exist and will not be cached.")

@app.on_event("startup")
async def on_startup():
    """Действия при запуске приложения."""
    load_media_to_cache()
    print("Media files loaded into cache.")

@app.get('/')
def homepage():
    """Возвращает HTML-файл при переходе на корневой URL."""
    return FileResponse('static/test.html')

@app.get('/work-work')
def about():
    """Возвращает HTML-файл при переходе на корневой URL."""
    return FileResponse('static/index.html')

@app.get('/cached/{file_name:path}')
async def get_cached_file(file_name: str):
    """Отдает файл из кэша, если он там есть, иначе возвращает файл с диска."""
    file_path = f"static/{file_name}"
    if file_path in CACHE:
        ext = os.path.splitext(file_path)[1].lower()
        mime_type = {
            ".mp4": "video/mp4",
            ".mov": "video/quicktime",
            ".png": "image/png",
            ".webp": "image/webp"
        }.get(ext, "application/octet-stream")
        return Response(content=CACHE[file_path], media_type=mime_type)
    elif os.path.exists(file_path):
        return FileResponse(file_path)
    else:
        return Response(content="File not found", status_code=404)
