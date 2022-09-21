import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function IncotermCargaDeDados() {


    const [dados, setDados] = useState(

        [
            {
                "nome": '2 - Incoterm Carga de Dados',
                "nomeBase": "Incoterm",
                "rotaApi": '/PlanoDeVoo/uploadIncoterms',
                "nomeArquivo": 'Incoterm_modelo.csv',
                "descricao": 'Descrição Incoterm',
                "base": 'Demanda',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts/demandaArquivo",
                "navigateBase": "/planoDeVoo/processamentoCts/incotermArquivo",
                "ativo": true,
                "time": "Incoterm Carga de dados"

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