import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function GrandesContasUpload() {


    const [dados, setDados] = useState(

        [
            {
                "nome": '3 - Grandes Contas (Kede)',
                "rotaApi": '/PlanoDeVoo/uploadGrandesContas',
                "nomeArquivo": 'grandes_contas_modelo.csv',
                "descricao": 'Descrição Grandes Contas (Kede)',
                "base": 'Demanda',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo",
                "ativo": true,
                "time": "Grandes Contas Carga Dados"
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