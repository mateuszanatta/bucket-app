import { S3File } from "../DTOs/S3File";

const AVAILABLE_OBJECTS_ENDPOINT = process.env.REACT_APP_AVAILABLE_OBJECTS_ENDPOINT;

export async function getTempLinks(): Promise<S3File[]> {
    if (!AVAILABLE_OBJECTS_ENDPOINT) {
        throw new Error('REACT_APP_API_URL não está definida');
    }
    
    const response = await fetch(AVAILABLE_OBJECTS_ENDPOINT);

    if (!response.ok) {
        throw new Error('Erro ao buscar arquivos');
    }

    return await response.json();
}