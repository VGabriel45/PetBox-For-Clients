import React from 'react';
import AuthService from "./../../Auth/Components/Service/auth-service";
import AppointmentLogic from "./AppointmentLogic";

export default function AppointmentDetailsPage(props) {

    const {
        match: { params },
    } = props;

    const appointmentId = params.appointmentId;
    const currentUser = AuthService.getCurrentUser();

    const { appointmentDetails } = AppointmentLogic({ customerId: currentUser.id, appointmentId: appointmentId });

    return (
        <React.Fragment>
            {appointmentDetails ?
                <div>
                    <h3>{appointmentDetails.reason}</h3>
                    <h4>{appointmentDetails.date}</h4>
                </div>
                : "Loading..."}
        </React.Fragment>
    );
}
