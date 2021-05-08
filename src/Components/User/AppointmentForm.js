import React, { useState, useEffect } from "react";
import userService from "./Service/UserService";
import { useHistory } from "react-router-dom";
import AuthService from "../Auth/Components/Service/auth-service";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
} from "@material-ui/core";
import Appbar from "../Navbar/Appbar";

export default function AppointmentForm() {
  const history = useHistory();
  const [currentUser, setcurrentUser] = useState(AuthService.getCurrentUser());
  const [customerPets, setcustomerPets] = useState({});

  useEffect(() => {
    getCustomerPets();
  }, []);

  function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    userService.makeAppointment(
      userService.getCurrentUser().id,
      data.get("reason"),
      data.get("date"),
      data.get("time")
    );
    history.push(`/myProfile/${AuthService.getCurrentUser().id}`);
  }

  async function getCustomerPets() {
    const resp = await userService.getCustomerPets(currentUser.id);
  }

  return (
    <div>
      <Appbar />
      <div
        className="box"
        style={{ width: "50%", margin: "0 auto", marginTop: "10%" }}
      >
        <form className="form-signin" method="post" onSubmit={submitForm}>
          <CardContent style={{ width: "50%", margin: "auto" }}>
            <CardHeader
              subheader="We will respond as fast as possible."
              title="Make an appointment"
            />
            <Link to={`/myProfile/${currentUser.id}`}>Back to profile</Link>
            <Grid>
              <div className="mb-3">
                <label htmlFor="reason" className="form-label">
                  Reason of appointment
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="reason"
                  name="reason"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Date of appointment
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="time" className="form-label">
                  Time of appointment
                </label>
                <input
                  type="time"
                  className="form-control"
                  id="time"
                  name="time"
                />
              </div>
              {console.log(customerPets)}
              {/* <select name="pets" id="pets" defaultValue="Select a pet">{customerPets.map((p) => <option value={p.name}></option>)}</select> */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Grid>
          </CardContent>
        </form>
      </div>
    </div>
  );
}
