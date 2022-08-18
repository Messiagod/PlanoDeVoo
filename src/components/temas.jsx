import { CaretRight, BookmarksSimple, Lock } from 'phosphor-react'
import { Link } from 'react-router-dom'


export function Temas({ data }) {

    return (
        <>
            {data.ativo ?
                <Link to={data.rota} className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
                    <div className='bg-blue-700 h-full p-4 flex items-center'>
                        {data.icon}
                    </div>
                    <div className='py-6 leading-relaxed'>
                        <strong className='text-xl'>
                            {data.nome}
                        </strong>

                        <p className='text-sm text-gray-200 mt-2'>
                            {data.descricao}
                        </p>
                    </div>
                    <div className='h-full p-6 flex items-center '>
                        <CaretRight size={24} />
                    </div>
                    
                </Link>
                
                :
                <Link to={data.rota} className='bg-gray-900 rounded overflow-hidden flex items-stretch gap-6 cursor-default hover:bg-gray-900 transition-colors'>
                    <div className='bg-blue-900 h-full p-4 flex items-center'>
                        <Lock size={40} />
                    </div>
                    <div className='py-6 leading-relaxed'>
                        <strong className='text-xl'>
                            {data.nome}
                        </strong>

                        <p className='text-sm text-gray-200 mt-2'>
                            {data.descricao}
                        </p>
                    </div>
                    <div className='h-full p-6 flex items-center '>
                        <CaretRight size={24} />
                    </div>
                </Link>
            }
        </>
    )
}