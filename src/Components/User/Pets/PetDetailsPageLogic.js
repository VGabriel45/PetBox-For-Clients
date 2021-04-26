import React, { useState, useEffect } from 'react';
import axios from 'axios';
import authHeader from "../../Auth/Components/Service/auth-header";

import firebase from '../../Firebase/firebase';

const API_URL = "http://localhost:8080/customers";

const PetDetailsPageLogic = ({ customerId, petId }) => {

    const [pet, setPet] = useState({});
    const [petImage, setpetImage] = useState();

    useEffect(() => {
        getPetDetails();
        getImage(petId);
    }, [petImage])

    const getPetDetails = () => {
        axios.get(API_URL + `/${customerId}/pets/${petId}`, {
            headers: authHeader(),
        }).then((res) => setPet(res.data));
    };

    const onChangeImage = async (e) => {
        // setpetImage({ image: e.target.files[0] });
        const file = await e.target.files[0];
        let storageRef = firebase.storage().ref();
        let fileRef = storageRef.child(petId);
        await fileRef.put(file);
        window.location.reload();
    }

    const getImage = async () => {
        var storage = firebase.storage();
        var storageRef = storage.ref();
        let fileRef = storageRef.child(await petId);
        setpetImage(await fileRef.getDownloadURL());
    }

    return { pet, getPetDetails, petImage, onChangeImage };

}

export default PetDetailsPageLogic;

