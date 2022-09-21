import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function EntregaProprioUpload() {


    const [dados, setDados] = useState(

        [
            {
                "nomeBase": "Frete",
                "navigateBase": "/planoDeVoo/processamentoCts/FreteArquivo",
                "nome": '3 - Preço Frete Entrega Próprio',
                "rotaApi": 'PlanoDeVoo/frete/upload/precoFreteEntregaProprio',
                "nomeArquivo": 'frete_entrega_proprio_modelo.csv',
                "descricao": 'Descrição Entrega Próprio',
                "base": 'Frete',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts/FreteArquivo",
                "ativo": false,
                "time": "Preço Frete Entrega Proprio Carga dados"
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