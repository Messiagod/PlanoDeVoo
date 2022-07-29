import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { TiArquivo } from "./pages/tiArquivo";
import { UploadArquivoTI } from "./pages/TransacaoTesteTI";
import { ConsolidadoDRE } from "./pages/ConsolidadoDRE";

import { Cofins } from "./pages/Cofins";
import { CofinsUpload1 } from "./pages/ConfisUpload1";

import { Icms } from "./pages/Icms";
import { IcmsUpload1 } from "./pages/IcmsUpload1";

import { Pis } from "./pages/Pis";
import { PisUpload1 } from "./pages/PisUpload1";



export function RouteComponent(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tiArquivo" element={<TiArquivo/>}/>
            <Route path="/tiArquivoUpload1" element={<UploadArquivoTI/>}/>

            {/* CONSOLIDADO DRE */}
            <Route path="/consolidadoDRE" element={<ConsolidadoDRE/>}/>
            {/* CONSOLIDADO DRE - BASE COFINS */}
            <Route path="consolidadoDRE/cofinsArquivo" element={<Cofins/>}/>
            <Route path="consolidadoDRE/cofinsArquivo/cofinsArquivoUpload1" element={<CofinsUpload1/>}/>
            {/* CONSOLIDADO DRE - BASE ICMS */}
            <Route path="consolidadoDRE/icmsArquivo" element={<Icms/>}/>
            <Route path="consolidadoDRE/icmsArquivo/icmsArquivoUpload1" element={<IcmsUpload1/>}/>
            {/* CONSOLIDADO DRE - BASE PIS */}
            <Route path="consolidadoDRE/pisArquivo" element={<Pis/>}/>
            <Route path="consolidadoDRE/pisArquivo/pisArquivoUpload1" element={<PisUpload1/>}/>


            <Route path="/cpvArquivo" element={<ConsolidadoDRE/>}/>
            <Route path="/fretesArquivo" element={<ConsolidadoDRE/>}/>
            <Route path="/fretesFrotaPropriaArquivo" element={<ConsolidadoDRE/>}/>
            <Route path="/comissaoArquivo" element={<ConsolidadoDRE/>}/>
            <Route path="/pisArquivo" element={<ConsolidadoDRE/>}/>
            <Route path="/receitaArquivo" element={<ConsolidadoDRE/>}/>
            <Route path="/verbasArquivo" element={<ConsolidadoDRE/>}/>
            <Route path="/volumeArquivo" element={<ConsolidadoDRE/>}/>
        </Routes>
    )
}