import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function FreteTransferenciaTerceirosUpload() {


    const [dados, setDados] = useState(

        [
            {
                "nomeBase": "Preço Frete Transferência Terceiros",
                "navigateBase": "/planoDeVoo/processamentoCts/FreteArquivo",
                "nome": '6 - Preço Frete Transferência Terceiros',
                "rotaApi": '/PlanoDeVoo/frete/upload/precoFreteTransferenciaTerceiros',
                "nomeArquivo": 'frete_transferencia_terceiros_modelo.csv',
                "descricao": 'Descrição Frete Transferência Terceiros',
                "base": 'Frete',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts/FreteArquivo",
                "ativo": false,
                "time": "Preço Frete Transferencia Terceiros Carga"
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