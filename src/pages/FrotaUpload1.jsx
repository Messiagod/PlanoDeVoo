import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function FrotaUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nome": 'Frete Frota',
                "rotaApi": 'uploadFreteFrotaPropria',
                "nomeArquivo": 'base_frete_frota_propria_modelo.csv',
                "descricao": 'Descrição Frete Frota',
                "base": 'Frete Frota',
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