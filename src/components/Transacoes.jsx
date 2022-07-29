import { CheckCircle, Lock } from 'phosphor-react'

export function Transacoes({ data }) {
    return (
        <>
            {data.liberado ?
                <a href={data.rota}>
                    <span className="text-gray-300">
                        {data.date}
                    </span>
                    <div className="rounded border border-gray-500 p-4 mt-2">
                        <header className="flex items-center justify-between">
                            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                                <CheckCircle size={20} />
                                Transação Liberada
                            </span>
                            <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold ">
                                ARQUIVO {data.tipo}
                            </span>
                        </header>
                        <strong className="text-gray-200 mt=5">
                            {data.nome}
                        </strong>
                    </div>
                </a>
                :
                <a href={data.rota}>
                    <span className="text-gray-300">
                        {data.date}
                    </span>

                    <div className="rounded border border-gray-500 p-4 mt-2">
                        <header className="flex items-center justify-between">
                            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                                <Lock size={20} />
                                Em breve
                            </span>
                            <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-orange-500 font-bold ">
                                Em breve
                            </span>
                        </header>
                        <strong className="text-gray-200 mt=5 ">
                            {data.nome}
                        </strong>
                    </div>
                </a>
            }


        </>
    )
}
