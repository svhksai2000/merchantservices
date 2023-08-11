import React from "react";
import { DisplayTable } from "./DisplayTable";
export const MerchantDisplay=(props)=>{
  console.log(props);
  const merchants=props.merchants;
  return(
    <DisplayTable merchants={merchants}/>
  );
}