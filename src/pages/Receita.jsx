import { useState } from "react";
import { Temas } from '../components/temas';
import { Link } from 'react-router-dom'
import { BookmarksSimple, FileArrowDown } from 'phosphor-react'


export function Receita() {

    const [arquivos, setArquivos] = useState(

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
                "icon":  <BookmarksSimple size={40} />
            },
            {/* calculoDeImpostosArquivoUpload1 */
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/impostosCalculo',
                "nome": '4 - Calculo de Impostos',
                "descricao": 'Botão para realizar calculo',
                "ativo": true,
                "icon":  <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/beneficiosCofinsExtract',
                "nome": '5 - Benefícios Cofins - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon":  <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/pisExtract',
                "nome": '6 - PIS - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon":  <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/icmsExtract',
                "nome": '7 - ICMS - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon":  <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/cofinsCalcExtract',
                "nome": '8 - Cofins Calc - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon":  <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/pisCalcExtract',
                "nome": '9 - PIS Calc - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon":  <FileArrowDown size={40} />
            },
            {
                "rota": '/planoDeVoo/processamentoCts/receitaArquivo/robCalcExtract',
                "nome": '10 - Rob Calc - Extração de Dados',
                "descricao": 'Extrair dados',
                "ativo": true,
                "icon":  <FileArrowDown size={40} />
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
                            Receita
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