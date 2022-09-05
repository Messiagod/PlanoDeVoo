import { useState } from "react";
import { ExtracDate } from "../components/extracDate";

export function ConversaoExtracaodeDados() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '1 -  Fator Coversão - Extração de Dados',
                "rotaApi": '/PlanoDeVoo/demanda/extracaoFatorConversao',
                "rotaApiDownload": '/PlanoDeVoo/demanda/extracaoFatorConversao/',
                "baseDois": "Conversão",
                "navigateBase": "/planoDeVoo/processamentoCts/conversaoArquivo",
                "descricao": 'Descrição Fator Conversão',
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