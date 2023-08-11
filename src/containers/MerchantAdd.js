import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getBusinessCategories, getServices } from "../services/MerchantService";
import axios from "axios";
export const MerchantAdd = () => {
    const navigate = useNavigate();
    const [merchantId, setmerchantId] = useState("");
    const [merchantName, setmerchantName] = useState("");
    const [companyName, setcompanyName] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");
    const [gstinNo, setgstinNo] = useState("");
    const [businessCategoryid, setbusinessCategoryid] = useState("");
    const [businessCategories, setbusinessCategories] = useState([]);
    const [services, setServices] = useState([]);
    const [arr, setArr] = useState([]);
    React.useEffect(() => getData(), []);

    const [msId, setmsid] = useState("");
    const [startDate, setstartDate] = useState("");
    const [duration, setduration] = useState("2 years");

    const [serviceId, setserviceId] = useState("");
    const [serviceName, setServiceName] = useState("");
    function getData() {

        getBusinessCategories().then(res => setbusinessCategories(res.data))
            .catch((err) => console.log(err));
        getServices().then(res => setServices(res.data)).catch((err) => {
            console.log(err);
        });

    }
    function submitform(e) {
        e.preventDefault();

        const businessCategory = businessCategories.filter(item => { if (item.bizId === businessCategoryid) return item });
        const Mdata = { merchantId, merchantName, companyName, mobileNo, email, address, gstinNo, businessCategory };
        const Murl = "http://localhost:8080/merchant/";
        axios.post(Murl, Mdata);
        const Msurl = "http://localhost:8080/merchantServiceAgreement/";
        for (let i = 0; i < arr.length; i++) {

            const service = services.filter((item) => { if (item.serviceId === arr[i]) { return item } });
            const Msdata = { msId, startDate, duration, Mdata, service }

            axios.post(Msurl, Msdata);
        }
        navigate("/Merchant");
    }

    function handleChange(e) {
        if (e.target.checked === true) {
            setArr([...arr, e.target.value]);
        }
        else {
            var filtered = arr.filter(function (value, index, arr) {
                return value != e.target.value;
            });
            setArr(filtered);
        }
    }
    return (
        <div className="mb-3" style={{width:300}}>
            <form className="mb-3" onSubmit={submitform}>
                <input className="form-control" id="CompanyName" type="text" name="CompanyName" placeholder="Company Name" onChange={(e) => setcompanyName(e.target.value)}></input>
                <input className="form-control" id="MerchantName" type="text" name="MerchantName" placeholder="Merchant Name" onChange={(e) => setmerchantName(e.target.value)}></input>
                <input className="form-control" id="MobileNo" type="text" name="MobileNo" placeholder="Mobile Number" onChange={(e) => setMobileNo(e.target.value)}></input>
                <input className="form-control" id="Email" type="text" name="Email" placeholder="Email" onChange={(e) => setemail(e.target.value)}></input>
                <input className="form-control" id="Address" type="textarea" name="Address" placeholder="Address" onChange={(e) => setaddress(e.target.value)}></input>
                <input className="form-control" id="Gstin" type="text" name="Gstin" placeholder="Gstin" onChange={(e) => setgstinNo(e.target.value)}></input>
                <select className="form-control" onChange={(e) => setbusinessCategoryid(e.target.value)}>
                    {
                        businessCategories.map((item) => {
                            return <option name="businesscategory" value={item.bizId}>{item.bizCatName}</option>
                        })
                    }
                </select>
                {
                    services.map((item) => {
                        return <input type="checkbox" value={item.serviceId}>{item.serviceName}</input>
                    })
                }




                <button type="submit" onSubmit={submitform}>Add Merchant</button>
            </form>

        </div>

    );
}