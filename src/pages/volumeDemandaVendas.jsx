import { useState } from "react";
import { ButtonSql } from "../components/buttonSql";

export function VolumeDemandaVendas() {

    const [buttons, setButtons] = useState(

        
        [
            {
                "nome": '2 - Volume Demanda Vendas',
                "rotaApi": '/PlanoDeVoo/volumeDemandaVendas',
                "descricao": 'Descrição Comissão',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/processamentoCts/demandaArquivo",
                "seconds": 20000,
                "time": "Volume Demanda Vendas"
            }
        ]
    )



    return (

        <>
        <main className="flex flex-1">
        {
                        buttons.map(data => (
                            <ButtonSql data={data} />
                        ))
                    }
        </main>
        </>
        
    )
}