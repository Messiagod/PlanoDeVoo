import React from "react"
import { useState } from "react"


export function TesteButton() {

    const [etapa1, setEtapa1] = useState(true)
    const [etapa2, setEtapa2] = useState(true)
    const [etapa3, setEtapa3] = useState(true)

    return (
        <div className="bg-black w-full h-full">
            <div className="flex m-9 gap-4">
                <ul className="flex items-center">
                    <li className="inline-flex items-center">
                        <a className="text-gray-600 hover:text-blue-500">
                            <svg className="w-8 h-auto fill-current mx-2 text-gray-100" viewBox="0 0 24 24" ><path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" /></svg>
                        </a>

                        <span className="mx-4 h-auto text-3xl font-bold">/</span>
                    </li>

                    <li className="inline-flex items-center">
                        <a className="text-3xl font-bold">
                            Processamento CTS
                        </a>
                        <span className="mx-4 h-auto text-3xl font-bold">/</span>

                    </li>

                    <li className="inline-flex items-center">
                        <a className="text-3xl font-bold ">
                            a
                        </a>
                        <span className="mx-4 h-auto text-3xl font-bold">/</span>
                    </li>

                    <li className="inline-flex items-center">
                        <a className='text-3xl font-bold underline'>
                            Carregar Arquivo
                        </a>

                    </li>

                </ul>
            </div>
            <div className="h-full rounded border border-gray-500 p-4 m-4">
                <header className="flex items-center justify-between ">
                    <span className=" text-blue-500 text-4xl font-bold flex items-center">
                        Botão para realizar Cópia - SQL
                    </span>
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold ">
                        Botão SQL
                    </span>
                </header>
                {etapa1 ?

                    <ol class="items-center sm:flex m-12 ">
                        <li class="relative mb-6 sm:mb-0">
                            <div className="flex items-center">
                                <div className="flex z-10 justify-center items-center w-8 h-8 bg-blue-500 rounded-full ring-0   sm:ring-8  shrink-0">
                                    <img src="https://img.icons8.com/color/48/000000/send-letter--v1.png" />                          </div>
                                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                            </div>
                            <div className="mt-5 sm:pr-8">
                                <h3 className="text-lg font-semibold text-white-900 ">Processo  executado - Solicitação de Cópia</h3>
                                <p className="text-base font-normal text-white-500 "> <strong> Status: </strong> Enviando solicitação de cópia para banco de dados.....</p>
                                <time class="block mb-2 text-base font-normal leading-none text-gray-400">Processo Iniciado: 14:10</time>

                            </div>
                        </li>

                        {etapa2 ?
                            <li class="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="flex z-10 justify-center items-centerw w-8 h-8 bg-blue-500 rounded-full ring-0   sm:ring-8  shrink-0">
                                        <img src="https://img.icons8.com/fluency/48/000000/database.png" />
                                    </div>
                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                                </div>
                                <div className="mt-5 sm:pr-8">
                                    <h3 className="text-lg font-semibold text-white-900 ">Banco de dados - Em andamento</h3>
                                    <p className="text-base font-normal text-white-500 "> <strong> Status: </strong> Executando cópia de dados, por favor aguarde.....</p>
                                    <time class="block mb-2 text-base font-normal leading-none text-gray-400">Processo Iniciado: 14:10</time>
                                </div>
                            </li> : null}


                        {etapa3 ?
                            <li class="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="flex z-10 justify-center items-center w-8 h-8 bg-blue-500 rounded-full ring-0   sm:ring-8  shrink-0">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAErklEQVRoge2ZTUgcZxjH/8/MrAeJtFhXsn600hLd3VgLXbUUUtCQi8XFrGZNW1vooaQVDfReClsovZe6NubQk4eoUVd2TSmE4LEYhRYbbYT0kFiVbpQGF0V3Z54eojHdeXdnZmf0Ev+3fd6P+f3nfXbeL+BEJ3qxRU50Eh4NyztKppklrVViCmiAlwAPAacAgIEUmFaJ+L5GPC+p8p3AQsNsJBLR7D7bloGOWEe1pkl9DHwM4kqLzVdAPKyqcvTnromVQhkKMtA2GnYrrvS3DHwKoKjQh+9rD8Q/kax9HQ/GH1ttbNlAMNbxETP9AKDUalsDbTBT/3Tn5A0rjUwbCAxdcXncyUEQf2adzbyYaWg96b46//n1tJn6pgwE48Fizsg3AbTZojOvW6So4Xgwvm1UUTKqEBi64jpmeAB4nzPyVHg0bPj/MjTgcScHcbzwB7qwU7T3vVGlvCnUPhHqAfGwc0wFiPiDxMWpkZzFuQpCE6FX0sR/Aig7EjDz2iRFrcv1ic2ZQhni73CM8GUlxbmKSrWM/E2uQuEItI13VsmS9gD2JylTqj1diu7mevz6YAW37/0lqrJHinomHow/zC4QjoBC3I9jhlckCefOvIoLZ18XVStiVeoVFegMRCIRiYl7nAYVyedx43Lzm1CkQ4x336iGW5ROmvRJeDQsZ4d1BuYafn8HQJWzqHrVni5FV5MPsnSYxarGuHl3EcktwfxFXLnjSgeywzoDLGmtzqLq5a8o0735A/iltWTOdsR0PjumM0Ca1OgQp1D+ijJ0NZ4Vvvl88ADAgPEIAKi1C5lLduABgIjrsmN6A8Qes0B5vt06+TxuW/AAwICOTTQCp8x01uKtQW9rE3wet2Fdf0UZLjX5bcHvqyQ7YLiYE6nFW4MWbw1kiXCpyZ/XhN20MZLIQCpfA3dJMd6rfe3Z73wmjgB+KzugN8C0lq+H5NY2RmYXkNEODxRkidDd7Ed9VflRwoMAHZtoBJaNOlpe38To7B//M0FE6Ar4UF9VfmRpw0z3s2OiiWzOTGfL65sYv7sEVeNnMSJC6G2fEH587p7tnBex6QxIqnzHbIdLa0lhOone/OKq5RMTnURsOgOBhYZZAI/MdipKpwM5+bUB8DCw0DCfHdSt7mZmZrj2w7pygM6Z7XkjtYP1J1vwVbgh0dO37zA8AAxe7712OzsonAdUVY4C2LPS+/MjcQTwu1AyUVFBzj1xe6zjRzB9YfVJ/oqnu1Ancv45DSRCsauigpwzcXqv6CsAlikWVx87Db9BippzT5zTwC/dY5vMJHR9nGKm3nyHvnnXQtOdkzeYach5LJMijk53To7lq2K4mCvOKH0AYo5BmRQRT6deevKlUT1DA2PdYyopag+AW46QmVMCstY90zqTMapoajkdD8a31/4pvwjia/bZDEQcTb38b8jMyTRQwAVHe6zjMpgG4PypXZKZ+oxyPluWNzSJi1MjLiYvA4MAdq22F2gXwEA67fJahQdsXvK1x9srocr9YOoBUG2x+SMAw1Ay0UQw8XehDI5cs0YiEWnurd8aiek8AwEirmOgEof76xSYVgAss6TN7V+zzjtxzXqiE73o+g+dpfqwWeHHNgAAAABJRU5ErkJggg==" />                      </div>
                                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 "></div>
                                </div>
                                <div className="mt-5     sm:pr-8">
                                    <h3 className="text-lg font-semibold text-white-900 ">Processo Concluido com sucesso!!!</h3>
                                    <p className="text-base font-normal text-white-500 "> <strong> Status: </strong> Concluido com sucesso.....</p>
                                    <time class="block mb-2 text-base font-normal leading-none text-gray-400">Processo Encerrado: 14:10</time>
                                </div>
                            </li> : null}


                    </ol> : null}

                {/* <div className="m-12">
                    <p>Quantidade de Itens: 100000</p>
                    <p>Quantidade inserida: 22250627</p>
                    <p>Quantidade de itens: 22250627</p>
                    <p>Valor soma volume convertido: 137817981.5350427</p>
                    <p>Valor soma caixa fisica: 136774178.445674</p>
                </div> */}
            </div>
        </div>
    )
}