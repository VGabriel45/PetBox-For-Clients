import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Appbar from "./Navbar/Appbar";
import ClinicService from "./User/Service/ClinicService";
import ClinicCard from "./ClinicComponents/ClinicCard";

export default function WelcomePage() {
  const { clinics } = ClinicService();

  return (
    <React.Fragment>
      <Appbar />
      <h1 className="title">
        Welcome to petbox, when logging in please use the following format{" "}
        {"{username}"} - {"{clinic name}"}
      </h1>
      {clinics
        ? clinics.map((clinic) => (
            <ClinicCard
              clinicName={clinic.clinicName}
              clinicEmail={clinic.email}
              clinicDescription={clinic.description}
            />
          ))
        : "Loading..."}
    </React.Fragment>
  );
}
