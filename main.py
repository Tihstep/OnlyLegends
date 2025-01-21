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
    files_to_cache = ['static/230701/6.mp4',
 'static/230701/1.mp4',
 'static/230701/2.mp4',
 'static/230701/6.MOV',
 'static/230701/2.MOV',
 'static/231025/1.mp4',
 'static/231025/2.mp4',
 'static/231025/3.mp4',
 'static/231014/2.MOV',
 'static/231014/1.MOV',
 'static/221023/1.mp4',
 'static/221023/2.mp4',
 'static/230308/1.MOV',
 'static/230901/4.MOV',
 'static/230901/5.MOV',
 'static/230901/6.MOV',
 'static/230901/2.MOV',
 'static/230901/3.MOV',
 'static/230323/1.mp4',
 'static/230324/1.mp4',
 'static/230324/2.mp4',
 'static/230324/3.mp4',
 'static/231030/1.mp4',
 'static/231030/4.MOV',
 'static/231030/2.MOV',
 'static/231030/3.MOV',
 'static/220912/1.mp4',
 'static/220912/2.mp4',
 'static/221001/1.mp4',
 'static/221001/2.mp4',
 'static/210913/1.mp4',
 'static/210913/2.mp4',
 'static/210913/3.mp4',
 'static/221203/4.mp4',
 'static/221203/5.mp4',
 'static/221203/1.mp4',
 'static/221203/2.mp4',
 'static/221203/3.MOV',
 'static/241030/1.MOV',
 'static/220204/7.mp4',
 'static/220204/6.mp4',
 'static/220204/4.mp4',
 'static/220204/5.mp4',
 'static/220204/1.mp4',
 'static/220204/2.mp4',
 'static/220204/3.mp4',
 'static/241001/4.mp4',
 'static/241001/1.mp4',
 'static/241001/2.mp4',
 'static/241001/3.mp4',
 'static/220129-220203/1.mp4',
 'static/220129-220203/2.mp4',
 'static/220129-220203/3.mp4',
 'static/230205/4.mp4',
 'static/230205/1.mp4',
 'static/230205/2.mp4',
 'static/230205/3.mp4',
 'static/240501/1.mp4',
 'static/240501/2.MOV',
 'static/220212/1.mp4',
 'static/220212/2.mp4',
 'static/220212/3.mp4',
 'static/240902/4.MOV',
 'static/240902/2.MOV',
 'static/240902/3.MOV',
 'static/240902/1.MOV',
 'static/240417/2.MOV',
 'static/240417/1.MOV',
 'static/221225/4.mp4',
 'static/221225/1.mp4',
 'static/221225/2.mp4',
 'static/221225/3.mp4',
 'static/221029/4.mp4',
 'static/221029/5.mp4',
 'static/221029/1.mp4',
 'static/221029/2.mp4',
 'static/221029/3.mp4',
 'static/220911/1.mp4',
 'static/220911/2.mp4',
 'static/240601/2.MOV',
 'static/240601/3.MOV',
 'static/240601/1.MOV',
 'static/200918/2.mp4',
 'static/200918/1.MOV',
 'static/240115/2.MOV',
 'static/240115/1.MOV',
 'static/221124/1.mp4',
 'static/230801/4.MOV',
 'static/230801/5.MOV',
 'static/230801/6.MOV',
 'static/230801/2.MOV',
 'static/230801/3.MOV',
 'static/230801/1.MOV',
 'static/240512/2.MOV',
 'static/240512/3.MOV',
 'static/240512/1.MOV']
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

@app.get('/cache')
def get_cached_file():
    len_ = len(CACHE.keys())
    return {len_ : str(list(CACHE.keys()))}

