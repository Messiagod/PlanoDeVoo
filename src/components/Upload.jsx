import { Cloud, CloudCheck, FileArrowDown, CaretRight } from 'phosphor-react'
import { useState } from 'react';
import api from '../config/api';

export function Upload() {
    const [file, setFile] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()
        console.log("Upload Arquivo")
        await api.post('/upload', file)
        .then((response) => {
            console.log(response);
        }).catch((err) => {
            if(err.response){
                console.log(err.response)
            }else{
                console.log("Erro back off")
            }
        })
        console.log(file)
    }

    return (
        <div className="flex-1">
            <div className="bg-black ">
                <div className="w-full max-w-[1100px] max-h-[60vh] h-96 py-2 mx-2 ">
                                 
                        <div className="rounded border border-gray-500 p-4 m-4">
                            <header className="flex items-center justify-between ">
                                <span className=" text-blue-500 text-4xl font-bold flex items-center">
                                    Carregar Arquivo
                                </span>
                                <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold ">
                                    1 ARQUIVO CSV
                                </span>
                            </header>
                            <strong className="text-gray-200">
                                Transação - Financeiro 2.0
                            </strong>
                            <form action="/upload" onSubmit={handleSubmit} className='flex flex-col gap-2 w-full mt-4' encType='multipart/form-data'>
                            <input
                            className='bg-gray-900 rounded px-5 h-14' 
                            type="text" 
                            placeholder="Seu nome completo"/>
                            <input class="bg-gray-900 rounded h-8 " id="small_size" type="file" name='file'  onChange={e => setFile(e.target.files[0])}></input>
                            <button type='submit' value="upload" className='mt-4 bg-blue-600 uppercase py-4 rounded font-bold text-sm hover:bg-blue-700 transition-colors'>
                                Carregar Arquivo
                            </button>
                            </form>
                        </div>
                    
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">
                            Transação - Financeiro 2.0
                        </h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima minus architecto accusamus quaerat dolores, temporibus, qui recusandae nesciunt id, nisi odit! Eum accusantium nisi impedit, aliquam accusamus iure cum. Dolore.
                        </p>

                    </div>
                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm bg-blue-600 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-700 transition-colors">
                            <CloudCheck size={24} />
                            Atualizar Base
                        </a>

                        <a href="" className="p-4 text-sm border border-blue-600  flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-600 transition-colors">
                            <Cloud size={24} />
                            Indicar incidente
                        </a>

                    </div>
                </div>
                <div className='gap-8 mt-20 grid grid-cols-2'>
                    <a href='file:///C:/Users/maarmigliat/Downloads/ModelodeCronogramaparaProjetosDiagrama-de-Gantt-1.xlsx' className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
                        <div className='bg-blue-700 h-full p-6 flex items-center'>
                            <FileArrowDown size={40} />
                        </div>
                        <div className='py-6 leading-relaxed'>
                            <strong className='text-2xl'>Material Complementarr</strong>
                            <p className='text-sm text-gray-200 mt-2'>
                                Acesse o material planilha modelo
                            </p>
                        </div>
                        <div className='h-full p-6 flex items-center'>
                            <CaretRight size={24} />
                        </div>
                    </a>

                    <a href='#' className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
                        <div className='bg-blue-700 h-full p-6 flex items-center'>
                            <FileArrowDown size={40} />
                        </div>
                        <div className='py-6 leading-relaxed'>
                            <strong className='text-2xl'>Material Complementar</strong>
                            <p className='text-sm text-gray-200 mt-2'>
                                Acesse o material planilha modelo
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