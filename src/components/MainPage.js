import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./NavBar";
export const MainPage = () => {
    return (
        <div className="container justify-content-center">
            <div className="row align-items-center" >
                <div className="col-2">
                </div>
                <div className="col-4 justify-content-end">
                    <a href="/Merchant" >
                        <img src="./images/Merchant.png" style={{width:300, height:300}}/>
                    </a>
                    <h2> Merchants</h2>
                </div>
                <div className="col-4">
                    <a href="/Services" >
                        <img src="./images/Services.png" style={{width:300, height:300}}/>
                    </a>
                    <h2>Services</h2>
                </div>

            </div>

        </div>
    );
}