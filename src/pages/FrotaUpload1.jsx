import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function FrotaUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nomeBase": "Processamento CTS",
                "navigateBase": "/planoDeVoo/processamentoCts",
                "nome": 'Frete Frota',
                "rotaApi": 'uploadFreteFrotaPropria',
                "nomeArquivo": 'base_frete_frota_propria_modelo.csv',
                "descricao": 'Descrição Frete Frota',
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