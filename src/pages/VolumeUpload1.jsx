import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function VolumeUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nome": 'Volume',
                "rotaApi": 'uploadVolume',
                "nomeArquivo": 'base_volume_modelo.csv',
                "descricao": 'Descrição Volume',
                "base": 'Volume',
                "ativo": true,
                "navigate": "/consolidadoDRE/volumeArquivo"
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