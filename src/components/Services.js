import { useNavigate } from "react-router-dom";
import { ServiceDetails } from "../containers/ServiceDetails";
import React from "react";
import { useState } from "react";
import { getServices } from "../services/MerchantService";
export const Services = () => {
  const [services, setServices] = useState([]);
  React.useEffect(() => {
    console.log("side effect called");
    getData();
  }, []);

  const getData = () => {
    getServices()
      .then((res) => {
        console.log("success");
        setServices(res.data)
      })
      .catch((err) => console.log("error", err))
  }

  const navigate = useNavigate();
  return (
    <div>
      <div class="d-inline-flex gap-1 d-md-flex justify-content-md-center">

        <div class="d-flex justify-content-center">

          <button type="button" class="btn btn-primary std" onClick={(e) => {
            e.preventDefault();
            navigate("/ServiceAdd")
          }}>
            Add

          </button>

          <div class="input-group">

            <span class="input-group-text" id="basic-addon1">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">

                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>

              </svg>

            </span>

            <input type="text" class="form-control" placeholder="Search by Id" aria-label="Search" aria-describedby="basic-addon1" />

          </div>

          <div class="input-group">

            <span class="input-group-text" id="basic-addon1">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">

                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>

              </svg>

            </span>

            <input type="text" class="form-control" placeholder="Search by Name" aria-label="Search" aria-describedby="basic-addon1" />

          </div>

        </div><br />

      </div>
      <div>
        <ServiceDetails services={services} />
      </div>
    </div>
  );

}