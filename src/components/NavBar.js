import React from "react";
import {useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Navbar = () => {
    const Navigate=useNavigate();
    return (
        <div >
            <ul class="nav  nav-tabs navbars ">
                <li class="nav-item p-4">
                    <img src="./images/PL_logo.png" width="140" height="40" onClick={()=>Navigate("/")}/>
                </li>
                <li class="nav-item p-4" >
                    <Link to ="/Merchant" className="text-decoration-none link">Merchants</Link> 
                </li>
                <li class="nav-item p-4 " >
                <Link to ="/Services" className="text-decoration-none link ">Services</Link> 
                </li>

            </ul>
        </div>
    );
}