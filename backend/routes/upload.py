from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import JSONResponse
import asyncio
from pydantic import BaseModel
from utils.storage import save_file
from services.verifier import verify_document
from models.fan import Fan
from utils.database import db

router = APIRouter()

ALLOWED_EXTENSIONS = {'pdf', 'jpg', 'jpeg', 'png', 'docx'}
MAX_FILE_SIZE = 5 * 1024 * 1024  # 5MB

def allowed_file(filename: str):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@router.post("/upload")
async def upload_documents(files: list[UploadFile] = File(...)):
    if not files:
        raise HTTPException(status_code=400, detail="Nenhum arquivo enviado.")

    saved_files = []
    original_filenames = []

    for file in files:
        if not allowed_file(file.filename):
            raise HTTPException(status_code=400, detail=f"Tipo de arquivo {file.filename} não permitido.")
        
        file_size = len(await file.read())
        await file.seek(0)  

        if file_size > MAX_FILE_SIZE:
            raise HTTPException(status_code=400, detail=f"Arquivo {file.filename} excede o tamanho máximo permitido de 5MB.")

        file_location, original_filename = save_file(file)
        saved_files.append(file_location)
        original_filenames.append(original_filename)

    verification_results = []
    for saved_file, original_filename in zip(saved_files, original_filenames):
        await asyncio.sleep(2)
        result = verify_document(original_filename)

        fan = Fan(
            nome="Daniel Teste",
            email="daniel@email.com",
            tipo_documento="identidade",
            status_verificacao=result
        )

        insert_result = db.torcedores.insert_one(fan.dict())
        fan_id = str(insert_result.inserted_id)

        verification_results.append({
            "file": saved_file,
            "original_name": original_filename,
            "status": result,
            "fan_id": fan_id
        })

    return JSONResponse(content={"message": "Arquivos enviados e verificados com sucesso", "results": verification_results})
