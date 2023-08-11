import React from "react";
import { useNavigate } from "react-router-dom";
export const MerchantUpdate=()=>{
    const navigate=useNavigate();
    function submitform(e){
        e.preventDefault();
        navigate("/Merchant");
    }
    return(
        <div className="mb-3">
        <form className="mb-3" onSubmit={submitform}>
              <input className="form-control" id="CompanyName" type="text" name="CompanyName" placeholder="Company Name"></input>
              <input className="form-control" id="MerchantName" type="text" name="MerchantName" placeholder="Merchant Name"></input>
              <input className="form-control" id="MobileNo" type="text" name="MobileNo" placeholder="Mobile Number"></input>
              <input className="form-control" id="Email" type="text" name="Email" placeholder="Email"></input>
              <input className="form-control" id="Address" type="textarea" name="Address" placeholder="Address"></input>
              <input className="form-control" id="Gstin" type="text" name="Gstin" placeholder="Gstin"></input>
              <select className="form-control">
                  <option value="Groceries">Groceries</option>
                  <option value="Food and Beverages">Food and Beverages</option>
              </select>
              <button type="submit">UpdateMerchant</button>
          </form>
      
    </div>
    );
}