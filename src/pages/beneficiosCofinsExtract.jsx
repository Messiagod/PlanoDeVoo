import { useState } from "react";
import { ExtracDate } from "../components/extracDate";

export function BeneficiosCofinsExtract() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '5 - Benefícios Cofins - Extração de Dados',
                "rotaApi": '/PlanoDeVoo/receita/extracao/beneficioCofins',
                "rotaApiDownload": '/PlanoDeVoo/receita/extracao/beneficioCofins/',
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