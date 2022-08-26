import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function VerbasUpload1() {


    const [dados, setDados] = useState(

        [
            {   
                "nomeBase": "Processamento CTS",
                "navigateBase": "/planoDeVoo/processamentoCts",
                "nome": 'Verbas',
                "rotaApi": 'uploadVerbas',
                "nomeArquivo": 'base_verbas_modelo.csv',
                "descricao": 'Descrição Verbas',
                "base": 'Processamento CTS',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts",
                "ativo": true,
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