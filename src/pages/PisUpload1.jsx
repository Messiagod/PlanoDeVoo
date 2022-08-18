import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"



export function PisUpload1() {

    const [dados, setDados] = useState(

        [
            {
                "nome": 'PIS',
                "rotaApi": 'uploadPis',
                "nomeArquivo": 'base_pis_modelo.csv',
                "descricao": 'Descrição PIS',
                "base": 'PIS',
                "ativo": true,
                "navigate": "/consolidadoDRE/pisArquivo"
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