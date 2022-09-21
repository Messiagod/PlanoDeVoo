import { useParams } from 'react-router-dom'
import { ExtracDate } from "../components/extracDate";


export function ExtractArchive() {

    const params = useParams();
    /* DEMANDA */
    const incoterm =
        [
            {
                "nome": '1 - Incoterm Extração de Dados',
                "rotaApi": '/PlanoDeVoo/demandaIncotermsExtracaoDados',
                "rotaApiDownload": '/PlanoDeVoo/demandaIncotermsExtracaoDados/',
                "baseDois": "Incoterm",
                "navigateBase": "/planoDeVoo/processamentoCts/incotermArquivo",
                "descricao": 'Descrição Comissão',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/processamentoCts/demandaArquivo",
                "seconds": 60000,
                "time": "Incoterm Extração de dados"
            }
        ]
    const upExtracao =
        [
            {
                "nome": '1 - Definição UP Extração de Dados',
                "rotaApi": '/PlanoDeVoo/demandaUpExtracaoDados',
                "rotaApiDownload": '/PlanoDeVoo/demandaUpExtracaoDados/',
                "descricao": 'Definição UP Extração de Dados',
                "baseDois": "UP",
                "navigateBase": "/planoDeVoo/processamentoCts/upArquivo",
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/processamentoCts/demandaArquivo",
                "seconds": 60000,
                "time": "Definição UP Extração Dados"
            }
        ]
    const fatorConversao =
        [
            {
                "nome": '1 -  Fator Conversão - Extração de Dados',
                "rotaApi": '/PlanoDeVoo/demanda/extracaoFatorConversao',
                "rotaApiDownload": '/PlanoDeVoo/demanda/extracaoFatorConversao/',
                "baseDois": "Conversão",
                "navigateBase": "/planoDeVoo/processamentoCts/conversaoArquivo",
                "descricao": 'Descrição Fator Conversão',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/processamentoCts/demandaArquivo",
                "seconds": 60000,
                "time": "Fator Conversao - Extração de Dados"
            }
        ]
    /* RECEITA */
    const beneficiosCofins =
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
                "time": "Beneficio Cofins - Extração de dados"
            }
        ]
    const baseDeImpostos =
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
    const pis =
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
                "time": "Pis - Extração de dados"
            }
        ]
    const icms =
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
                "time": "Icms - Extração de dados"
            }
        ]
    const cofinsCalc =
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
    const pisCalc =
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
    const robCalc =
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
                "time": "Rob Calc - Extração de dados"
            }
        ]
    /* FRETE */
    /*  const precoFreteEntrega = 
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
     const precoFreteTransferencia = */


    return (

        <>
            {params.slug === "1 - Incoterm Extração de Dados" ?
                <main className="flex flex-1">
                    {incoterm.map(data => (
                        <ExtracDate data={data} />
                    ))}
                </main> :
                params.slug === "1 - Definição UP Extração de Dados" ?
                    <main className="flex flex-1">
                        {upExtracao.map(data => (
                            <ExtracDate data={data} />
                        ))}
                    </main> :
                    params.slug === "1 -  Fator Conversão - Extração de Dados" ?
                        <main className="flex flex-1">
                            {fatorConversao.map(data => (
                                <ExtracDate data={data} />
                            ))}
                        </main> :
                        params.slug === "5 - Benefícios Cofins - Extração de Dados" ?
                            <main className="flex flex-1">
                                {beneficiosCofins.map(data => (
                                    <ExtracDate data={data} />
                                ))}
                            </main> :
                            params.slug === "2 - Impostos - Extração de Dados" ?
                                <main className="flex flex-1">
                                    {baseDeImpostos.map(data => (
                                        <ExtracDate data={data} />
                                    ))}
                                </main> :
                                params.slug === "6 - PIS - Extração de Dados" ?
                                    <main className="flex flex-1">
                                        {pis.map(data => (
                                            <ExtracDate data={data} />
                                        ))}
                                    </main> :
                                    params.slug === "7 - ICMS - Extração de Dados" ?
                                        <main className="flex flex-1">
                                            {icms.map(data => (
                                                <ExtracDate data={data} />
                                            ))}
                                        </main> :
                                        params.slug === "8 - Cofins Calculo - Extração de Dados" ?
                                            <main className="flex flex-1">
                                                {cofinsCalc.map(data => (
                                                    <ExtracDate data={data} />
                                                ))}
                                            </main> :
                                            params.slug === "9 - PIS Calculo - Extração de Dados" ?
                                                <main className="flex flex-1">
                                                    {pisCalc.map(data => (
                                                        <ExtracDate data={data} />
                                                    ))}
                                                </main> : 
                                                params.slug === "10 - ROB Calculo - Extração de Dados" ?
                                                <main className="flex flex-1">
                                                    {robCalc.map(data => (
                                                        <ExtracDate data={data} />
                                                    ))}
                                                </main> : null
            }
        </>

    )
}