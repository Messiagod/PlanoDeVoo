import { useState } from "react";
import { ExtracDate } from "../components/extracDate";

export function PisExtract() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '6 - PIS - Extração de Dados',
                "rotaApi": '/PlanoDeVoo/receita/extracao/pis',
                "rotaApiDownload": '/PlanoDeVoo/receita/extracao/pis/',
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