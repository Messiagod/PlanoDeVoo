import { useState } from "react";
import { ExtracDate } from "../components/extracDate";

export function ReceitaImpostoExtract() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '2 - Impostos - Extração de Dados',
                "rotaApi": '/PlanoDeVoo/receita/extracao/baseDeImpostos',
                "rotaApiDownload": '/PlanoDeVoo/receita/extracao/baseDeImpostos/',
                "baseDois": "Receita",
                "navigateBase": "/planoDeVoo/processamentoCts/receitaArquivo",
                "descricao": 'Descrição Impostos',
                "base": false,
                "ativo": true,
                "navigate": "/planoDeVoo/processamentoCts",
                "seconds": 60000,
                "time": "Base de Impostos - Extração de dados"
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