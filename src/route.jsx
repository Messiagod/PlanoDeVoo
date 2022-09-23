import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";


import { ExtractArchive } from "./pages/extractArchive";
import { ThemesNavigate } from "./pages/themesNavigate";
import { UploadPage } from "./pages/uploadPage";
import { CopySql } from "./pages/copySql";


export function RouteComponent() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planoDeVoo/themes/:slug" element={<ThemesNavigate />} /> 
            <Route path="/planoDeVoo/extracao/:slug" element={<ExtractArchive />} /> 
            <Route path="/planoDeVoo/carga/:slug" element={<UploadPage />} /> 
            <Route path="/planoDeVoo/copia/:slug" element={<CopySql />} />
        </Routes>
    )
}