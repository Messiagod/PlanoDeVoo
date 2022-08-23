import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function CofinsUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nome": 'Cofins',
                "rotaApi": 'uploadCofins',
                "nomeArquivo": 'base_cofins_modelo.csv',
                "descricao": 'Descrição Cofins',
                "base": 'Cofins',
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