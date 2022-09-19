import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function EntregaTerceirosUpload() {


    const [dados, setDados] = useState(

        [
            {
                "nomeBase": "Preço Frete Entrega Terceiros",
                "navigateBase": "/planoDeVoo/processamentoCts/FreteArquivo",
                "nome": '4 - Preço Frete Entrega Terceiros',
                "rotaApi": '/PlanoDeVoo/frete/upload/precoFreteEntregaTerceiros',
                "nomeArquivo": 'frete_entrega_terceiros_modelo.csv',
                "descricao": 'Descrição Frete Entrega Terceiros',
                "base": 'Frete',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts/FreteArquivo",
                "ativo": false,
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