import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function PisUpload1() {

    const [dados, setDados] = useState(

        [
            {
                "nome": 'PIS',
                "rotaApi": 'uploadPIS',
                "arquivoVazio": false,
                "descricao": 'Descrição PIS',
                "base": 'PIS'
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