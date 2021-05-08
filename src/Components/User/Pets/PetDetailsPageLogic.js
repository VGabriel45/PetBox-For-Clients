import React, { useState, useEffect } from "react";
import axios from "axios";
import authHeader from "../../Auth/Components/Service/auth-header";

import firebase from "../../Firebase/firebase";

const API_URL = "http://localhost:8080/customers";

const PetDetailsPageLogic = ({ customerId, petId }) => {
  const [pet, setPet] = useState({});
  const [petImage, setpetImage] = useState();
  const [owner, setowner] = useState({});
  const [meds, setmeds] = useState("");
  const [healthProblems, sethealthProblems] = useState("");

  useEffect(() => {
    getPetDetails();
    getImage(petId);
    getPetOwner();
    getPetMedicaments();
    getHealthProblems();
  }, [petImage]);

  const getPetDetails = () => {
    axios
      .get(API_URL + `/${customerId}/pets/${petId}`, {
        headers: authHeader(),
      })
      .then((res) => setPet(res.data));
  };

  const onChangeImage = async (e) => {
    const file = await e.target.files[0];
    let storageRef = firebase.storage().ref();
    let fileRef = storageRef.child(petId);
    await fileRef.put(file);
    window.location.reload();
  };

  const getImage = async () => {
    var storage = firebase.storage();
    var storageRef = storage.ref();
    let fileRef = storageRef.child(await petId);
    setpetImage(await fileRef.getDownloadURL());
  };

  async function getPetOwner() {
    await axios
      .get(`http://localhost:8080/customers/${customerId}`, {
        headers: authHeader(),
      })
      .then((res) => {
        setowner(res.data);
      });
  }

  async function getPetMedicaments() {
    await axios
      .get(`http://localhost:8080/meds/pet/${petId}`, {
        headers: authHeader(),
      })
      .then((res) => {
        setmeds(res.data);
      });
  }

  async function getHealthProblems() {
    await axios
      .get(`http://localhost:8080/healthProblems/pet/${petId}`, {
        headers: authHeader(),
      })
      .then((res) => {
        sethealthProblems(res.data);
      });
  }

  return {
    pet,
    owner,
    meds,
    healthProblems,
    getPetDetails,
    petImage,
    onChangeImage,
  };
};

export default PetDetailsPageLogic;
