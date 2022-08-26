import React from 'react';
import { useState } from "react"
import { Link } from 'react-router-dom'
import api from '../config/api';
import { FileArrowDown } from 'phosphor-react'



export function ExtracDate({data}) {

    const [loading, setLoading] = useState(false)
    const [button, setButton] = useState(true)
    const [horaInicio1, setHoraInicio1] = useState('')
    const [horaFim2, setHoraInicio2] = useState('')
    const [horaFim3, setHoraFim3] = useState('')
    const [etapa1, setEtapa1] = useState(false)
    const [etapa2, setEtapa2] = useState(false)
    const [etapa3, setEtapa3] = useState(false)
    const [etapa4Error, setEtapa4Error] = useState(false)
    const [respostas, setRespostas] = useState('')
    const [divDownload, setDivDownload] = useState(false)

    const extractButton = async e => {
        setLoading(true)
        setButton(false)
        setEtapa1(true)
        const horaInicio = new Date().toLocaleTimeString();
        setEtapa2(true)
        setHoraInicio1(horaInicio)
        setHoraInicio2(horaInicio)

        await api.get(data.rotaApi)
            .then((response) => {
                setRespostas(response.data)
                const horaFim = new Date().toLocaleTimeString();
                setEtapa3(true)
                setHoraFim3(horaFim)
                setLoading(false)
                setDivDownload(true)
            }).catch((err) => {
                if (err) {
                    setEtapa4Error(true)
                } else {
                    alert("Conexão failed")
                }
            })
    }

     const downloadArquivo = `http://brampwsapp001:3000/PlanoDeVoo/demandaIncotermsExtracaoDados/${respostas.fileName}`

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
                        <Link to={data.navigate} className="text-3xl font-bold ">
                            {data.base}
                        </Link>
                        <span className="mx-4 h-auto text-3xl font-bold">/</span>
                    </li>

                    <li className="inline-flex items-center">
                        <Link to={"/planoDeVoo/processamentoCts/incotermArquivo"} className="text-3xl font-bold ">
                            Incoterm
                        </Link>
                        <span className="mx-4 h-auto text-3xl font-bold">/</span>
                    </li>

                    <li className="inline-flex items-center">
                        <a className='text-3xl font-bold underline'>
                            {data.nome}
                        </a>
                    </li>
                    

                </ul>
            </div>
            <div className="rounded border border-gray-500 p-4 m-4">
                <header className="flex items-center justify-between ">
                    <span className=" text-blue-500 text-4xl font-bold flex items-center">
                        {data.nome}
                    </span>
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold ">
                        Extração
                    </span>
                </header>

                <div className="flex">
                    {button ? <div className="flex bg-black mt-10">
                        <button onClick={extractButton} className='w-64 h-14 text-sm bg-blue-600   rounded font-bold uppercase   hover:bg-blue-700 transition-colors'>
                            Gerar Arquivo
                        </button>
                    </div> : null}
                </div>

                {loading ? <div className="flex justify-center">
                    <button disabled type="button" class="mt-10 text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                        <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                        </svg>
                        Gerando Extração.....
                    </button>
                </div> : null}

                <ol class="items-center sm:flex m-12 ">
                    {etapa1 ?
                        <li class="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="flex z-10 justify-center items-center w-8 h-8 bg-blue-500 rounded-full ring-0   sm:ring-8  shrink-0">
                                    <img src="https://img.icons8.com/color/48/000000/send-letter--v1.png" />                          </div>
                                <div className="hidden sm:flex w-full bg-green-300 h-0.5 "></div>
                            </div>
                            <div className="mt-5 sm:pr-8">
                                <h3 className="text-lg font-semibold text-white-900 ">Processo solicitado - Extração de dados</h3>
                                <p className="text-base font-normal text-white-500 "> <strong> Status: </strong> Enviando solicitação de extração para banco de dados.....</p>
                                <time class="block mb-2 text-base font-normal leading-none text-gray-400">Processo Iniciado: {horaInicio1}</time>

                            </div>
                        </li> : null}

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
                                <p className="text-base font-normal text-white-500 "> <strong> Status: </strong> Conexão estabelecida, gerando extração.....</p>
                                <time class="block mb-2 text-base font-normal leading-none text-gray-400">Processo Iniciado: {horaFim2}</time>
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
                                <time class="block mb-2 text-base font-normal leading-none text-gray-400">Processo Encerrado: {horaFim3}</time>
                            </div>
                        </li>
                        : null}

                    {etapa4Error ?
                        <li class="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="flex z-10 justify-center items-center w-8 h-8 bg-red-500 rounded-full ring-0   sm:ring-8  shrink-0">
                                    <img src="https://img.icons8.com/color/48/000000/cancel--v1.png" />                      </div>
                                <div className="hidden sm:flex w-full bg-red-500 h-0.5 "></div>
                            </div>
                            <div className="mt-5     sm:pr-8">
                                <h3 className="text-lg font-semibold text-white-900 ">Erro ao realizar processo!!!</h3>
                                <p className="text-base font-normal text-white-500 "> <strong> Status: </strong> Falha na extração.....</p>
                                <time class="block mb-2 text-base font-normal leading-none text-gray-400">Processo Encerrado!!</time>
                            </div>
                        </li> : null}
                </ol>

               {divDownload ?
                <div className='grid grid-cols-3'>
                    <a href={downloadArquivo} className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
                        <div className='bg-blue-700  p-6 flex items-center'>
                            <FileArrowDown size={40} />
                        </div>
                        <div className='py-6 leading-relaxed'>
                            <strong className='text-2xl'>
                                Incoterm 
                            </strong>
                            <p className='text-sm text-gray-200 mt-2'>
                                Clique aqui para baixar o arquivo.
                            </p>
                        </div>
                    </a>
                </div> : null}

            </div>
        </div>
    )
}