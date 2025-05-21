import { useEffect, useState } from 'react';
import { S3File } from '../DTOs/S3File'
import { getTempLinks } from '../Services/s3Service';

function S3List(){
    const [urls, setUrls] = useState<S3File[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTempLinks()
        .then(setUrls)
        .catch(err => console.log(err))
        .finally(() => setLoading(false));
    }, [])

    if (loading) return <p>Carregando ...</p>

    return (
        <div>
            <h2>Lista de arquivos S3</h2>
            <ul>
                {urls.map(user => {
                    return (
                        <li>
                            <a href={user.url} target='_blank'> {user.filename} </a>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default S3List;