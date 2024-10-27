from fastapi import FastAPI
from starlette.responses import JSONResponse, HTMLResponse

app = FastAPI()

@app.get("/")
def get_all_students():
    return HTMLResponse()