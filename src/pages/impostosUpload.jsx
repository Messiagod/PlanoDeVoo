import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function ImpostosUpload() {


    const [dados, setDados] = useState(

        [
            {
                "nome": '3 - Impostos - Carga de Dados',
                "rotaApi": '/PlanoDeVoo/impostos/uploadImpostos',
                "nomeArquivo": 'impostos_modelo.csv',
                "descricao": 'Descrição Impostos',
                "base": 'Receita',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts/receitaArquivo",
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