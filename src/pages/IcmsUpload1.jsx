import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function IcmsUpload1() {

    const [dados, setDados] = useState(

        [
            {
                "nome": 'ICMS',
                "rotaApi": 'uploadIcms',
                "nomeArquivo": 'base_icms_modelo.csv',
                "descricao": 'Descrição ICMS',
                "base": 'ICMS',
                "ativo": true,
                "navigate": "/planoDeVoo/processamentoCts"
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