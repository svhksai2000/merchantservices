import React from "react";
import { DisplayServices } from "./DisplayServices";
export const ServiceDetails=(props)=>{
    const data=props.services;
    return(
        <div>
            <DisplayServices data={data}/>
        </div>
    );
}