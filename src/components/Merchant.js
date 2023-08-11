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

// return (
//         <div class="d-inline-flex gap-1 d-md-flex justify-content-md-center">
//             <div class="d-flex justify-content-center">
//                 <button onClick={submitform} type="button" class="btn btn-primary std" >
//                     Add
//                 </button>
//                 <form className="justify-content-center" onSubmit={(e) => {
//                     e.preventDefault();
//                 }}>
//                     <div class="input-group">
//                     <span class="input-group-text" id="basic-addon1">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//                             <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
//                         </svg>
//                     </span>
//                     <input type="text" class="form-control" placeholder="Search Merchant by Id" aria-label="Search" aria-describedby="basic-addon1" onChange={(e) => {
//                         e.preventDefault();
//                         setName(e.target.value);

//                         handleNameSearch(name);
//                     }} />
//                 </div>
//                 </form>   
//             </div>
//         </div>

//     )
