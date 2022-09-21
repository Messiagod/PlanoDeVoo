import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function ConversaoUpload() {


    const [dados, setDados] = useState(

        [
            {
                "nome": '2 - Fator Conversão - Carga de Dados',
                "rotaApi": '/PlanoDeVoo/demanda/uploadFatorConversao',
                "nomeArquivo": 'fator_conversao_modelo.csv',
                "descricao": 'Descrição Fator Conversão',
                "base": 'Conversão',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts/conversaoArquivo",
                "ativo": true,
                "time": "Fator Conversao - Carga de Dados"
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