import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function CofinsUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nomeBase": "Processamento CTS",
                "navigateBase": "/planoDeVoo/processamentoCts",
                "nome": 'Cofins',
                "rotaApi": 'uploadCofins',
                "nomeArquivo": 'base_cofins_modelo.csv',
                "descricao": 'Descrição Cofins',
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