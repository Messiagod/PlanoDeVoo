import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function CpvUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nome": 'Cpv',
                "rotaApi": 'uploadCpv',
                "nomeArquivo": 'base_cpv_modelo.csv',
                "descricao": 'Descrição CPV',
                "base": 'CPV',
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