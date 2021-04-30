import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../Auth/Components/Service/auth-header";

const API_URL = "http://localhost:8080/customers";

const FormValidationLogic = ({ username, email }) => {
  const [usernameValid, setusernameValid] = useState(false);
  const [emailValid, setemailValid] = useState(false);

  useEffect(() => {
    checkForEmail();
    checkForUsername();
  }, [email, username]);

  const checkForUsername = async () => {
    // CHECK IF USERNAME EXISTS IN DATABASE
    // const response = await axios.post(API_URL + "/checkIfUsernameExists", {
    //   username,
    // });
    // setusernameExists(response.data);

    setusernameValid(
      username.length >= 10 && username.length <= 25 && username.includes(" - ")
    );
  };

  const checkForEmail = () => {
    // CHECK IF USERNAME EXISTS IN DATABASE
    // return axios.post(API_URL + "/checkIfEmailExists", { email });

    setemailValid(
      (email.length >= 12 &&
        email.length <= 50 &&
        email.includes("@gmail.com")) ||
        email.includes("@yahoo.com")
    );
  };

  return { checkForUsername, checkForEmail, usernameValid, emailValid };
};

export default FormValidationLogic;
