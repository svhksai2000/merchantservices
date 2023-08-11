import React from "react";
export const DisplayServices=(props)=>{
    const DisplayData=props.data.map(
        (info)=>{
            return(
                <tr>
                    <td>{info.serviceId}</td>
                    <td>{info.serviceName}</td>
                    <td>{info.serviceDescription}</td>
                    <td>{info.serviceCategory}</td>
                    <td>{info.serviceCharge}</td>
                    <td>{info.serviceStatus}</td>
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
                <th>serviceDescription</th>
                <th>serviceCategory</th>
                <th>serviceCharge</th>
                <th>serviceStatus</th>
                </tr>
            </thead>
            <tbody>
             
                
                {DisplayData}
                
            </tbody>
        </table>
         
    </div>
    );
}