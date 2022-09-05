import { useState } from "react";
import { ExtracDate } from "../components/extracDate";

export function RobCalcExtract() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '10 - ROB Calculo - Extração de Dados',
                "rotaApi": '/PlanoDeVoo/receita/extracao/robCalc',
                "rotaApiDownload": '/PlanoDeVoo/receita/extracao/robCalc/',
                "baseDois": "Receita",
                "navigateBase": "/planoDeVoo/processamentoCts/receitaArquivo",
                "descricao": 'Descrição Impostos',
                "base": false,
                "ativo": true,
                "navigate": "/planoDeVoo",
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