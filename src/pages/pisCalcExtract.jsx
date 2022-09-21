import { useState } from "react";
import { ExtracDate } from "../components/extracDate";

export function PisCalcExtract() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '9 - PIS Calculo - Extração de Dados',
                "rotaApi": '/PlanoDeVoo/receita/extracao/pisCalc',
                "rotaApiDownload": '/PlanoDeVoo/receita/extracao/pisCalc/',
                "baseDois": "Receita",
                "navigateBase": "/planoDeVoo/processamentoCts/receitaArquivo",
                "descricao": 'Descrição Impostos',
                "base": false,
                "ativo": true,
                "navigate": "/planoDeVoo",
                "seconds": 60000,
                "time": "Pis Calc - Extração de dados"
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