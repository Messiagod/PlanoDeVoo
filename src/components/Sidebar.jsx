import { Transacoes } from "./Transacoes";
import { useState } from "react";



export function Sidebar(){

    const [arquivo, setArquivo] = useState(
        {
          "id": 2324325325,
          "nome": 'matheus',
          "liberado": true,
          "tipo": 'csv',
          "date": '22/07/2022'
        },
        {
          "id": 523235,
          "nome": 'fernanda',
          "liberado": true,
          "tipo": 'csv',
          "date": '22/07/2022'
        },
       {
          "id": 52332,
          "nome": 'ivan',
          "liberado": true,
          "tipo": 'csv',
          "date": '22/07/2022'
        }
      )
    
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Transações Disponiveis 
            </span>
            <div className="flex flex-col gap-8">
                <Transacoes data={arquivo}/>             
            </div>
        </aside>
    )
}