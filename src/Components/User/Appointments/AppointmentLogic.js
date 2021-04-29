import React, { useEffect, useState } from 'react';
import axios from "axios";
import authHeader from '../../Auth/Components/Service/auth-header';

const API_URL = "http://localhost:8080/customers";

const AppointmentLogic = ({ customerId, appointmentId }) => {

    const [appointmentDetails, setappointmentDetails] = useState();

    useEffect(() => {
        getAppointmentDetails();
    }, [])

    const getAppointmentDetails = () => {
        axios.get(API_URL + `/${customerId}/appointments/${appointmentId}`, {
            headers: authHeader(),
        }).then((res) => setappointmentDetails(res.data));
    };

    return { appointmentDetails }

}

export default AppointmentLogic;
