import React, { useState, useEffect } from "react";
import userService from "./Service/UserService";
import { useHistory } from "react-router-dom";
import AuthService from "../Auth/Components/Service/auth-service";
import { Link } from "react-router-dom";

import { CardContent, CardHeader, Grid } from "@material-ui/core";
import Appbar from "../Navbar/Appbar";
import LinearBuffer from "../LoadingComponents/LinearBuffer";

export default function AppointmentForm() {
  const history = useHistory();
  const [currentUser, setcurrentUser] = useState(AuthService.getCurrentUser());
  const [customerPets, setcustomerPets] = useState({});
  const [appointmentSent, setappointmentSent] = useState(false);
  const [notification, setnotification] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    getCustomerPets();
  }, [appointmentSent]);

  function submitForm(e) {
    e.preventDefault();
    setloading(true);
    setTimeout(() => {
      setappointmentSent(true);
      setnotification("You made an appointment !");
      setloading(false);
    }, 1500);

    const data = new FormData(e.target);

    userService.makeAppointment(
      userService.getCurrentUser().id,
      data.get("reason"),
      data.get("date"),
      data.get("time")
    );
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
                  required
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
                  required
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
                  required
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
        {loading ? (
          <LinearBuffer />
        ) : (
          <div>
            {appointmentSent ? (
              <div class="notification is-primary">
                <h2>{notification}</h2>
              </div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}
