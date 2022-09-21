import { useState } from "react";
import { ExtracDate } from "../components/extracDate";

export function IncotermExtracaoDeDados() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '1 - Incoterm Extração de Dados',
                "rotaApi": '/PlanoDeVoo/demandaIncotermsExtracaoDados',
                "rotaApiDownload": '/PlanoDeVoo/demandaIncotermsExtracaoDados/',
                "baseDois": "Incoterm",
                "navigateBase": "/planoDeVoo/processamentoCts/incotermArquivo",
                "descricao": 'Descrição Comissão',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/processamentoCts/demandaArquivo",
                "seconds": 60000,
                "time": "Incoterm Extração de dados"
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