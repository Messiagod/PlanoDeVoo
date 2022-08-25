import React from "react"
import api from '../config/api';
import { useState } from "react"
import { Link } from 'react-router-dom'



export function DemandaFatorConversao() {

    const buttons =
            {
                "nome": 'Fator Conversão',
                "rotaApi": '/PlanoDeVoo/demandaFatorConversao',
                "descricao": 'Descrição Comissão',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/processamentoCts/demandaArquivo",
            }


    const [etapa1, setEtapa1] = useState(false)
    const [etapa2, setEtapa2] = useState(false)
    const [etapa3, setEtapa3] = useState(false)
    const [etapa4Error, setEtapa4Error] = useState(false)
    const [horaEtapa1, setHoraEtapa1] = useState('')
    const [horaEtapa2, setHoraEtapa2] = useState('')
    const [horaEtapa3, setHoraEtapa3] = useState('')
    const [horaEtapa4Error, setHoraEtapa4Error] = useState('')
    const [divRespostas, setDivRespostas] = useState(false)
    const [respostas, setRespostas] = useState('')
    const [button, setButton] = useState(true)
    const [process, setProcess] = useState(false)

    const uploadButton = async e => {
        setProcess(true)
        setButton(false)
        setEtapa1(true)
        const horaInicio = new Date().toLocaleTimeString();
        setHoraEtapa1(horaInicio)
        setTimeout(() => {
            const HoraInicioMeio = new Date().toLocaleTimeString();
            setHoraEtapa2(HoraInicioMeio)
            setEtapa2(true)
        }, 1000)

        await api.get(buttons.rotaApi)
            .then((response) => {
                console.log(response.data)
                setRespostas(response.data)
                const horaFim = new Date().toLocaleTimeString();
                setHoraEtapa3(horaFim)
                setEtapa3(true)
                setDivRespostas(true)
                setProcess(false)
            }).catch((err) => {
                if (err) {
                    setEtapa2(false)
                    setEtapa4Error(true)
                    setProcess(false)
                    const HoraInicioFimError = new Date().toLocaleTimeString();
                    setHoraEtapa4Error(HoraInicioFimError)
                } else {
                    setEtapa2(false)
                    setEtapa4Error(true)
                    const HoraInicioFimError = new Date().toLocaleTimeString();
                    setHoraEtapa4Error(HoraInicioFimError)
                }
            })
    }

    return (
        <div className="bg-black w-full h-full">
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
                        <Link to={buttons.navigate} className="text-3xl font-bold ">
                            {buttons.base}
                        </Link>
                        <span className="mx-4 h-auto text-3xl font-bold">/</span>
                    </li>

                    <li className="inline-flex items-center">
                        <a className='text-3xl font-bold underline'>
                            {buttons.nome}
                        </a>

                    </li>

                </ul>
            </div>
            <div className="rounded border border-gray-500 p-4 m-4">
                <header className="flex items-center justify-between ">
                    <span className=" text-blue-500 text-4xl font-bold flex items-center">
                        {buttons.nome}
                    </span>
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold ">
                        Botão
                    </span>
                </header>

                {button ? <div className="flex">
                    <div className="flex bg-black mt-10">
                        <button onClick={uploadButton} className='w-64 h-14 text-sm bg-blue-600   rounded font-bold uppercase   hover:bg-blue-700 transition-colors'>
                            Realizar Conversão
                        </button>
                    </div>
                </div> : null}

                {process ?
                    <div className="flex justify-center">
                        <button disabled type="button" class="mt-10 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                            <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                            </svg>
                            Carregando nova etapa...
                        </button>
                    </div> : null}

                {etapa1 ?

                    <ol class="items-center sm:flex m-12 ">
                        <li class="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="flex z-10 justify-center items-center w-8 h-8 bg-blue-500 rounded-full ring-0   sm:ring-8  shrink-0">
                                    <img src="https://img.icons8.com/color/48/000000/send-letter--v1.png" /></div>
                                <div className="hidden sm:flex w-full bg-green-300 h-0.5 "></div>
                            </div>
                            <div className="mt-5 sm:pr-8">
                                <h3 className="text-lg font-semibold text-white-900 ">Processo solicitado - Solicitação de Conversão</h3>
                                <p className="text-base font-normal text-white-500 "> <strong> Status: </strong> Enviando solicitação de conversão para banco de dados.....</p>
                                <time class="block mb-2 text-base font-normal leading-none text-gray-400">Processo Iniciado: {horaEtapa1}</time>

                            </div>
                        </li>

                        {etapa2 ?
                            <li class="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="flex z-10 justify-center items-centerw w-8 h-8 bg-blue-500 rounded-full ring-0   sm:ring-8  shrink-0">
                                        <img src="https://img.icons8.com/fluency/48/000000/database.png" />
                                    </div>
                                    <div className="hidden sm:flex w-full bg-green-400 h-0.5 "></div>
                                </div>
                                <div className="mt-5 sm:pr-8">
                                    <h3 className="text-lg font-semibold text-white-900 ">Banco de dados - Em andamento</h3>
                                    <p className="text-base font-normal text-white-500 "> <strong> Status: </strong> Conexão com banco de dados estabelecida, executando conversão.....</p>
                                    <time class="block mb-2 text-base font-normal leading-none text-gray-400">Processo Iniciado: {horaEtapa2}</time>
                                </div>
                            </li> : null}


                        {etapa3 ?
                            <li class="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="flex z-10 justify-center items-center w-8 h-8 bg-blue-500 rounded-full ring-0   sm:ring-8  shrink-0">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAErklEQVRoge2ZTUgcZxjH/8/MrAeJtFhXsn600hLd3VgLXbUUUtCQi8XFrGZNW1vooaQVDfReClsovZe6NubQk4eoUVd2TSmE4LEYhRYbbYT0kFiVbpQGF0V3Z54eojHdeXdnZmf0Ev+3fd6P+f3nfXbeL+BEJ3qxRU50Eh4NyztKppklrVViCmiAlwAPAacAgIEUmFaJ+L5GPC+p8p3AQsNsJBLR7D7bloGOWEe1pkl9DHwM4kqLzVdAPKyqcvTnromVQhkKMtA2GnYrrvS3DHwKoKjQh+9rD8Q/kax9HQ/GH1ttbNlAMNbxETP9AKDUalsDbTBT/3Tn5A0rjUwbCAxdcXncyUEQf2adzbyYaWg96b46//n1tJn6pgwE48Fizsg3AbTZojOvW6So4Xgwvm1UUTKqEBi64jpmeAB4nzPyVHg0bPj/MjTgcScHcbzwB7qwU7T3vVGlvCnUPhHqAfGwc0wFiPiDxMWpkZzFuQpCE6FX0sR/Aig7EjDz2iRFrcv1ic2ZQhni73CM8GUlxbmKSrWM/E2uQuEItI13VsmS9gD2JylTqj1diu7mevz6YAW37/0lqrJHinomHow/zC4QjoBC3I9jhlckCefOvIoLZ18XVStiVeoVFegMRCIRiYl7nAYVyedx43Lzm1CkQ4x336iGW5ROmvRJeDQsZ4d1BuYafn8HQJWzqHrVni5FV5MPsnSYxarGuHl3EcktwfxFXLnjSgeywzoDLGmtzqLq5a8o0735A/iltWTOdsR0PjumM0Ca1OgQp1D+ijJ0NZ4Vvvl88ADAgPEIAKi1C5lLduABgIjrsmN6A8Qes0B5vt06+TxuW/AAwICOTTQCp8x01uKtQW9rE3wet2Fdf0UZLjX5bcHvqyQ7YLiYE6nFW4MWbw1kiXCpyZ/XhN20MZLIQCpfA3dJMd6rfe3Z73wmjgB+KzugN8C0lq+H5NY2RmYXkNEODxRkidDd7Ed9VflRwoMAHZtoBJaNOlpe38To7B//M0FE6Ar4UF9VfmRpw0z3s2OiiWzOTGfL65sYv7sEVeNnMSJC6G2fEH587p7tnBex6QxIqnzHbIdLa0lhOone/OKq5RMTnURsOgOBhYZZAI/MdipKpwM5+bUB8DCw0DCfHdSt7mZmZrj2w7pygM6Z7XkjtYP1J1vwVbgh0dO37zA8AAxe7712OzsonAdUVY4C2LPS+/MjcQTwu1AyUVFBzj1xe6zjRzB9YfVJ/oqnu1Ancv45DSRCsauigpwzcXqv6CsAlikWVx87Db9BippzT5zTwC/dY5vMJHR9nGKm3nyHvnnXQtOdkzeYach5LJMijk53To7lq2K4mCvOKH0AYo5BmRQRT6deevKlUT1DA2PdYyopag+AW46QmVMCstY90zqTMapoajkdD8a31/4pvwjia/bZDEQcTb38b8jMyTRQwAVHe6zjMpgG4PypXZKZ+oxyPluWNzSJi1MjLiYvA4MAdq22F2gXwEA67fJahQdsXvK1x9srocr9YOoBUG2x+SMAw1Ay0UQw8XehDI5cs0YiEWnurd8aiek8AwEirmOgEof76xSYVgAss6TN7V+zzjtxzXqiE73o+g+dpfqwWeHHNgAAAABJRU5ErkJggg==" />                      </div>
                                    <div className="hidden sm:flex w-full bg-green-400 h-0.5 "></div>
                                </div>
                                <div className="mt-5     sm:pr-8">
                                    <h3 className="text-lg font-semibold text-white-900 ">Processo Concluido com sucesso!!!</h3>
                                    <p className="text-base font-normal text-white-500 "> <strong> Status: </strong> Concluido com sucesso.....</p>
                                    <time class="block mb-2 text-base font-normal leading-none text-gray-400">Processo Encerrado: {horaEtapa3}</time>
                                </div>
                            </li> : null}

                        {etapa4Error ?
                            <li class="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="flex z-10 justify-center items-center w-8 h-8 bg-red-500 rounded-full ring-0   sm:ring-8  shrink-0">
                                        <img src="https://img.icons8.com/color/48/000000/cancel--v1.png" />                      </div>
                                    <div className="hidden sm:flex w-full bg-red-500 h-0.5 "></div>
                                </div>
                                <div className="mt-5     sm:pr-8">
                                    <h3 className="text-lg font-semibold text-white-900 ">Erro ao realizar processo!!!</h3>
                                    <p className="text-base font-normal text-white-500 "> <strong> Status: </strong> Erro no banco de dados.....</p>
                                    <time class="block mb-2 text-base font-normal leading-none text-gray-400">Processo Encerrado: {horaEtapa3}</time>
                                </div>
                            </li> : null}


                    </ol> : null}

                {divRespostas ?
                    <div class="overflow-x-auto relative border border-gray-300 m-10">
                        <table class="w-full bg-gray-700 border-gray-600 border-b text-sm text-left text-gray-200">
                            <thead class="text-x uppercasebg-gray-700 text-blue-500 ">
                                <tr>
                                    <th scope="col" class="py-3 px-6 rounded-l-lg">
                                        Quantidade inserida
                                    </th>
                                    <th scope="col" class="py-3 px-6">
                                        Quantidade de Produto
                                    </th>
                                    <th scope="col" class="py-3 px-6 rounded-r-lg">
                                        Soma Peso KG
                                    </th>
                                    <th scope="col" class="py-3 px-6 rounded-r-lg">
                                        Soma Peso KG Líquido
                                    </th>
                                    <th scope="col" class="py-3 px-6 rounded-r-lg">
                                        Soma Peso Tonelada 
                                    </th>
                                    <th scope="col" class="py-3 px-6 rounded-r-lg">
                                        Soma Peso Tonelada Líquido
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-black  ">
                                    <th scope="row" class="py-4 px-6 font-medium whitespace-nowraptext-white ">
                                        {respostas.qd_inserida}
                                    </th>
                                    <td class="py-4 px-6">
                                        {respostas.qd_produto}
                                    </td>
                                    <td class="py-4 px-6">
                                        {respostas.soma_peso_kg}
                                    </td>
                                    <td class="py-4 px-6">
                                        {respostas.soma_peso_kg_liq}
                                    </td>
                                    <td class="py-4 px-6">
                                        {respostas.soma_peso_ton}
                                    </td>
                                    <td class="py-4 px-6">
                                        {respostas.soma_peso_ton_liq}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div> : null}

            </div>
        </div>
    )
}