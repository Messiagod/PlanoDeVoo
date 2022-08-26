import { useState } from "react";
import { ExtracDate } from "../components/extracDate";

export function IncotermExtracaoDeDados() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '1 - Incoterm Extração de Dados',
                "rotaApi": '/PlanoDeVoo/demandaIncotermsExtracaoDados',
                "descricao": 'Descrição Comissão',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/processamentoCts/demandaArquivo",
                "seconds": 60000,
            }
        ]
    )



    return (

        <>
        <main className="flex flex-1">
                    {buttons.map(data => (
                        <ExtracDate data={data}/>
                    ))}
        </main>
        </>
        
    )
}