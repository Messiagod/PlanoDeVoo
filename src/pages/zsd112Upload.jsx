import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function Zsd112Upload() {


    const [dados, setDados] = useState(

        [
            {
                "nome": '1 - ZSD112',
                "rotaApi": '/PlanoDeVoo/uploadZSD112',
                "nomeArquivo": 'ZSD112_modelo.csv',
                "descricao": 'Descrição ZSD112',
                "base": 'Demanda',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts/demandaArquivo",
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