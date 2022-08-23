import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function VerbasUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nome": 'Verbas',
                "rotaApi": 'uploadVerbas',
                "nomeArquivo": 'base_verbas_modelo.csv',
                "descricao": 'Descrição Verbas',
                "base": 'Verbas',
                "ativo": true,
                "navigate": "/planoDeVoo/processamentoCts"
            }
        ]

    )

    return (
        <>
        <main className="flex flex-1">
            {
                dados.map(data => (
                    <Upload data={data} />
                    ))
                }
        </main>
                </>


    )
}