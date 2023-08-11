import axios from "axios";
export const getMerchants=()=>{
    const url="http://localhost:8080/merchants/all";
   
    return axios.get(url);
}

export const getBusinessCategories=()=>{
  const url="http://localhost:8080/businessCategory/all";
    
    console.log("business cat")
    return axios.get(url);
}

export const getServices=()=>{
    const url="http://localhost:8080/services/all";
    return axios.get(url);
}

