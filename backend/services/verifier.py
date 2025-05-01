def verify_document(file_path: str):
    if "identity" in file_path.lower():
        return "Documentos de identidade válidos"
    else:
        return "Documento inválido"
