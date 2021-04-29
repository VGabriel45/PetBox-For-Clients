import React, { useEffect, useState } from 'react'
import axios from "axios";

import firebase from "../../Firebase/firebase";

const API_URL = "http://localhost:8080";

const ClinicService = () => {

    const [clinics, setClinics] = useState([{}]);

    const getAllClinics = async () => {
        const response = await axios.get(`${API_URL}/clinics`);
        setClinics(response.data);
        getImages(response.data);
    }

    async function getImages(array) {
        array.map(async (clinic) => {
            let storageRef = firebase.storage().ref();
            let fileRef = storageRef.child(clinic.clinicName);
            clinic.image = await fileRef.getDownloadURL();
        });
    }

    useEffect(() => {
        getAllClinics();
    }, [])

    if (clinics) return { clinics }

}

export default ClinicService;
