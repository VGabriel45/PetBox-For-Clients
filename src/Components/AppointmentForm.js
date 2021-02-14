import React from "react";
import userService from "./User/Service/UserService";
import { useHistory } from "react-router-dom";
import AuthService from "./Auth/Components/Service/auth-service";

export default function AppointmentForm() {
  const history = useHistory();
  function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);

    userService.makeAppointment(
      userService.getCurrentUser().id,
      data.get("reason"),
      data.get("date"),
      data.get("time")
    );
    window.location.reload(`/myProfile/${AuthService.getCurrentUser().id}`);
  }

  return (
    <div>
      <form className="form-signin" method="post" onSubmit={submitForm}>
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
          <input type="date" className="form-control" id="date" name="date" />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time of appointment
          </label>
          <input type="time" className="form-control" id="time" name="time" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
