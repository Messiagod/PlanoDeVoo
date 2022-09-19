import { useState } from "react";
import { Temas } from '../components/temas';
import { Link } from 'react-router-dom'
import { BookmarksSimple, FileArrowDown } from 'phosphor-react'

export function Demanda() {

    const [arquivos, setArquivos] = useState(

        [
            
            {
                "rota": '/planoDeVoo/processamentoCts/demandaArquivo/zsd112',
                "nome": '1 -  Hierarquia de Clientes (ZSD112)',
                "descricao": 'Carga de Dados',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/demandaArquivo/volumeDemandaVenda',
                "nome": '2 - Volume Demanda Vendas',
                "descricao": 'Botão SQL - Cópia',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/grandesContas',
                "nome": '3 - Grandes Contas (Kede)',
                "descricao": 'Carga de Dados',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/conversaoArquivo',
                "nome": '4 - Conversão',
                "descricao": '3 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/incotermArquivo',
                "nome": '5 - Incoterm',
                "descricao": '3 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/upArquivo',
                "nome": '6 - UP',
                "descricao": '3 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            
        ]
    )



    return (
        <main className="">
            <div className="flex m-9 gap-4">
                <ul className="flex items-center">
                    <li className="inline-flex items-center">
                        <Link to={"/"} className="text-gray-600 hover:text-blue-500">
                            <svg className="w-8 h-auto fill-current mx-2 text-gray-100" viewBox="0 0 24 24" ><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" /></svg>
                        </Link>

                        <span className="mx-4 h-auto text-3xl font-bold">/</span>
                    </li>

                    <li className="inline-flex items-center">
                        <Link to={"/planoDeVoo"} className="text-3xl font-bold">
                            Plano de Voo
                        </Link>
                        <span className="mx-4 h-auto text-3xl font-bold">/</span>

                    </li>

                    <li className="inline-flex items-center">
                        <a className="text-3xl font-bold underline">
                            Demanda
                        </a>

                    </li>

                </ul>
            </div>
            <div className="max-h-96 w-full">

                <div className='gap-8 m-8 grid grid-cols-4'>
                    {
                        arquivos.map(data => (
                            <Temas data={data} />
                        ))
                    }
                </div>
            </div>

        </main>
    )
}