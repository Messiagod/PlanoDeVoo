import { useState } from "react";
import { Temas } from '../components/temas';
import { Link } from 'react-router-dom'
import { BookmarksSimple } from 'phosphor-react'



export function ProcessamentoCTS() {

    const [transacao, setTransacao] = useState(

        [
            {
                "rota": 'cofinsArquivo',
                "nome": '1 - Cofins',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": 'icmsArquivo',
                "nome": '2 - ICMS',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": 'pisArquivo',
                "nome": '3- PIS',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": 'freteArquivoUpload',
                "nome": '4- Frete Terceiros ',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": 'comissaoArquivo',
                "nome": '5 - Comissão',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": 'receitaArquivoUpload',
                "nome": '6 - Receita',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": 'verbasArquivo',
                "nome": '7 - Verbas',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": 'volumeArquivo',
                "nome": '8 - Volume',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": "cpvArquivo",
                "nome": '9 - CPV',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": "frotaArquivo",
                "nome": '10 - Frete Frota',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": "hierarquiaDeClientesArquivo",
                "nome": '11 - Hierarquia de Clientes',
                "descricao": 'Carregar Arquivo',
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
                        <Link to={"/planoDeVoo"} className="text-3xl font-bold ">
                            Plano de Voo
                        </Link>
                    </li>

                    <span className="mx-4 h-auto text-3xl font-bold">/</span>


                    <li className="inline-flex items-center">
                        <a className="text-3xl font-bold underline">
                            Processamento CTS
                        </a>
                    </li>

                </ul>
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