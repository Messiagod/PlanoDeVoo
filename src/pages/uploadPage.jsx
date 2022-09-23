import React from "react"
import { useParams } from 'react-router-dom'
import { Upload } from "../components/Upload"


export function UploadPage() {
    const params = useParams();

    /* DEMANDA */
    const hierarquiaDeClientesZsd112 = [
        {
            "nome": '1 -  Hierarquia de Clientes (ZSD112)',
            "rotaApi": '/PlanoDeVoo/uploadZSD112',
            "nomeArquivo": 'ZSD112_modelo.csv',
            "descricao": 'Descrição Hierarquia de Clientes (ZSD112)',
            "base": 'Demanda',
            "baseOne": "Plano de Voo",
            "baseNavigate": "/planoDeVoo/themes/Plano De Voo",
            "navigate": "/planoDeVoo/themes/Demanda",
            "ativo": true,
            "time": "ZSD112 Carga de Dados"
        }
    ]
    const grandesContasKede = [
        {
            "nome": '3 - Grandes Contas (Kede)',
            "rotaApi": '/PlanoDeVoo/uploadGrandesContas',
            "nomeArquivo": 'grandes_contas_modelo.csv',
            "descricao": 'Descrição Grandes Contas (Kede)',
            "base": 'Demanda',
            "baseOne": "Plano de Voo",
            "baseNavigate": "/planoDeVoo",
            "navigate": "/planoDeVoo/themes/Demanda",
            "ativo": true,
            "time": "Grandes Contas Carga Dados"
        }
    ]
    /* CONVERSÃO */
    const fatorConversao = [
        {
            "nome": '2 - Fator Conversão - Carga de Dados',
            "rotaApi": '/PlanoDeVoo/demanda/uploadFatorConversao',
            "nomeArquivo": 'fator_conversao_modelo.csv',
            "descricao": 'Descrição Fator Conversão',
            "base": 'Conversão',
            "baseOne": "Plano de Voo",
            "baseNavigate": "/planoDeVoo",
            "navigate": "/planoDeVoo/themes/Conversao",
            "ativo": true,
            "time": "Fator Conversao - Carga de Dados"
        }
    ]
    /* INCOTERM */
    const incoterm = [
        {
            "nome": '2 - Incoterm Carga de Dados',
            "nomeBase": "Incoterm",
            "rotaApi": '/PlanoDeVoo/uploadIncoterms',
            "nomeArquivo": 'Incoterm_modelo.csv',
            "descricao": 'Descrição Incoterm',
            "base": 'Demanda',
            "baseOne": "Plano de Voo",
            "baseNavigate": "/planoDeVoo",
            "navigate": "/planoDeVoo/themes/Demanda",
            "navigateBase": "/planoDeVoo/themes/Incoterm",
            "ativo": true,
            "time": "Incoterm Carga de dados"

        }
    ]
    /* UP */
    const up = [
        {
            "nome": '2 - Definição UP Carga de Dados',
            "nomeBase": "UP",
            "rotaApi": '/PlanoDeVoo/uploadDefinicaoUp',
            "nomeArquivo": 'definicao_up_modelo.csv',
            "descricao": 'Descrição UP',
            "base": 'UP',
            "baseOne": "Plano de Voo",
            "baseNavigate": "/planoDeVoo/themes/Plano De Voo",
            "navigate": "/planoDeVoo/themes/Demanda",
            "navigateBase": "/planoDeVoo/themes/Up",
            "ativo": true,
            "time": "Definição UP Carga Dados"

        }
    ]
    /* RECEITA */
    const impostos = [
        {
            "nome": '3 - Impostos - Carga de Dados',
            "rotaApi": '/PlanoDeVoo/impostos/uploadImpostos',
            "nomeArquivo": 'impostos_modelo.csv',
            "descricao": 'Descrição Impostos',
            "base": 'Receita',
            "baseOne": "Plano de Voo",
            "baseNavigate": "/planoDeVoo/themes/Plano De Voo",
            "navigate": "/planoDeVoo/themes/Receita",
            "ativo": true,
            "time": "Impostos - Carga de dados"
        }
    ]
    /* FRETE */
    const precoFreteEntregaProprio = [
        {
            "nomeBase": "Frete",
            "navigateBase": "/planoDeVoo/processamentoCts/FreteArquivo",
            "nome": '3 - Preço Frete Entrega Próprio',
            "rotaApi": 'PlanoDeVoo/frete/upload/precoFreteEntregaProprio',
            "nomeArquivo": 'frete_entrega_proprio_modelo.csv',
            "descricao": 'Descrição Entrega Próprio',
            "base": 'Frete',
            "baseOne": "Plano de Voo",
            "baseNavigate": "/planoDeVoo/themes/Plano De Voo",
            "navigate": "/planoDeVoo/themes/Frete",
            "ativo": false,
            "time": "Preço Frete Entrega Proprio Carga dados"
        }
    ]
    const precoFreteEntregaTerceiros = [
        {
            "nomeBase": "Preço Frete Entrega Terceiros",
            "navigateBase": "/planoDeVoo/processamentoCts/FreteArquivo",
            "nome": '4 - Preço Frete Entrega Terceiros',
            "rotaApi": '/PlanoDeVoo/frete/upload/precoFreteEntregaTerceiros',
            "nomeArquivo": 'frete_entrega_terceiros_modelo.csv',
            "descricao": 'Descrição Frete Entrega Terceiros',
            "base": 'Frete',
            "baseOne": "Plano de Voo",
            "baseNavigate": "/planoDeVoo/themes/Plano De Voo",
            "navigate": "/planoDeVoo/themes/Frete",
            "ativo": false,
            "time": "Preço Frete Entrega Terceiros Carga dados"
        }
    ]
    const precoFreteTransferenciaProprio = [
        {
            "nomeBase": "Preço Frete Transferência Próprio",
            "navigateBase": "/planoDeVoo/themes/Frete",
            "nome": '5 - Preço Frete Transferência Próprio',
            "rotaApi": '/PlanoDeVoo/frete/upload/precoFreteEntregaTerceiros',
            "nomeArquivo": 'frete_transferencia_proprio_modelo.csv',
            "descricao": 'Descrição Frete Transferência Próprio',
            "base": 'Frete',
            "baseOne": "Plano de Voo",
            "baseNavigate": "/planoDeVoo",
            "navigate": "/planoDeVoo/themes/Frete",
            "ativo": false,
            "time": "Preço Frete Transferencia Proprio Carga"
        }
    ]
    const precoFreteTransferenciaTerceiros = [
        {
            "nomeBase": "Preço Frete Transferência Terceiros",
            "navigateBase": "/planoDeVoo/themes/Frete",
            "nome": '6 - Preço Frete Transferência Terceiros',
            "rotaApi": '/PlanoDeVoo/frete/upload/precoFreteTransferenciaTerceiros',
            "nomeArquivo": 'frete_transferencia_terceiros_modelo.csv',
            "descricao": 'Descrição Frete Transferência Terceiros',
            "base": 'Frete',
            "baseOne": "Plano de Voo",
            "baseNavigate": "/planoDeVoo",
            "navigate": "/planoDeVoo/themes/Frete",
            "ativo": false,
            "time": "Preço Frete Transferencia Terceiros Carga"
        }
    ]
    /* PROCESSAMENTO CTS */
    /*   const cofins =
      const icms =
      const pis =
      const freteTerceiros = 
      const comissao = 
      const receita = 
      const verbas = 
      const volume = 
      const cpv = 
      const freteFrota = */

    return (
        <>
            {params.slug === "1 -  Hierarquia de Clientes (ZSD112)" ?
                <main className="flex flex-1">
                    {
                        hierarquiaDeClientesZsd112.map(data => (
                            <Upload data={data} />
                        ))
                    }
                </main> : params.slug === "3 - Grandes Contas (Kede)" ?
                    <main className="flex flex-1">
                        {
                            grandesContasKede.map(data => (
                                <Upload data={data} />
                            ))
                        }
                    </main> : params.slug === "2 - Fator Conversão - Carga de Dados" ?
                        <main className="flex flex-1">
                            {
                                fatorConversao.map(data => (
                                    <Upload data={data} />
                                ))
                            }
                        </main> : params.slug === "2 - Incoterm Carga de Dados" ?
                            <main className="flex flex-1">
                                {
                                    incoterm.map(data => (
                                        <Upload data={data} />
                                    ))
                                }
                            </main> : params.slug === "2 - Definição UP Carga de Dados" ?
                                <main className="flex flex-1">
                                    {
                                        up.map(data => (
                                            <Upload data={data} />
                                        ))
                                    }
                                </main> : params.slug === "3 - Impostos - Carga de Dados" ?
                                    <main className="flex flex-1">
                                        {
                                            impostos.map(data => (
                                                <Upload data={data} />
                                            ))
                                        }
                                    </main> : params.slug === "3 - Preço Frete Entrega Próprio" ?
                                        <main className="flex flex-1">
                                            {
                                                precoFreteEntregaProprio.map(data => (
                                                    <Upload data={data} />
                                                ))
                                            }
                                        </main> : params.slug === "4 - Preço Frete Entrega Terceiros" ?
                                            <main className="flex flex-1">
                                                {
                                                    precoFreteEntregaTerceiros.map(data => (
                                                        <Upload data={data} />
                                                    ))
                                                }
                                            </main> : params.slug === "5 - Preço Frete Transferência Próprio" ?
                                                <main className="flex flex-1">
                                                    {
                                                        precoFreteTransferenciaProprio.map(data => (
                                                            <Upload data={data} />
                                                        ))
                                                    }
                                                </main> : params.slug === "6 - Preço Frete Transferência Terceiros" ?
                                                    <main className="flex flex-1">
                                                        {
                                                            precoFreteTransferenciaTerceiros.map(data => (
                                                                <Upload data={data} />
                                                            ))
                                                        }
                                                    </main> : null
            }
        </>


    )
}