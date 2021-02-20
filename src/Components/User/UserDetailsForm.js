import React, { useState, useEffect } from "react";
import AuthService from "../Auth/Components/Service/auth-service";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import authHeader from "../Auth/Components/Service/auth-header";
import userService from "./Service/UserService";

export default function UserDetailsForm() {
  const [currentUser, setcurrentUser] = useState(AuthService.getCurrentUser());
  const [user, setuser] = useState({});

  const history = useHistory();

  async function getUser() {
    return userService.getUser(currentUser.id).then((res) => setuser(res.data));
  }

  const onChangeHandler = (e) => {
    setuser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    axios.put(
      `http://localhost:8080/customers/${currentUser.id}`,
      {
        id: currentUser.id,
        firstName: data.get("firstName"),
        lastName: data.get("lastName"),
        address: data.get("address"),
        phoneNumber: data.get("phoneNumber"),
        gender: data.get("gender"),
        age: data.get("age"),
        lastSeen: new Date(),
      },
      { headers: authHeader() }
    );
    history.push(`/myProfile/${currentUser.id}`);
    window.location.reload(`/myProfile/${currentUser.id}`);
  }

  return (
    <div>
      <Container
        style={{
          border: "white",
          height: "100%",
          width: "50%",
          margin: "auto",
          marginTop: "5%",
        }}
      >
        <Link to={`/myProfile/${currentUser.id}`}>Back to profile</Link>
        <h1>Update details</h1>
        <form
          className="form-signin"
          method="post"
          action="/customers"
          onSubmit={submitForm}
        >
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              onChange={onChangeHandler}
              value={user.firstName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              onChange={onChangeHandler}
              value={user.lastName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              onChange={onChangeHandler}
              value={user.phoneNumber}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-select form-select-sm mb-3"
              aria-label=".form-select-sm example"
              id="gender"
              name="gender"
              onChange={onChangeHandler}
              value={user.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={onChangeHandler}
              value={user.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              onChange={onChangeHandler}
              value={user.address}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              type="text"
              className="form-control"
              id="age"
              name="age"
              onChange={onChangeHandler}
              value={user.age}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Container>
    </div>
  );
}
