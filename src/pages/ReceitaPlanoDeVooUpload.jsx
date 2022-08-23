import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function ReceitaPlanoDeVooUpload() {


    const [dados, setDados] = useState(

        [
            {
                "nome": 'Receita',
                "rotaApi": 'uploadReceita',
                "nomeArquivo": 'base_receita_modelo.csv',
                "descricao": 'Descrição Receita',
                "base": 'Receita',
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