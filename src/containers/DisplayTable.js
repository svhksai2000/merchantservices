import React from "react";
export const DisplayTable=(props)=>{
    const DisplayData=props.merchants.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.merchantId}</td>
                    <td>{info.merchantName}</td>
                    <td>{info.companyName}</td>
                    <td>{info.mobileNo}</td>
                    <td>{info.email}</td>
                    <td>{info.address}</td>
                </tr>
            )
        }
    )
    return(
        <div>
        <table class="table table-striped">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>companyName</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Address</th>
                </tr>
            </thead>
            <tbody>
             
                
                {DisplayData}
                
            </tbody>
        </table>
         
    </div>
    );
}