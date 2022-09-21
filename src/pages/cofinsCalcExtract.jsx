import { useState } from "react";
import { ExtracDate } from "../components/extracDate";

export function CofinsCalcExtract() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '8 - Cofins Calculo - Extração de Dados',
                "rotaApi": '/PlanoDeVoo/receita/extracao/cofinsCalc',
                "rotaApiDownload": '/PlanoDeVoo/receita/extracao/cofinsCalc/',
                "baseDois": "Receita",
                "navigateBase": "/planoDeVoo/processamentoCts/receitaArquivo",
                "descricao": 'Descrição Impostos',
                "base": false,
                "ativo": true,
                "navigate": "/planoDeVoo/processamentoCts",
                "seconds": 60000,
                "time": "Cofins Calc - Extração de dados"
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