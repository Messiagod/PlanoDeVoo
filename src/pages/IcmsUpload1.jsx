import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function IcmsUpload1() {

    const [dados, setDados] = useState(

        [
            {
                "nomeBase": "Processamento CTS",
                "navigateBase": "/planoDeVoo/processamentoCts",
                "nome": 'ICMS',
                "rotaApi": 'uploadIcms',
                "nomeArquivo": 'base_icms_modelo.csv',
                "descricao": 'Descrição ICMS',
                "base": 'Processamento CTS',
                "baseOne": "Plano de Voo",
                "baseNavigate": "/planoDeVoo",
                "navigate": "/planoDeVoo/processamentoCts",
                "ativo": true,
            }
        ]

    )

    return (
        
        <main className="flex flex-1">
            {
                dados.map(data => (
                    <Upload data={data} />
                ))
            }
        </main>


    )
}