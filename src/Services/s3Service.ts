import { S3File } from "../DTOs/S3File";

const API_URL = 'https://ys9wnblidj.execute-api.sa-east-1.amazonaws.com/GetS3BucketAvailableObjects'

export async function getTempLinks(): Promise<S3File[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error('Erro ao buscar arquivos');
    }

    return await response.json();
}