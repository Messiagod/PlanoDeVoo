import { Temas } from '../components/temas';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BookmarksSimple, FileArrowDown } from 'phosphor-react'

export function ThemesNavigate() {
    const params = useParams();
    /* PLANO DE VOO */
    const planoDeVoo =
        [
            {
                "rota": '/planoDeVoo/themes/Demanda',
                "nome": '1 - Demanda',
                "descricao": '6 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />


            },
            {
                "rota": '/planoDeVoo/themes/Receita',
                "nome": '2 - Receita',
                "descricao": '10 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": '/planoDeVoo/themes/Frete',
                "nome": '3 - Frete',
                "descricao": '8 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/investimentoVendas',
                "nome": '4 - Verbas Contratuais Pontuais',
                "descricao": 'Botão SQL - Cópia',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/themes/Processamento CTS',
                "nome": '5 - Processamento CTS',
                "descricao": '11 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
        ]
    /* DEMANDA */
    const demanda =
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
                "rota": '/planoDeVoo/themes/Conversao',
                "nome": '4 - Conversão',
                "descricao": '3 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/themes/Incoterm',
                "nome": '5 - Incoterm',
                "descricao": '3 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/themes/Up',
                "nome": '6 - UP',
                "descricao": '3 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
        ]
    /* CONVERSÃO */
    const conversao =
        [
            {
                "rota": '/planoDeVoo/demanda/conversao/extracao',
                "nome": '1 -  Fator Conversão - Extração de Dados',
                "descricao": 'Botão para extrair dados',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/demanda/conversao/carga',
                "nome": '2 - Fator Conversão - Carga de Dados',
                "descricao": 'Botão para realizar carga de dados',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/demandaArquivo/calculoConversao',
                "nome": '3 - Calculo',
                "descricao": 'Botão para realizar calculo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
        ]
    /* INCOTERM */
    const incoterm =
        [
            {
                "rota": '/planoDeVoo/processamentoCts/demandaArquivo/incotermExtracaoDeDados',
                "nome": '1 - Incoterm Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/demandaArquivo/incotermCargaDeDados',
                "nome": '2 - Incoterm Carga de Dados',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/demandaArquivo/incotermCalculo',
                "nome": '3 - Calculo Incoterms',
                "descricao": 'Botão para realizar calculo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },

        ]
    /* UP */
    const up =
        [
            {
                "rota": '/planoDeVoo/processamentoCts/demandaArquivo/upExtracao',
                "nome": '1 - Definição UP Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/demandaArquivo/upCarga',
                "nome": '2 - Definição UP Carga de Dados',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },

            // BOTÕES

            {
                "rota": '/planoDeVoo/processamentoCts/demandaArquivo/upCalculo',
                "nome": '3 -Calculo UP',
                "descricao": 'Botão para realizar calculo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
        ]
    /* RECEITA */
    const receita =
        [
            {/* calculoDeImpostosArquivoUpload1 */
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/receitaLiquida',
                "nome": '1 - Receita Líquida',
                "descricao": 'Botão SQL - Cópia',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {   /* impostosExtraçãoDeDadosArquivoUpload1 */
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/impostosExtracao',
                "nome": '2 - Impostos - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {/* impostosCargaDeDadosUpload1 */
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/impostosCarga',
                "nome": '3 - Impostos - Carga de Dados',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {/* calculoDeImpostosArquivoUpload1 */
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/impostosCalculo',
                "nome": '4 - Calculo de Impostos',
                "descricao": 'Botão para realizar calculo',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/beneficiosCofinsExtract',
                "nome": '5 - Benefícios Cofins - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/pisExtract',
                "nome": '6 - PIS - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/icmsExtract',
                "nome": '7 - ICMS - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/cofinsCalcExtract',
                "nome": '8 - Cofins Calc - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/pisCalcExtract',
                "nome": '9 - PIS Calc - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/robCalcExtract',
                "nome": '10 - Rob Calc - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
        ]
    /* FRETE */
    const frete =

        [
            {
                "rota": '',
                "nome": '1 - Preço Frete Entrega',
                "descricao": 'Extrair dados',
                "ativo": false,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '',
                "nome": '2 - Preço Frete Transferência ',
                "descricao": 'Extrair dados',
                "ativo": false,
                "icon": <FileArrowDown size={40} />

            },
            {
                "rota": '/planoDeVoo/processamentoCts/FreteArquivo/entregaProprioCarga',
                "nome": '3 - Preço Frete Entrega Próprio',
                "descricao": 'Carga de dados',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": '/planoDeVoo/processamentoCts/FreteArquivo/entregaTerceirosCarga',
                "nome": '4 - Preço Frete Entrega Terceiros',
                "descricao": 'Carga Dados',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": '/planoDeVoo/processamentoCts/FreteArquivo/transferenciaProprioCarga',
                "nome": '5 - Preço Frete Transferência Próprio',
                "descricao": 'Carga Dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />

            },
            {
                "rota": '/planoDeVoo/processamentoCts/FreteArquivo/entregaTransferenciaTerceiros',
                "nome": '6 - Preço Frete Transferência Terceiros',
                "descricao": 'Carga Dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />

            }
        ]
    /* PROCESSAMENTO CTS */
    const processamentoCts =
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
                "rota": '',
                "nome": '6 - Receita',
                "descricao": 'Carregar Arquivo',
                "ativo": false,
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
                "icon": <BookmarksSimple size={40} />,

            },

        ]

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
                        <Link to={"/planoDeVoo/themes/Plano De Voo"} className="text-3xl font-bold">
                            Plano de Voo
                        </Link>
                        <span className="mx-4 h-auto text-3xl font-bold">/</span>
                    </li>
                    {params.slug === "Demanda" ?
                        <li className="inline-flex items-center">
                            <a className="text-3xl font-bold underline">
                                Demanda
                            </a>
                        </li> : params.slug === "Receita" ?
                            <li className="inline-flex items-center">
                                <a className="text-3xl font-bold underline">
                                    Receita
                                </a>
                            </li> : params.slug === "Frete" ?
                                <a className="text-3xl font-bold underline">
                                    Frete
                                </a> : params.slug === "Conversao" ?
                                    <>
                                        <li className="inline-flex items-center">
                                            <Link to={"/planoDeVoo/themes/Demanda"} className="text-3xl font-bold">
                                                Demanda
                                            </Link>
                                            <span className="mx-4 h-auto text-3xl font-bold">/</span>
                                        </li>
                                        <li className="inline-flex items-center">
                                            <a className="text-3xl font-bold underline">
                                                4 - Conversão
                                            </a>
                                        </li>
                                    </> : params.slug === "Incoterm" ?
                                        <>
                                            <li className="inline-flex items-center">
                                                <Link to={"/planoDeVoo/themes/Demanda"} className="text-3xl font-bold">
                                                    Demanda
                                                </Link>
                                                <span className="mx-4 h-auto text-3xl font-bold">/</span>
                                            </li>
                                            <li className="inline-flex items-center">
                                                <a className="text-3xl font-bold underline">
                                                    5 - Incoterm
                                                </a>
                                            </li>
                                        </> : params.slug === "Up" ?
                                            <>
                                                <li className="inline-flex items-center">
                                                    <Link to={"/planoDeVoo/themes/Demanda"} className="text-3xl font-bold">
                                                        Demanda
                                                    </Link>
                                                    <span className="mx-4 h-auto text-3xl font-bold">/</span>
                                                </li>
                                                <li className="inline-flex items-center">
                                                    <a className="text-3xl font-bold underline">
                                                        6 - Up
                                                    </a>
                                                </li>
                                            </> : params.slug === "Processamento CTS" ?
                                                <li className="inline-flex items-center">
                                                    <a className="text-3xl font-bold underline">
                                                        Processamento CTS
                                                    </a>
                                                </li> : null
                    }
                </ul>
            </div>
            <div className="max-h-96 w-full">

                {params.slug === "Plano De Voo" ?
                    <div className='gap-8 m-8 grid grid-cols-4'>
                        {
                            planoDeVoo.map(data => (
                                <Temas data={data} />
                            ))
                        }
                    </div> : params.slug === "Demanda" ?
                        <div className='gap-8 m-8 grid grid-cols-4'>
                            {
                                demanda.map(data => (
                                    <Temas data={data} />
                                ))
                            }
                        </div> : params.slug === "Receita" ?
                            <div className='gap-8 m-8 grid grid-cols-4'>
                                {
                                    receita.map(data => (
                                        <Temas data={data} />
                                    ))
                                }
                            </div> : params.slug === "Frete" ?
                                <div className='gap-8 m-8 grid grid-cols-4'>
                                    {
                                        frete.map(data => (
                                            <Temas data={data} />
                                        ))
                                    }
                                </div> : params.slug === "Conversao" ?
                                    <div className='gap-8 m-8 grid grid-cols-4'>
                                        {
                                            conversao.map(data => (
                                                <Temas data={data} />
                                            ))
                                        }
                                    </div> : params.slug === "Incoterm" ?
                                        <div className='gap-8 m-8 grid grid-cols-4'>
                                            {
                                                incoterm.map(data => (
                                                    <Temas data={data} />
                                                ))
                                            }
                                        </div> : params.slug === "Up" ?
                                            <div className='gap-8 m-8 grid grid-cols-4'>
                                                {
                                                    up.map(data => (
                                                        <Temas data={data} />
                                                    ))
                                                }
                                            </div> : params.slug === "Processamento CTS" ?
                                                <div className='gap-8 m-8 grid grid-cols-4'>
                                                    {
                                                        processamentoCts.map(data => (
                                                            <Temas data={data} />
                                                        ))
                                                    }
                                                </div> : null
                }

            </div>

        </main>
    )
}