import React from "react"
import { Cloud, CloudCheck, FileArrowDown, CaretRight } from 'phosphor-react'
import { useState } from "react";
import { Temas } from "../components/temas";



export function Home() {

    const [bases, setbases] = useState(
        [
            {
                "rota": false,
                "nome": 'Processamento CTS',
                "descricao": 'Desabilitado - Em breve'
            },
            {
                "rota": 'consolidadoDRE',
                "nome": 'Plano de Voo',
                "descricao": '10 Transações',

            }
        ]
    )

    return (

        <main className="">
            <div className="flex">
                <h1 className="m-8 text-4xl flex items-center rounded font-bold  gap-2 justify-center">
                    Bem - Vindo
                </h1>
            </div>
            <div className="max-h-96 w-full">

                <div className='gap-8 m-8 grid grid-cols-4'>
                    {
                        bases.map(data => (
                            <Temas data={data} />
                        ))
                    }
                </div>
            </div>

        </main>


    )
}