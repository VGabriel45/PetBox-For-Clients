import React, { useState, useEffect } from "react";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import AuthService from "../Auth/Components/Service/auth-service";
import axios from "axios";
import authHeader from "../Auth/Components/Service/auth-header";
import userService from "./Service/UserService";
import AppointmentForm from "../AppointmentForm";
import QuestionForm from "../QuestionForm";

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

  function formatDateWithoutTime(date) {
    var parsedDate = new Date(date);
    return parsedDate.toLocaleDateString();
  }

  function formatDateWithTime(date) {
    var dateFormat = require("dateformat");
    var parsedDate = new Date(date);
    return dateFormat(parsedDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
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
      <hr />
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
      <hr />
      Your appointments:
      <br />
      <ul>
        {appointments.map((app) => (
          <li>
            {app.reason} - {formatDateWithoutTime(app.dateOfAppointment)} - At{" "}
            {app.hour} - Status:{" "}
            {app.accepted ? (
              <p style={{ color: "green" }}>Accepted</p>
            ) : (
              <p style={{ color: "red" }}>Declined</p>
            )}
          </li>
        ))}
      </ul>
      <hr />
      Your questions:
      <br />
      <ul>
        {questions.map((q) => (
          <li>
            {q.text} - {formatDateWithTime(q.date)} -{" "}
            {q.solved ? "Answered" : "Not yet answered"} -{" "}
            {q.seen ? (
              <small style={{ color: "green" }}>Seen</small>
            ) : (
              <small style={{ color: "red" }}>Not seen</small>
            )}
            <br />
            <p>Response: {q.response ? q.response : "Waiting for response"}</p>
          </li>
        ))}
      </ul>
      <br />
      <hr />
      <div>
        <h2>Make an appointment</h2>
        <AppointmentForm />
      </div>
      <br />
      <div>
        <h2>Ask a question</h2>
        <QuestionForm />
      </div>
    </div>
  );
}
