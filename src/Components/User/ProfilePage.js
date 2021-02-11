import React, { useState, useEffect } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import AuthService from "../Auth/Components/Service/auth-service";
import axios from "axios";
import authHeader from "../Auth/Components/Service/auth-header";
import userService from "./Service/UserService";

export default function Profile(props) {
  const [currentUser, setcurrentUser] = useState(AuthService.getCurrentUser());
  const [user, setuser] = useState({});
  const [userPets, setuserPets] = useState([]);
  const [appointments, setappointments] = useState([]);
  const [questions, setquestions] = useState([]);

  useEffect(() => {
    getUser();
    getPets();
    getCustomerAppointments();
    getCustomerQuestions();
  }, []);

  async function getUser() {
    return userService.getUser(currentUser.id).then((res) => setuser(res.data));
  }

  function getPets() {
    return userService
      .getCustomerPets(currentUser.id)
      .then((res) => setuserPets(res.data));
  }

  function getCustomerAppointments() {
    return userService
      .getCustomerAppointments(currentUser.id)
      .then((res) => setappointments(res.data));
  }

  function getCustomerQuestions() {
    return userService
      .getCustomerQuestions(currentUser.id)
      .then((res) => setquestions(res.data));
  }

  return (
    <div>
      <ul>
        <li>Username: {currentUser.username}</li>
        <li>First Name: {user.firstName}</li>
        <li>Last Name: {user.lastName}</li>
        <li>Your address: {user.address}</li>
        <li>Phone number: {user.phoneNumber}</li>
      </ul>
      <br />
      Your pets :
      <br />
      <ul>
        {userPets.map((pet) => (
          <li key={pet.id}>
            {pet.name} - {pet.race}
          </li>
        ))}
      </ul>
      <br />
      Your appointments:
      <br />
      <ul>
        {appointments.map((app) => (
          <li>
            {app.reason} - {app.dateOfAppointment} -{" "}
            {app.accepted ? "Accepted" : "Declined"}
          </li>
        ))}
      </ul>
      Your questions:
      <br />
      <ul>
        {questions.map((q) => (
          <li>
            {q.text} - {q.date} - {q.solved ? "Answered" : "Not yet answered"}
            <br />
            <p>Response: {q.response}</p>
          </li>
        ))}
      </ul>
      <br />
      <hr />
      <div>
        <h2>Make an appointment</h2>
        
      </div>
    </div>
  );
}
