import os

def verify_document(file_path: str):
    file_name, file_extension = os.path.splitext(file_path)
    
    valid_extensions = ['.jpg', '.jpeg', '.png', '.pdf']
    if file_extension.lower() not in valid_extensions:
        return "Extensão inválida. Apenas JPG, PNG e PDF são permitidos."
    
    if "identidade" in file_name.lower():
        return "Documento de identidade válido"
    elif "comprovante_residencia" in file_name.lower():
        return "Comprovante de residência válido"
    else:
        return "Documento não reconhecido."
