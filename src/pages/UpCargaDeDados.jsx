import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function UpCargaDeDados() {


    const [dados, setDados] = useState(

        [
            {
                "nome": '2 - Definição UP Carga de Dados',
                "nomeBase": "UP",
                "rotaApi": '/PlanoDeVoo/uploadGrandesContas',
                "nomeArquivo": 'grandes_contas_modelo.csv',
                "descricao": 'Descrição UP',
                "base": 'UP',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts/demandaArquivo",
                "navigateBase": "/planoDeVoo/processamentoCts/upArquivo",
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