import React from "react"
import { useState } from "react";
import { Temas } from "../components/temas";
import { BookmarksSimple } from 'phosphor-react'

export function Home() {

    const [bases, setbases] = useState(
        [

            {
                "rota": '/planoDeVoo/themes/Plano De Voo',
                "nome": 'Plano de Voo',
                "descricao": '5 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
        ]
    )
    /* 
    
                            "rota": ['planoDeVoo', 'plano2', 'plano2'],
    
    
        let [value, setValue] = React.useState(localStorage.getItem("myValueInLocalStorage"));
        console.log(value)
    
        const onChange = event => {
            localStorage.setItem('myValueInLocalStorage', event.target.value);
    
            setValue(event.target.value);
        }; */

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

                {/*             <p>{value}</p>
 */}            </div>

        </main>


    )
}