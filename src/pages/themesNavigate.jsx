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
                "rota": '/planoDeVoo/copia/4 - Verbas Contratuais Pontuais',
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
                "rota": '/planoDeVoo/carga/1 -  Hierarquia de Clientes (ZSD112)',
                "nome": '1 -  Hierarquia de Clientes (ZSD112)',
                "descricao": 'Carga de Dados',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/copia/2 - Volume Demanda Vendas',
                "nome": '2 - Volume Demanda Vendas',
                "descricao": 'Botão SQL - Cópia',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/carga/3 - Grandes Contas (Kede)',
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
                "rota": '/planoDeVoo/extracao/1 -  Fator Conversão - Extração de Dados',
                "nome": '1 -  Fator Conversão - Extração de Dados',
                "descricao": 'Botão para extrair dados',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/carga/2 - Fator Conversão - Carga de Dados',
                "nome": '2 - Fator Conversão - Carga de Dados',
                "descricao": 'Botão para realizar carga de dados',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/copia/3 - Calculo Conversão',
                "nome": '3 - Calculo Conversão',
                "descricao": 'Botão para realizar calculo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
        ]
    /* INCOTERM */
    const incoterm =
        [
            {
                "rota": '/planoDeVoo/extracao/1 - Incoterm Extração de Dados',
                "nome": '1 - Incoterm Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/carga/2 - Incoterm Carga de Dados',
                "nome": '2 - Incoterm Carga de Dados',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/copia/3 - Calculo Incoterm',
                "nome": '3 - Calculo Incoterm',
                "descricao": 'Botão para realizar calculo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },

        ]
    /* UP */
    const up =
        [
            {
                "rota": '/planoDeVoo/extracao/1 - Definição UP Extração de Dados',
                "nome": '1 - Definição UP Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/carga/2 - Definição UP Carga de Dados',
                "nome": '2 - Definição UP Carga de Dados',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/copia/3 - Calculo UP',
                "nome": '3 - Calculo UP',
                "descricao": 'Botão para realizar calculo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
        ]
    /* RECEITA */
    const receita =
        [
            {
                "rota": '/planoDeVoo/copia/1 - Receita Líquida',
                "nome": '1 - Receita Líquida',
                "descricao": 'Botão SQL - Cópia',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/extracao/2 - Impostos - Extração de Dados',
                "nome": '2 - Impostos - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/carga/3 - Impostos - Carga de Dados',
                "nome": '3 - Impostos - Carga de Dados',
                "descricao": 'Carregar Arquivo',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '',
                "nome": '4 - Calculo de Impostos',
                "descricao": 'Botão para realizar calculo',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/extracao/5 - Benefícios Cofins - Extração de Dados',
                "nome": '5 - Benefícios Cofins - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/extracao/6 - PIS - Extração de Dados',
                "nome": '6 - PIS - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/extracao/7 - ICMS - Extração de Dados',
                "nome": '7 - ICMS - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/extracao/8 - Cofins Calculo - Extração de Dados',
                "nome": '8 - Cofins Calc - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/extracao/9 - PIS Calculo - Extração de Dados',
                "nome": '9 - PIS Calc - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/extracao/10 - ROB Calculo - Extração de Dados',
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
                "rota": '/planoDeVoo/extracao/1 - Preço Frete Entrega',
                "nome": '1 - Preço Frete Entrega',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/extracao/2 - Preço Frete Transferência',
                "nome": '2 - Preço Frete Transferência',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />

            },
            {
                "rota": '/planoDeVoo/carga/3 - Preço Frete Entrega Próprio',
                "nome": '3 - Preço Frete Entrega Próprio',
                "descricao": 'Carga de dados',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": '/planoDeVoo/carga/4 - Preço Frete Entrega Terceiros',
                "nome": '4 - Preço Frete Entrega Terceiros',
                "descricao": 'Carga Dados',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": '/planoDeVoo/carga/5 - Preço Frete Transferência Próprio',
                "nome": '5 - Preço Frete Transferência Próprio',
                "descricao": 'Carga Dados',
                "ativo": true,
                "icon": <FileArrowDown size={40} />

            },
            {
                "rota": '/planoDeVoo/carga/6 - Preço Frete Transferência Terceiros',
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
                "rota": '/planoDeVoo/themes/GGF',
                "nome": '1 - GGF',
                "descricao": '2 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/themes/Custos Insumos',
                "nome": '2 - Custos Insumos',
                "descricao": '2 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/themes/Base Hierarquia',
                "nome": '3 - Base Hierarquia',
                "descricao": '5 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/themes/Custos CD',
                "nome": '4 - Custos CD ',
                "descricao": '2 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />

            },
            {
                "rota": '/planoDeVoo/themes/Base QLP',
                "nome": '5 - Base QLP',
                "descricao": '5 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/themes/Base Multas Dist',
                "nome": '6 - Base Multas Dist',
                "descricao": '2 Itens',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
        ]
    /* GGF */
    const ggf =
        [
            {
                "rota": '/planoDeVoo/carga/GGF',
                "nome": '1 - GGF',
                "descricao": 'Carga de dados',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
            {
                "rota": '/planoDeVoo/copia/GGF',
                "nome": '2 - GGF',
                "descricao": 'Atualização de Indicadores',
                "ativo": true,
                "icon": <BookmarksSimple size={40} />
            },
        ]
    const custosInsumos = [
        {
            "rota": '/planoDeVoo/carga/Custos Insumos',
            "nome": '1 - Custos Insumos',
            "descricao": 'Carga de dados',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
        {
            "rota": '/planoDeVoo/copia/Custos Insumos',
            "nome": '2 - Custos Insumos',
            "descricao": 'Atualização de indicadores',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
    ]
    const baseHierarquia = [
        {
            "rota": '/planoDeVoo/carga/Base Hierarquia Oficial',
            "nome": '1 - Base Hierarquia Oficial',
            "descricao": 'Carga de dados',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
        {
            "rota": '/planoDeVoo/carga/Base Plano de Contas',
            "nome": '2 - Base Plano de Contas',
            "descricao": 'Carga de dados',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
        {
            "rota": '/planoDeVoo/carga/Base Hierarquia Geral',
            "nome": '3 - Base Hierarquia Geral',
            "descricao": 'Carga de dados',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
        {
            "rota": '/planoDeVoo/carga/Depara N5 Regionais',
            "nome": '4 - Depara N5 Regionais',
            "descricao": 'Carga de dados',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
        {
            "rota": '/planoDeVoo/carga/Opex',
            "nome": '5 - Opex',
            "descricao": 'Carga de dados',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
    ]
    const custosCd = [
        {
            "rota": '/planoDeVoo/copia/Custos CD Proprio',
            "nome": '1 - Custos CD Próprio',
            "descricao": 'Atualização de Indicadores',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />

        },
        {
            "rota": '/planoDeVoo/copia/Custos CD Terceiros',
            "nome": '2 - Custos CD Terceiros',
            "descricao": 'Atualização de Indicadores',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />

        },
    ]
    const baseQlp = [
        {
            "rota": '/planoDeVoo/carga/Base QLP Promotores PBI',
            "nome": '1 - Base QLP Promotores PBI',
            "descricao": 'Carga de dados',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
        {
            "rota": '/planoDeVoo/copia/Calculo de Lideranca Backoffice',
            "nome": '2 - Calculo de Liderança',
            "descricao": 'Backoffice',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
        {
            "rota": '/planoDeVoo/copia/Calculo de Lideranca Campo',
            "nome": '3 - Calculo de Liderança',
            "descricao": 'Campo',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
        {
            "rota": '/planoDeVoo/copia/Calculo de Lideranca Merchandising',
            "nome": '4 - Calculo de Liderança Merchandising',
            "descricao": 'Merchandising',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
        {
            "rota": '/planoDeVoo/copia/Calculo de Material',
            "nome": '5 - Calculo de Material',
            "descricao": 'Merchandising',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
    ]
    const baseMultasDist = [
        {
            "rota": '/planoDeVoo/carga/Base Multas Dist',
            "nome": '1 - Base Multas Dist',
            "descricao": 'Carga de dados',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
        },
        {
            "rota": '/planoDeVoo/copia/Base Multas Dist',
            "nome": '2 - Multas Logísticas',
            "descricao": 'Cálculo de Multas',
            "ativo": true,
            "icon": <BookmarksSimple size={40} />
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
                            <Link to={"/planoDeVoo/themes/Demanda"} className="text-3xl font-bold underline">
                                Demanda
                            </Link>
                        </li> : params.slug === "Receita" ?
                            <li className="inline-flex items-center">
                                <Link to={"/planoDeVoo/themes/Receita"} className="text-3xl font-bold underline">
                                    Receita
                                </Link>
                            </li> : params.slug === "Frete" ?
                                <Link to={"/planoDeVoo/themes/Frete"} className="text-3xl font-bold underline">
                                    Frete
                                </Link> : params.slug === "Conversao" ?
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
                                                </div> : params.slug === "GGF" ?
                                                <div className='gap-8 m-8 grid grid-cols-4'>
                                                    {
                                                        ggf.map(data => (
                                                            <Temas data={data} />
                                                        ))
                                                    }
                                                </div> : params.slug === "Custos Insumos" ?
                                                <div className='gap-8 m-8 grid grid-cols-4'>
                                                    {
                                                        custosInsumos.map(data => (
                                                            <Temas data={data} />
                                                        ))
                                                    }
                                                </div> : params.slug === "Base Hierarquia" ?
                                                <div className='gap-8 m-8 grid grid-cols-4'>
                                                    {
                                                        baseHierarquia.map(data => (
                                                            <Temas data={data} />
                                                        ))
                                                    }
                                                </div> :  params.slug === "Custos CD" ?
                                                <div className='gap-8 m-8 grid grid-cols-4'>
                                                    {
                                                        custosCd.map(data => (
                                                            <Temas data={data} />
                                                        ))
                                                    }
                                                </div> : params.slug === "Base QLP" ?
                                                <div className='gap-8 m-8 grid grid-cols-4'>
                                                    {
                                                        baseQlp.map(data => (
                                                            <Temas data={data} />
                                                        ))
                                                    }
                                                </div> : params.slug === "Base Multas Dist" ?
                                                <div className='gap-8 m-8 grid grid-cols-4'>
                                                    {
                                                        baseMultasDist.map(data => (
                                                            <Temas data={data} />
                                                        ))
                                                    }
                                                </div> : null
                }
            </div>
           
        </main>
    )
}


/*  {
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

           }, */