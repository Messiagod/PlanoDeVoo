import { FileArrowDown, CaretRight } from 'phosphor-react'
import { useState } from 'react';
import api from '../config/api';
import sucessLoad from '../assets/sucessGif.gif'
import errorLoad from '../assets/errorGif.gif'
import { Link } from 'react-router-dom'


export function Upload({ data }) {

    const [sucessArquivo, setSucessArquivo] = useState(true)
    const [processArquivo, setProcessArquivo] = useState(false)
    const [button, setButton] = useState(true)
    const [atualizarBase, setAtualizarBase] = useState(false)
    const [file, setFile] = useState('');

    const [uploadSucess, setUploadSucess] = useState('')
    const [rowsSucess, setRowsSucess] = useState('')
    const [divUploadSucess, setDivUploadSucess] = useState(false)

    const [errorUpload, setErrorUpload] = useState('')
    const [divErrorUpload, setDivErrorUpload] = useState(false)

    const uploadFile = async e => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', file);
        setButton(false)
        setSucessArquivo(false)
        setProcessArquivo(true)


        await api.post(data.rotaApi, formData)
            .then((response) => {
                console.log(response)
                setUploadSucess(response.data.message)
                setRowsSucess(response.data.rows)
                setFile('');
                setDivUploadSucess(true)
                setProcessArquivo(false)
                /*                 setAtualizarBase(true)
                 */
            }).catch((err) => {
                if (err) {
                    setProcessArquivo(false)
                    setDivErrorUpload(true)
                    console.log(err)
                    console.log(err.response.data.error)
                    setErrorUpload(err.response.data.error)

                } else {
                    console.log("back off")
                }
            })

    }
    const downloadArquivo = `http://brampwsapp001:3000/${data.nomeArquivo}`

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
                        <Link to={"/planoDeVoo/processamentoCts"} className="text-3xl font-bold">
                        Processamento CTS
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
                        <a className='text-3xl font-bold underline'>
                            Carregar Arquivo
                        </a>

                    </li>

                </ul>
            </div>
            {sucessArquivo ?
                <div className="">
                    <div className=" rounded border border-gray-500 p-4 m-4">
                        <header className="flex items-center justify-between ">
                            <span className=" text-blue-500 text-4xl font-bold flex items-center">
                                {data.nome}
                            </span>
                            <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold ">
                                ARQUIVO CSV
                            </span>
                        </header>
                        <form onSubmit={uploadFile} className='flex flex-col gap-2 mt-4'>
                            <div class="flex justify-center items-center w-auto">
                                <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-700 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer  hover:bg-gray-600">
                                    <div class="flex flex-col justify-center items-center pt-5 pb-6">
                                        <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                        <p class="mb-2 text-sm text-white-500 dark:text-gray-400"><span class="font-semibold">Clique aqui para inserir o arquivo </span></p>
                                        <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold mt-10">
                                            SOMENTE ARQUIVOS COM EXTENSÃO CSV
                                        </span>
                                    </div>
                                    <input id="dropzone-file" type="file" class="hidden " accept='.csv' onChange={e => setFile(e.target.files[0])} />
                                </label>
                            </div>
                            {file ? <button type='submit' className='w-28 h-14 p-3 mt-10 text-sm bg-blue-600   rounded font-bold uppercase gap-2  hover:bg-blue-700 transition-colors'>
                                Enviar dados
                            </button> : null}

                        </form>
                    </div>
                </div>
                :
                null
            }
            {processArquivo ?
                <div className="">
                    <div className="rounded border border-gray-500 p-4 m-4">
                        <div class="">
                            <h1 className='uppercase font-bold'> Arquivo Carregado, estamos analisando os dados</h1>
                            <button disabled type="button" class="mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
                                <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
                                </svg>
                                Processando Arquivo
                            </button>
                        </div>
                    </div>
                </div>
                :
                null
            }
            {divUploadSucess ?
                <div className="">
                    <div className="rounded border border-gray-500 p-4 m-4">

                        <h1 className='mt-5 mb-5 text-green-400 text-4xl'>{uploadSucess} !!</h1>
                        <div className='w-60 flex items-center justify-center'>
                            <img src={sucessLoad} alt="loading..." />
                        </div>
                        <p className='mt-5 mb-5 font-medium'>Total de linhas carregadas: {rowsSucess}</p>
                        <p className='mt-5 mb-5 font-medium'>Total de linhas com erro: 0</p>

                    </div>
                </div>
                :
                null
            }
            {divErrorUpload ?
                <div className="">
                    <div className="rounded border border-gray-500 p-4 m-4">
                        <h1 className='mt-5 mb-5 text-red-400 text-4xl'>Arquivo contem erros!!</h1>
                        <div className='w-60 flex items-center justify-center'>
                            <img src={errorLoad} alt="loading..." />
                        </div>
                        <p className='mt-5 mb-5 font-medium'>{errorUpload}</p>
                        <p className='mt-5 mb-5 font-medium'>Total de linhas carregadas: 0</p>
                    </div>
                </div>
                :
                null
            }

            <div className="p-5 ">
                <div className="flex-1">
                    <h1 className="text-2xl font-bold">
                        {data.base}
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        {data.descricao}
                    </p>
                </div>
                <div className='gap-10 mt-5 grid grid-cols-2'>
                    <a href={downloadArquivo} className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
                        <div className='bg-blue-700 h-full p-6 flex items-center'>
                            <FileArrowDown size={40} />
                        </div>
                        <div className='py-6 leading-relaxed'>

                            <strong className='text-2xl'>Planilha Modelo</strong>
                            <p className='text-sm text-gray-200 mt-2'>
                                Clique aqui para acessar a planilha.
                            </p>
                        </div>
                        <div className='h-full p-6 flex items-center'>
                            <CaretRight size={24} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}