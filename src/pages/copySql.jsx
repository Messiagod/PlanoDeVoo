import { ButtonSql } from "../components/buttonSql";
import { useParams } from 'react-router-dom'

export function CopySql() {
    const params = useParams();
    /* DEMANDA */
    const volumeDemandaVendas =
        [
            {
                "nome": '2 - Volume Demanda Vendas',
                "rotaApi": '/PlanoDeVoo/volumeDemandaVendas',
                "descricao": 'Descrição Comissão',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/themes/Demanda",
                "seconds": 20000,
                "time": "Volume Demanda Vendas"
            }
        ]
    /* RECEITA */
    const receitaLiquida =
        [
            {
                "nome": '1 - Receita Líquida',
                "nomeBase": "Receita",
                "rotaApi": '/PlanoDeVoo/receita/receitaLiquida',
                "descricao": 'Descrição Receita Líquida',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/themes/Demanda",
                "navigateBase": "/planoDeVoo/themes/Receita",
                "time": "Receita Liquida"
            }
        ]
    /* VERBAS */
    const verbasContratuaisPontuais =
        [
            {
                "nome": '4 - Verbas Contratuais Pontuais',
                "rotaApi": '/PlanoDeVoo/verbas/calculo/verbasContratuaisPontuais',
                "descricao": 'Descrição Verbas Contratuais Pontuais',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/themes/Demanda",
                "time": "Verbas Contratuais e Pontuais"
            }
        ]
    /* UP */
    const up =
        [
            {
                "nome": '3 - Calculo UP',
                "nomeBase": "UP",
                "rotaApi": '/PlanoDeVoo/demanda/calculoUp',
                "descricao": 'Descrição UP',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/themes/Demannda",
                "navigateBase": "/planoDeVoo/themes/Up",
                "time": "Calculo Up"
            }
        ]
    /* CONVERSAO */
    const conversao =
        [
            {
                "nome": '3 - Calculo Conversão',
                "nomeBase": "Conversão",
                "rotaApi": '/PlanoDeVoo/demandaCalculoConversao',
                "descricao": 'Descrição Comissão',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/themes/Demanda",
                "navigateBase": "/planoDeVoo/themes/Conversao",
                "time": "Calculo Conversão"
            }

        ]
    const fatorConversao =
        [
            {
                "nome": '1 - Fator Conversão',
                "nomeBase": "Conversão",
                "rotaApi": '/PlanoDeVoo/demandaFatorConversao',
                "descricao": 'Descrição Comissão',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/themes/Demanda",
                "navigateBase": "/planoDeVoo/themes/Conversao"
            }
        ]
    /* IMPOSTOS */
    const impostos =
        [
            {
                "nome": '4 - Calculo de Impostos',
                "nomeBase": "Receita",
                "rotaApi": '/PlanoDeVoo/receita/calculoImpostos',
                "descricao": 'Descrição Calculo de Impostos',
                "base": 'Plano de Voo',
                "ativo": true,
                "navigate": "/planoDeVoo/themes/planoDeVoo",
                "navigateBase": "/planoDeVoo/themes/Receita",
                "time": "Calculo Impostos"
            }
        ]
    /* INCOTERM */
    const incoterm =
        [
            {
                "nome": '3 - Calculo Incoterm',
                "nomeBase": "Incoterm",
                "rotaApi": '/PlanoDeVoo/demandaCalculoIncoterms',
                "descricao": 'Descrição Comissão',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/themes/Demanda",
                "navigateBase": "/planoDeVoo/themes/Incoterm",
                "time": "Calculo Incoterms"
            }
        ]
    /* INVESTIMENTO VENDAS */
    const investimentoVendas =
        [
            {
                "nome": '4 - Verbas Contratuais Pontuais',
                "rotaApi": '/PlanoDeVoo/verbas/calculo/verbasContratuaisPontuais',
                "descricao": 'Descrição Verbas Contratuais Pontuais',
                "base": 'Demanda',
                "ativo": true,
                "navigate": "/planoDeVoo/themes/Demanda",
                "time": "Verbas Contratuais e Pontuais"
            }
        ]

    return (

        <>

            {params.slug === "2 - Volume Demanda Vendas" ?
                <main className="flex flex-1">
                    {
                        volumeDemandaVendas.map(data => (
                            <ButtonSql data={data} />
                        ))
                    }
                </main> : params.slug === "1 - Receita Líquida" ?
                    <main className="flex flex-1">
                        {
                            receitaLiquida.map(data => (
                                <ButtonSql data={data} />
                            ))
                        }
                    </main> : params.slug === "4 - Verbas Contratuais Pontuais" ? <main className="flex flex-1">
                        {
                            verbasContratuaisPontuais.map(data => (
                                <ButtonSql data={data} />
                            ))
                        }
                    </main> : params.slug === "3 - Calculo UP" ?
                        <main className="flex flex-1">
                            {
                                up.map(data => (
                                    <ButtonSql data={data} />
                                ))
                            }
                        </main> : params.slug === "3 - Calculo Conversão" ?
                            <main className="flex flex-1">
                                {
                                    conversao.map(data => (
                                        <ButtonSql data={data} />
                                    ))
                                }
                            </main> : params.slug === "1 - Fator Conversão" ?
                                <main className="flex flex-1">
                                    {
                                        fatorConversao.map(data => (
                                            <ButtonSql data={data} />
                                        ))
                                    }
                                </main> : params.slug === "4 - Calculo de Impostos" ?
                                    <main className="flex flex-1">
                                        {
                                            impostos.map(data => (
                                                <ButtonSql data={data} />
                                            ))
                                        }
                                    </main> : params.slug === "3 - Calculo Incoterm" ?
                                        <main className="flex flex-1">
                                            {
                                                incoterm.map(data => (
                                                    <ButtonSql data={data} />
                                                ))
                                            }
                                        </main> : params.slug === "4 - Verbas Contratuais Pontuais" ?
                                            <main className="flex flex-1">
                                                {
                                                    investimentoVendas.map(data => (
                                                        <ButtonSql data={data} />
                                                    ))
                                                }
                                            </main> : null

            }
        </>

    )
}