import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Appbar from "./Navbar/Appbar";
import ClinicService from "./User/Service/ClinicService";

export default function WelcomePage() {

  const { clinics } = ClinicService();

  return (
    <React.Fragment>
      <Appbar />
      <h3>Welcome to petbox, when logging in please use the following format {"{username}"} - {"{clinic name}"}</h3>
      {clinics ? clinics.map((clinic) =>
        <div style={{ backgroundColor: "gray", margin: "10px", width: "25%" }}>
          <p>{clinic.clinicName}</p>
          <p>{clinic.email}</p>
          {/* {clinic.image ? console.log(clinic.image) : console.log("loading")} */}
          {console.log(clinic)}

        </div>
      )
        : "Loading..."}
    </React.Fragment>
  );
}
