import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function ConversaoUpload() {


    const [dados, setDados] = useState(

        [
            {
                "nome": '2 - Fator Conversão - Carga de Dados',
                "rotaApi": '/PlanoDeVoo/uploadIncoterms',
                "nomeArquivo": 'fator_conversao_modelo.csv',
                "descricao": 'Descrição Fator Conversão',
                "base": 'Conversao',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts/conversaoArquivo",
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