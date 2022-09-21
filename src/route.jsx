import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import {  PlanoDeVoo } from "./pages/ConsolidadoDRE";

import { Cofins } from "./pages/Cofins";
import { CofinsUpload1 } from "./pages/ConfisUpload1";

import { Icms } from "./pages/Icms";
import { IcmsUpload1 } from "./pages/IcmsUpload1";

import { Pis } from "./pages/Pis";
import { PisUpload1 } from "./pages/PisUpload1";

import { Frete } from "./pages/Frete";
import { FreteUpload1 } from "./pages/FreteUpload1";

import { Comissao } from "./pages/Comissao";
import { ComissaoUpload1 } from "./pages/ComissaoUpload1";

import { Receita } from "./pages/Receita";
import { ReceitaPlanoDeVooUpload } from "./pages/ReceitaPlanoDeVooUpload";

import { Cpv } from "./pages/Cpv";
import { CpvUpload1 } from "./pages/CpvUpload";

import { Frota } from "./pages/Frota";
import { FrotaUpload1 } from "./pages/FrotaUpload1";

import { Verbas } from "./pages/Verbas";
import { VerbasUpload1 } from "./pages/VerbasUpload1";

import { Volume } from "./pages/Volume";
import { VolumeUpload1 } from "./pages/VolumeUpload1";

import { Hierarquia } from "./pages/HierarquiaDeClientes";
import { HierarquiaUpload1 } from "./pages/HierarquiaDeClientesUpload";
import { Demanda } from "./pages/Demanda";
import { ProcessamentoCTS } from "./pages/ProcessamentoCTS";
import { InvestimentoVendas } from "./pages/InvestimentoVendas";
import { TesteButton } from "./pages/TesteButton";
import { VolumeDemandaVendas } from "./pages/volumeDemandaVendas";
import { DemandaFatorConversao} from "./pages/demandaFatorConversao";
import { CalculoConversao } from "./pages/calculoConversao";
import { IncotermExtracaoDeDados } from "./pages/incotermExtracaoDeDados";
import { IncotermCargaDeDados } from "./pages/incotermCargaDeDados";
import { IncotermCalculo } from "./pages/incotermCalculo";
import { Incoterm } from "./pages/Incoterm";
import { Up } from "./pages/Up";
import { Conversao } from "./pages/conversao";
import { UpExtracaoDeDados } from "./pages/UpExtracaoDeDados";
import { UpCargaDeDados } from "./pages/UpCargaDeDados";
import { ReceitaLiquida } from "./pages/receitaLiquida";
import { CalculoUp } from "./pages/calculoUp";
import { ConversaoExtracaodeDados } from "./pages/conversaoExtracaodeDados";
import { ConversaoUpload } from "./pages/conversaoUpload";
import { Zsd112Upload } from "./pages/zsd112Upload";
import { ReceitaImpostoExtract } from "./pages/receitaImpostosExtracao";
import { BeneficiosCofinsExtract } from "./pages/beneficiosCofinsExtract";
import { PisExtract } from "./pages/pisExtract";
import { IcmsExtract } from "./pages/icmsExtract";
import { CofinsCalcExtract } from "./pages/cofinsCalcExtract";
import { PisCalcExtract } from "./pages/pisCalcExtract";
import { RobCalcExtract } from "./pages/robCalcExtract";
import { ImpostosUpload } from "./pages/impostosUpload";
import { GrandesContasUpload } from "./pages/grandesContasUpload";
import { CalculoImpostos } from "./pages/calculoImpostos";
import { FreteEntregaExtract } from "./pages/freteEntregaExtract";
import { EntregaProprioUpload } from "./pages/entregaProprioUpload";
import { EntregaTerceirosUpload } from "./pages/freteEntregaTerceirosUpload";
import { FreteTransferenciaProprioUpload } from "./pages/freteTransferenciaProprioUpload";
import { FreteTransferenciaTerceirosUpload } from "./pages/FreteTransferenciaTerceirosUpload";
import { ExtractArchive } from "./pages/extractArchive";
import { ThemesNavigate } from "./pages/themesNavigate";


