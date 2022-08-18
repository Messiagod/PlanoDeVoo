import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ConsolidadoDRE } from "./pages/ConsolidadoDRE";

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
import { ReceitaUpload1 } from "./pages/ReceitaUpload1";

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


export function RouteComponent() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            {/* CONSOLIDADO DRE */}
            <Route path="/consolidadoDRE" element={<ConsolidadoDRE />} />
            {/* CONSOLIDADO DRE - BASE COFINS */}
            <Route path="consolidadoDRE/cofinsArquivo" element={<Cofins />} />
            <Route path="consolidadoDRE/cofinsArquivo/cofinsArquivoUpload1" element={<CofinsUpload1 />} />
            {/* CONSOLIDADO DRE - BASE ICMS */}
            <Route path="consolidadoDRE/icmsArquivo" element={<Icms />} />
            <Route path="consolidadoDRE/icmsArquivo/icmsArquivoUpload1" element={<IcmsUpload1 />} />
            {/* CONSOLIDADO DRE - BASE PIS */}
            <Route path="consolidadoDRE/pisArquivo" element={<Pis />} />
            <Route path="consolidadoDRE/pisArquivo/pisArquivoUpload1" element={<PisUpload1 />} />
            {/* CONSOLIDADO DRE - BASE FRETE */}
            <Route path="consolidadoDRE/freteArquivo" element={<Frete />} />
            <Route path="consolidadoDRE/freteArquivo/freteArquivoUpload1" element={<FreteUpload1 />} />
            {/* CONSOLIDADO DRE - BASE COMISSÃO */}
            <Route path="consolidadoDRE/comissaoArquivo" element={<Comissao />} />
            <Route path="consolidadoDRE/comissaoArquivo/comissaoArquivoUpload1" element={<ComissaoUpload1 />} />
            {/* CONSOLIDADO DRE - BASE COMISSÃO */}
            <Route path="consolidadoDRE/receitaArquivo" element={<Receita />} />
            <Route path="consolidadoDRE/receitaArquivo/receitaArquivoUpload1" element={<ReceitaUpload1 />} />
            {/* CONSOLIDADO DRE - BASE CPV */}
            <Route path="consolidadoDRE/cpvArquivo" element={<Cpv />} />
            <Route path="consolidadoDRE/cpvArquivo/cpvArquivoUpload1" element={<CpvUpload1 />} />
            {/* CONSOLIDADO DRE - BASE FROTA */}
            <Route path="consolidadoDRE/frotaArquivo" element={<Frota />} />
            <Route path="consolidadoDRE/frotaArquivo/frotaArquivoUpload1" element={<FrotaUpload1 />} />
            {/* CONSOLIDADO DRE - BASE VERBAS */}
            <Route path="consolidadoDRE/verbasArquivo" element={<Verbas />} />
            <Route path="consolidadoDRE/verbasArquivo/verbasArquivoUpload1" element={<VerbasUpload1 />} />
            {/* CONSOLIDADO DRE - BASE VOLUME */}
            <Route path="consolidadoDRE/volumeArquivo" element={<Volume />} />
            <Route path="consolidadoDRE/volumeArquivo/volumeArquivoUpload1" element={<VolumeUpload1 />} />
            {/* CONSOLIDADO DRE - HIERARQUIA DE CLIENTES */}
            <Route path="consolidadoDRE/hierarquiaDeClientesArquivo" element={<Hierarquia />} />
            <Route path="consolidadoDRE/hierarquiaDeClientesArquivo/hierarquiaDeClientesUpload1" element={<HierarquiaUpload1 />} />
            {/* CONSOLIDADO DRE - DEMANDA */}
            <Route path="consolidadoDRE/demandaArquivo" element={<Demanda/>} />
            <Route path="consolidadoDRE/hierarquiaDeClientesArquivo/hierarquiaDeClientesUpload1" element={<HierarquiaUpload1 />} />


        </Routes>
    )
}