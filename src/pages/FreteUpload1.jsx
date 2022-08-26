import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function FreteUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nomeBase": "Processamento CTS",
                "navigateBase": "/planoDeVoo/processamentoCts",
                "nome": 'Frete Terceiros',
                "rotaApi": 'uploadFreteTerceiros',
                "nomeArquivo": 'base_frete_terceiros_modelo.csv',
                "descricao": 'Descrição Frete Terceiros',
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