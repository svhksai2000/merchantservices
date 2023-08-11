import React, { useState } from "react";
import { MerchantDisplay } from "../containers/MerchantDisplay";
import { useNavigate } from "react-router-dom";
import { MerchantService, getMerchants } from "../services/MerchantService";
import axios from "axios";

export const Merchant = () => {
  const [merchants,setMerchants]=useState([]);
  const [name,setName]=useState("");
  const navigate = useNavigate();
  function submitform(e) {
    e.preventDefault();
    navigate("/MerchantAdd")
  }
  function handleNameSearch(name) {

    const newarr = merchants.filter(s => s.productName.includes(name));
    if (newarr.length > 0) {
      setMerchants(newarr);
    }
    if (newarr.length == 0) {
      setMerchants(merchants);
    }

  }
  React.useEffect(() => {
    console.log("side effect called");
    getData();
  }, []);

  const getData = () => {
    getMerchants()
      .then((res) => {
        console.log("success");
        setMerchants(res.data)
      })
      .catch((err) => console.log("error", err))
  }
  return (
    <div>

      <button onClick={submitform}>Add</button>


      <form className="justify-content-center" onSubmit={(e) => {
        e.preventDefault();
      }}>
        <div className="mb-3 form-control mb-3 ">
          <label className="form-label">Search</label>
          <input type="text" placeholder="Search Merchant By Id" onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
           
           handleNameSearch(name);
          }}></input>
        </div>
      </form>
      <MerchantDisplay merchants={merchants} />
    </div>
  );
}