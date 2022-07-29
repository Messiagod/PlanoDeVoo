import { useState } from "react";
import { Temas } from '../components/temas';


export function ConsolidadoDRE() {

    const [transacao, setTransacao] = useState(

        [
            {
                "rota": 'cofinsArquivo',
                "nome": 'Cofins',
                "descricao": '1 Arquivo'
            },
            {
                "rota": 'icmsArquivo',
                "nome": 'ICMS',
                "descricao": '1 Arquivo'
            },
            {
                "rota": 'pisArquivo',
                "nome": 'PIS',
                "descricao": '1 Arquivo'
            },
            {
                "rota": false,
                "nome": 'CPV',
                "descricao": 'Desabilitado'
            },
            {
                "rota": false,
                "nome": 'Fretes',
                "descricao": 'Desabilitado'
            },
            {
                "rota": false,
                "nome": 'Frota',
                "descricao": 'Desabilitado'
            },
            {
                "rota": false,
                "nome": 'Comissão',
                "descricao": 'Desabilitado'
            },
         
            {
                "rota": false,
                "nome": 'Receita',
                "descricao": 'Desabilitado'
            }, 
            {
                "rota": false,
                "nome": 'Verbas',
                "descricao": 'Desabilitado'
            },
            {
                "rota": false,
                "nome": 'Volume',
                "descricao": 'Desabilitado'
            },
        ]
    )



    return (
        <main className="">
            <div className="flex">
                <h1 className="m-8 text-4xl flex items-center rounded font-bold  gap-2 justify-center">
                   Consolidado DRE
                </h1>
            </div>
            <div className="max-h-96 w-full">
                <div className='gap-8 m-8 grid grid-cols-4'>
                    {
                        transacao.map(data => (
                            <Temas data={data} />
                        ))
                    }
                </div>
            </div>

        </main>
    )
}