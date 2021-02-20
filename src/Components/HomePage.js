import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Appbar from "./Navbar/Appbar";

export default function WelcomePage() {
  return (
    <React.Fragment>
      <Appbar />
      Welcome
    </React.Fragment>
  );
}