export function RouteComponent() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {/* NOVO ROTEAMENTO */}
            <Route path="/planoDeVoo/extracao/:slug" element={<ExtractArchive/>}  />
            <Route path="/planoDeVoo/themes/:slug" element={<ThemesNavigate/>}  />
            {/* FIM NOVO ROTEAMENTO  */}

            {/* CONSOLIDADO DRE */}
            <Route path="/planoDeVoo" element={<PlanoDeVoo/>} />
            {/* CONSOLIDADO DRE - BASE COFINS */}
            <Route path="planoDeVoo/processamentoCts/cofinsArquivo" element={<CofinsUpload1 />} />
            {/* CONSOLIDADO DRE - BASE ICMS */}
            <Route path="planoDeVoo/processamentoCts/icmsArquivo" element={<IcmsUpload1 />} />
            {/* CONSOLIDADO DRE - BASE PIS */}
            <Route path="planoDeVoo/processamentoCts/pisArquivo" element={<PisUpload1 />} />
            {/* CONSOLIDADO DRE - BASE FRETE */}
            <Route path="planoDeVoo/processamentoCts/freteArquivo" element={<Frete />} />
            <Route path="planoDeVoo/processamentoCts/FreteArquivo/entregaExtract" element={<FreteEntregaExtract/>} />
            <Route path="planoDeVoo/processamentoCts/FreteArquivo/transferenciaExtract" element={<Frete />} />
            <Route path="planoDeVoo/processamentoCts/FreteArquivo/entregaProprioExtract" element={<Frete />} />
            <Route path="planoDeVoo/processamentoCts/freteArquivoUpload" element={<FreteUpload1 />} />
            <Route path="planoDeVoo/processamentoCts/FreteArquivo/entregaProprioCarga" element={<EntregaProprioUpload/>} />
            <Route path="planoDeVoo/processamentoCts/FreteArquivo/entregaTerceirosCarga" element={<EntregaTerceirosUpload/>} />
            <Route path="planoDeVoo/processamentoCts/FreteArquivo/transferenciaProprioCarga" element={<FreteTransferenciaProprioUpload/>} />
            <Route path="planoDeVoo/processamentoCts/FreteArquivo/entregaTransferenciaTerceiros" element={<FreteTransferenciaTerceirosUpload/>} />
            {/* CONSOLIDADO DRE - BASE COMISSÃO */}
            <Route path="planoDeVoo/processamentoCts/comissaoArquivo" element={<ComissaoUpload1 />} />
            {/* CONSOLIDADO DRE - BASE COMISSÃO */}
            <Route path="planoDeVoo/processamentoCts/receitaArquivo" element={<Receita />} />
            <Route path="planoDeVoo/processamentoCts/receitaArquivo/impostosCarga" element={<ImpostosUpload/>} />
            <Route path="planoDeVoo/processamentoCts/receitaArquivo/receitaLiquida" element={<ReceitaLiquida/>} />
            <Route path="planoDeVoo/processamentoCts/receitaArquivo/impostosExtracao" element={<ReceitaImpostoExtract/>} />
            <Route path="planoDeVoo/processamentoCts/receitaArquivo/beneficiosCofinsExtract" element={<BeneficiosCofinsExtract/>} />
            <Route path="planoDeVoo/processamentoCts/receitaArquivo/pisExtract" element={<PisExtract/>} />
            <Route path="planoDeVoo/processamentoCts/receitaArquivo/icmsExtract" element={<IcmsExtract/>} />
            <Route path="planoDeVoo/processamentoCts/receitaArquivo/cofinsCalcExtract" element={<CofinsCalcExtract/>} />
            <Route path="planoDeVoo/processamentoCts/receitaArquivo/pisCalcExtract" element={<PisCalcExtract/>} />
            <Route path="planoDeVoo/processamentoCts/receitaArquivo/robCalcExtract" element={<RobCalcExtract/>} />
            <Route path="planoDeVoo/processamentoCts/receitaArquivo/impostosCalculo" element={<CalculoImpostos/>} />
            {/* CONSOLIDADO DRE - BASE CPV */}
            <Route path="planoDeVoo/processamentoCts/cpvArquivo" element={<CpvUpload1 />} />
            {/* CONSOLIDADO DRE - BASE FROTA */}
            <Route path="planoDeVoo/processamentoCts/frotaArquivo" element={<FrotaUpload1 />} />
            {/* CONSOLIDADO DRE - BASE VERBAS */}
            <Route path="planoDeVoo/processamentoCts/verbasArquivo" element={<VerbasUpload1 />} />
            {/* CONSOLIDADO DRE - BASE VOLUME */}
            <Route path="planoDeVoo/processamentoCts/volumeArquivo" element={<VolumeUpload1 />} />
            {/* CONSOLIDADO DRE - HIERARQUIA DE CLIENTES */}
            <Route path="planoDeVoo/processamentoCts/hierarquiaDeClientesArquivo" element={<HierarquiaUpload1 />} />
            {/* CONSOLIDADO DRE - DEMANDA */}
            <Route path="planoDeVoo/processamentoCts/demandaArquivo" element={<Demanda/>} />
            <Route path="planoDeVoo/processamentoCts/incotermArquivo" element={<Incoterm/>} />
            <Route path="planoDeVoo/processamentoCts/demandaArquivo/zsd112" element={<Zsd112Upload/>} />
            {/* PLANO DE VOO - UP */}
            <Route path="planoDeVoo/processamentoCts/upArquivo" element={<Up/>} />
            <Route path="planoDeVoo/processamentoCts/demandaArquivo/upExtracao" element={<UpExtracaoDeDados/>} />
            <Route path="planoDeVoo/processamentoCts/grandesContas" element={<GrandesContasUpload/>} />
            <Route path="planoDeVoo/processamentoCts/demandaArquivo/upCarga" element={<UpCargaDeDados/>} />
            <Route path="planoDeVoo/processamentoCts/demandaArquivo/upCalculo" element={<CalculoUp/>} />

            <Route path="planoDeVoo/processamentoCts/demandaArquivo/volumeDemandaVenda" element={<VolumeDemandaVendas/>} />

            {/* PLANO DE VOO - CONVERSÃO */}
            <Route path="planoDeVoo/processamentoCts/conversaoArquivo" element={<Conversao/>} />
            <Route path="planoDeVoo/processamentoCts/demandaArquivo/calculoConversao" element={<CalculoConversao/>} />
            <Route path="planoDeVoo/demanda/conversao/extracao" element={<ConversaoExtracaodeDados/>} />
            <Route path="planoDeVoo/demanda/conversao/carga" element={<ConversaoUpload/>} />

            <Route path="planoDeVoo/processamentoCts/demandaArquivo/incotermExtracaoDeDados" element={<IncotermExtracaoDeDados/>} />
            <Route path="/planoDeVoo/processamentoCts/demandaArquivo/incotermCargaDeDados" element={<IncotermCargaDeDados/>} />
            <Route path="/planoDeVoo/processamentoCts/demandaArquivo/incotermCalculo" element={<IncotermCalculo/>} />
            {/* CONSOLIDADO DRE - PROCESSAMENTO CTS */}
            <Route path="planoDeVoo/processamentoCts" element={<ProcessamentoCTS/>} />
            {/*  */}
            <Route path="planoDeVoo/investimentoVendas" element={<InvestimentoVendas/>} />
        </Routes>
    )
}