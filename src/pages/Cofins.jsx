import { useState } from "react";
import { Temas } from '../components/temas';


export function Cofins() {

    const [arquivos, setArquivos] = useState(

        [
            {
                "rota": 'cofinsArquivoUpload1',
                "nome": 'Cofins',
                "descricao": '1 Arquivo'
            },
        ]
    )



    return (
        <main className="">
            <div className="flex">
                <h1 className="m-8 text-4xl flex items-center rounded font-bold  gap-2 justify-center">
                    Cofins
                </h1>
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