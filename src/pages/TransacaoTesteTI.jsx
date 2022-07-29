import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"

export function UploadArquivoTI() {
    const [dados, setDados] = useState(

        [
            {
                "nome": 'Teste TI',
                "rotaApi": 'apiRotaTI',
                "arquivoCheio": 'youtube.com',
                "arquivoVazio": 'google.com',
                "descricao": 'Descrição TI',
                "base": 'TI'
            }
        ]

    )
    return (

        <main className="flex flex-1">
            {
                dados.map(data => (
                    <Upload data={data} />
                ))
            }
        </main>


    )
}