import React from "react";
import { Route,Routes } from "react-router-dom";
import { Merchant } from "./Merchant";
import { Services } from "./Services";
import { MainPage } from "./MainPage";
import { MerchantDetails } from "../containers/MerchantDetails";
import { MerchantAdd } from "../containers/MerchantAdd";
import { MerchantUpdate } from "../containers/MerchantUpdate";
import { ServiceAdd } from "../containers/ServiceAdd";
export const AppRouter=()=>{
    return(
   <Routes>
   <Route path="/" element={<MainPage/>}/>
    <Route path="/Merchant" element={<Merchant/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/Merchant/:id" element={<MerchantDetails/>}/>
    <Route path="/MerchantAdd" element={<MerchantAdd/>}/>
    <Route path="/MerchantUpdate" element={<MerchantUpdate/>}/>
    <Route path="/ServiceAdd" element={<ServiceAdd/>}/>
   </Routes>
    );
}