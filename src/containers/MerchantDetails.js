import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const MerchantDetails=(props)=>{
  const navigate=useNavigate();
    const params=useParams();
    function updateform(e){
    e.preventDefault();
        navigate("/MerchantUpdate")
    }
  return(
    <div>
          <h1>This is merchant Det Page {params.id}</h1>
            <button onClick={updateform}>Update</button>
           
    </div>
  
  );
}