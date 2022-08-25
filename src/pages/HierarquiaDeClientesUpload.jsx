import React from "react"
import { Upload } from "../components/Upload"
import { useState } from "react"


export function HierarquiaUpload1() {


    const [dados, setDados] = useState(

        [
            {
                "nome": 'Hierarquia de Clientes',
                "rotaApi": 'uploadHierarquiaDeClientes',
                "nomeArquivo": 'base_hierarquia_clientes_modelo.csv',
                "descricao": 'Descrição Hierarquia de Clientes',
                "base": 'Hierarquia de Clientes',
                "ativo": true,
                "navigate": "/consolidadoDRE/hierarquiaDeClientesArquivo"
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