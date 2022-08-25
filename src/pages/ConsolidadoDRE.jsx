import { useState } from "react";
import { Temas } from '../components/temas';
import { Link } from 'react-router-dom'
import { BookmarksSimple } from 'phosphor-react'



export function PlanoDeVoo() {

    const [transacao, setTransacao] = useState(

        [
            /* {
                "rota": 'cofinsArquivo',
                "nome": 'Cofins',
                "descricao": '1 Arquivo',
                "ativo": true
            },
            {
                "rota": 'icmsArquivo',
                "nome": 'ICMS',
                "descricao": '1 Arquivo',
                "ativo": true
            },
            {
                "rota": 'pisArquivo',
                "nome": 'PIS',
                "descricao": '1 Arquivo',
                "ativo": true
            },
            {
                "rota": 'freteArquivo',
                "nome": 'Frete Terceiros ',
                "descricao": '1 Arquivo',
                "ativo": true
            },
            {
                "rota": 'comissaoArquivo',
                "nome": 'Comissão',
                "descricao": '1 Arquivo',
                "ativo": true
            },
            {
                "rota": 'receitaArquivo',
                "nome": 'Receita',
                "descricao": '1 Arquivo',
                "ativo": true
            },
            {
                "rota": 'verbasArquivo',
                "nome": 'Verbas',
                "descricao": '1 Arquivo',
                "ativo": true
            },
            {
                "rota": 'volumeArquivo',
                "nome": 'Volume',
                "descricao": '1 Arquivo',
                "ativo": true
            },
            {
                "rota": "cpvArquivo",
                "nome": 'CPV',
                "descricao": '1 Arquivo',
                "ativo": true
            },
            {
                "rota": "frotaArquivo",
                "nome": 'Frete Frota',
                "descricao": '1 Arquivo',
                "ativo": true
            },
            {
                "rota": "hierarquiaDeClientesArquivo",
                "nome": 'Hierarquia de Clientes',
                "descricao": '1 Arquivo',
                "ativo": true
            }, */
            // ATUALIZAÇÃO
            {
                "rota": 'processamentoCts/demandaArquivo',
                "nome": '1 - Demanda',
                "descricao": '8 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />


            },
            {
                "rota": 'processamentoCts/FreteArquivo',
                "nome": '2 - Frete',
                "descricao": '8 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": 'investimentoVendas',
                "nome": '3 - Investimento Vendas',
                "descricao": '2 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": 'processamentoCts/receitaArquivo',
                "nome": '4 - Receita',
                "descricao": '4 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": 'processamentoCts',
                "nome": '5 - Processamento CTS',
                "descricao": '11 Itens',
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
                        <a className="text-3xl font-bold underline">
                            Plano de Voo
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