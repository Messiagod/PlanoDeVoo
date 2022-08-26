import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function HierarquiaUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nomeBase": "Processamento CTS",
                "navigateBase": "/planoDeVoo/processamentoCts",
                "nome": 'Hierarquia de Clientes',
                "rotaApi": 'uploadHierarquiaDeClientes',
                "nomeArquivo": 'base_hierarquia_clientes_modelo.csv',
                "descricao": 'Descrição Hierarquia de Clientes',
                "base": 'Processamento CTS',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts",
                "ativo": true
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