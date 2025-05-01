import os
import uuid
from fastapi import UploadFile

async def save_file(file: UploadFile):
    unique_filename = f"{uuid.uuid4()}.pdf"  
    file_location = f"uploads/{unique_filename}"
    
    with open(file_location, "wb") as f:
        content = await file.read()
        f.write(content)
    
    return file_location, file.filename
