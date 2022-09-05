import { useState } from "react";
import { ExtracDate } from "../components/extracDate";

export function UpExtracaoDeDados() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '1 - Definição UP Extração de Dados',
                "rotaApi": '/PlanoDeVoo/demandaUpExtracaoDados',
                "rotaApiDownload": '/PlanoDeVoo/demandaUpExtracaoDados/',
                "descricao": 'Definição UP Extração de Dados',
                "baseDois": "UP",
                "navigateBase": "/planoDeVoo/processamentoCts/upArquivo",
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