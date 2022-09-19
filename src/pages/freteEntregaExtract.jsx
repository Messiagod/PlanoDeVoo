import { useState } from "react";
import { ExtracDate } from "../components/extracDate";

export function FreteEntregaExtract() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '1 - Preço Frete Entrega',
                "rotaApi": '/PlanoDeVoo/frete/extracao/precoFreteEntrega',
                "rotaApiDownload": '/PlanoDeVoo/frete/extracao/precoFreteEntrega',
                "baseDois": "Frete",
                "navigateBase": "/planoDeVoo/processamentoCts/freteArquivo",
                "descricao": 'Descrição Frete Entrega',
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