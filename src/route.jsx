import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Transação1 } from "./pages/Transacao1";

export function RouteComponent(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Transacao" element={<Transação1/>}/>
            
        </Routes>
    )
}