import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function FreteTransferenciaProprioUpload() {


    const [dados, setDados] = useState(

        [
            {
                "nomeBase": "Preço Frete Transferência Próprio",
                "navigateBase": "/planoDeVoo/processamentoCts/FreteArquivo",
                "nome": '5 - Preço Frete Transferência Próprio',
                "rotaApi": '/PlanoDeVoo/frete/upload/precoFreteEntregaTerceiros',
                "nomeArquivo": 'frete_transferencia_proprio_modelo.csv',
                "descricao": 'Descrição Frete Transferência Próprio',
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