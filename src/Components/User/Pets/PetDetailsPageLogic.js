import React, { useState, useEffect } from 'react';
import axios from 'axios';
import authHeader from "../../Auth/Components/Service/auth-header";

const API_URL = "http://localhost:8080/customers";

const PetDetailsPageLogic = ({ customerId, petId }) => {

    useEffect(() => {
        getPetDetails();
    }, [])

    const [pet, setPet] = useState({});

    const getPetDetails = () => {
        axios.get(API_URL + `/${customerId}/pets/${petId}`, {
            headers: authHeader(),
        }).then((res) => setPet(res.data));
    };

    return { pet, getPetDetails };

}

export default PetDetailsPageLogic;

