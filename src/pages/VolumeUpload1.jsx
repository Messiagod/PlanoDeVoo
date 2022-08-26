import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function VolumeUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nomeBase": "Processamento CTS",
                "navigateBase": "/planoDeVoo/processamentoCts",
                "nome": 'Volume',
                "rotaApi": 'uploadVolume',
                "nomeArquivo": 'base_volume_modelo.csv',
                "descricao": 'Descrição Volume',
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