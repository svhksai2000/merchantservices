import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServiceDetails } from "./ServiceDetails";
import { getServices } from "../services/MerchantService";
import axios from "axios";
export const ServiceAdd = () => {
    const [serviceId,setserviceId]=useState("");
    const [serviceName,setserviceName]=useState("");
    const [serviceCategory,setServicecategory]=useState("");
    const [serviceDescription,setServicedescription]=useState("");
    const [serviceCharge,setServicecharge]=useState("");
    const [serviceStatus,setServicestatus]=useState("");

    const submitform=()=>{
        const data={serviceId,serviceName,serviceCategory,serviceDescription,serviceCharge,serviceStatus};
        const url="http://localhost:8080/services";
        axios.post(url);
    }
    const navigate=useNavigate();
    return (
        <div style={{width:300}}>
            <form onSubmit={submitform}>
               <input type="text" placeholder="Service id" onChange={(e)=>{
                setserviceId(e.target.value);
               }}></input>
                <input
                    type="text"
                    className="service_name"
                    placeholder="Service name" onChange={(e)=>{
                        setserviceName(e.target.value);
                    }}
                />
                <input
                    type="text"
                    className=""
                    placeholder="Service Category" onChange={(e)=>{
                        setServicecategory(e.target.value)
                    }}
                />
                <input
                    type="textarea"
                    className="service_category"
                    placeholder="Setvice Description" onChange={(e)=>{
                        setServicedescription(e.target.value);
                    }}
                />
                <input type="text" placeholder="servicecharge" onChange={(e)=>{
                    setServicecharge(e.target.value);
                }}></input>
                <input type="text" placeholder="service status" onChange={(e)=>{
                    setServicestatus(e.target.value)
                }}></input>
                <input type="submit" value="Submit" />
               
            </form>
        </div>
    );

}