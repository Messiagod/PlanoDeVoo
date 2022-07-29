import { Transacoes } from "./Transacoes";
import { useState } from "react";



export function Sidebar(){

    const [arquivo, setArquivo] = useState(
        [{
          "rota": 'TransacaoTeste-TI',
          "nome": 'Transação - Teste TI - Sistemas',
          "liberado": true,
          "tipo": 'CSV',
          "date": 'Sexta • 22 de julho'
        },
        {
          "rota": 'Financeiro1',
          "nome": 'Financeiro1',
          "liberado": false,
          "tipo": 'CSV',
          "date": 'Sexta • 22 de julho'
        },
        {
          "rota": 'Financeiro2',
          "nome": 'Financeiro2',
          "liberado": false,
          "tipo": 'CSV',
          "date": 'Sexta • 22 de julho'
        },
        
      ]
      )
    
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                  Financeiro 
            </span>
            <div className="flex flex-col gap-8">
              {
                arquivo.map(data =>(
                  <Transacoes data={data}/>             
                ))
              }
            </div>
        </aside>
    )
}