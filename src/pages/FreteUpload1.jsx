import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function FreteUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nome": 'Frete Terceiros',
                "rotaApi": 'uploadFreteTerceiros',
                "nomeArquivo": 'base_frete_terceiros_modelo.csv',
                "descricao": 'Descrição Frete Terceiros',
                "base": 'Frete Terceiros',
                "ativo": true,
                "navigate": "/consolidadoDRE/freteArquivo"
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