import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function ReceitaPlanoDeVooUpload() {


    const [dados, setDados] = useState(

        [
            {
                "nomeBase": "Processamento CTS",
                "navigateBase": "/planoDeVoo/processamentoCts",
                "nome": 'Receita',
                "rotaApi": 'uploadReceita',
                "nomeArquivo": 'base_receita_modelo.csv',
                "descricao": 'Descrição Receita',
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