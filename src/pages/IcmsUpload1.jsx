import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function IcmsUpload1() {

    const [dados, setDados] = useState(

        [
            {
                "nome": 'ICMS',
                "rotaApi": 'uploadICMS',
                "arquivoVazio": false,
                "descricao": 'Descrição ICMS',
                "base": 'ICMS'
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