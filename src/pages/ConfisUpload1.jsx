import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function CofinsUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nome": 'Cofins',
                "rotaApi": 'uploadCOFINS',
                "arquivoVazio": false,
                "descricao": 'Descrição Cofins',
                "base": 'Cofins'
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