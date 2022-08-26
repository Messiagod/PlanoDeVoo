import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"



export function PisUpload1() {

    const [dados, setDados] = useState(

        [
            {
                "nomeBase": "Processamento CTS",
                "navigateBase": "/planoDeVoo/processamentoCts",
                "nome": 'PIS',
                "rotaApi": 'uploadPis',
                "nomeArquivo": 'base_pis_modelo.csv',
                "descricao": 'Descrição PIS',
                "base": 'Processamento CTS',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts",
                "ativo": true,
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