from fastapi import FastAPI
from routes.upload import router as upload_router

app = FastAPI()

@app.get("/")
def root():
    return {"message": "API da FURIA está rodando!"}

app.include_router(upload_router, prefix="/upload")
