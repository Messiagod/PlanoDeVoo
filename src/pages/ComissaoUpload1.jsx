import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function ComissaoUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nome": 'Comissão',
                "rotaApi": 'uploadComissao',
                "nomeArquivo": 'base_comissao_modelo.csv',
                "descricao": 'Descrição Comissão',
                "base": 'Comissão',
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