import React from "react"
import { useState } from "react";
import { Temas } from "../components/temas";
import { BookmarksSimple } from 'phosphor-react'

export function Home() {

    const [bases, setbases] = useState(
        [
           
            {
                "rota": 'planoDeVoo',
                "nome": 'Plano de Voo',
                "descricao": '5 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
       
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