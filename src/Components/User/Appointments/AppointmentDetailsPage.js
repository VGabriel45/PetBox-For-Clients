import React, { version } from "react";
import AuthService from "./../../Auth/Components/Service/auth-service";
import AppointmentLogic from "./AppointmentLogic";

export default function AppointmentDetailsPage(props) {
  const {
    match: { params },
  } = props;

  const appointmentId = params.appointmentId;
  const currentUser = AuthService.getCurrentUser();

  const { appointmentDetails } = AppointmentLogic({
    customerId: currentUser.id,
    appointmentId: appointmentId,
  });

  return (
    <React.Fragment>
      {appointmentDetails ? (
        <div>
          <h3>Reason of appointment: {appointmentDetails.reason}</h3>
          <p>Date of appointment: {appointmentDetails.dateOfAppointment}</p>
          <p>Hour of appointment: {appointmentDetails.hour}</p>
          <p>
            Status of appointment:{" "}
            {appointmentDetails.accepted
              ? "Appoinment accepted"
              : "Appointment declined"}
          </p>
        </div>
      ) : (
        "Loading..."
      )}
    </React.Fragment>
  );
}
