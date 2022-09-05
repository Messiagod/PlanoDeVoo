import { useState } from "react";
import { ExtracDate } from "../components/extracDate";

export function IcmsExtract() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '7 - ICMS - Extração de Dados',
                "rotaApi": '/PlanoDeVoo/receita/extracao/icms',
                "rotaApiDownload": '/PlanoDeVoo/receita/extracao/icms/',
                "baseDois": "Receita",
                "navigateBase": "/planoDeVoo/processamentoCts/receitaArquivo",
                "descricao": 'Descrição Impostos',
                "base": false,
                "ativo": true,
                "navigate": "/planoDeVoo/processamentoCts",
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