import React, { useState, useEffect } from "react";
import Appbar from "../../Navbar/Appbar";

import "../../../Styles/PetDetails.css";

const PetPageHTML = ({ pet, petImage, petOwner, meds, healthProblems }) => {
  const [defaultImage, setdefaultImage] = useState("");

  useEffect(() => {
    generatePetDefaultImage();
  }, [pet]);

  const generatePetDefaultImage = () => {
    if (pet.type == "Dog") {
      setdefaultImage(
        "https://iconfair.com/cepsools/2020/08/38-AiredaleDog-image-vector-icon.png"
      );
    } else if (pet.type == "Cat") {
      setdefaultImage(
        "https://webstockreview.net/images/cat-clipart-icon-6.png"
      );
    } else if (pet.type == "Hamster") {
      setdefaultImage(
        "https://image.flaticon.com/icons/png/512/196/196817.png"
      );
    } else if (pet.type == "Bird") {
      setdefaultImage(
        "https://media1.thehungryjpeg.com/thumbs2/ori_3674238_uya088ldlvxzri98nt915rxqz7wa7ge2xzyh5pxf_cute-little-bird-icon.jpg"
      );
    } else if (pet.type == "Rabitt") {
      setdefaultImage(
        "data:image/png;base64,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"
      );
    }
  };

  return (
    <>
      <Appbar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "80%",
          }}
        >
          <div class="main-body">
            <div class="row gutters-sm">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex flex-column align-items-center text-center">
                      <img
                        src={petImage ? petImage : defaultImage}
                        alt="Admin"
                        class="rounded-circle"
                        width="150"
                      />
                      <div style={{ marginTop: "50px" }}>
                        <h4>{pet.name}</h4>
                        <p class="text-secondary mb-1">{pet.type}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mt-3">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0">Has vaccine:</h6>
                      <div>
                        <span
                          class="text-secondary"
                          style={{ marginRight: "10px" }}
                        >
                          {pet.hasVaccine ? "Yes" : "No"}
                        </span>
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0">Is sick:</h6>
                      <div>
                        <span
                          class="text-secondary"
                          style={{ marginRight: "10px" }}
                        >
                          {pet.isSick ? "Yes" : "No"}
                        </span>
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0">Is alergic:</h6>
                      <div>
                        <span
                          class="text-secondary"
                          style={{ marginRight: "10px" }}
                        >
                          {pet.isAlergic ? "Yes" : "No"}
                        </span>
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0">Has injuries:</h6>
                      <div>
                        <span
                          class="text-secondary"
                          style={{ marginRight: "10px" }}
                        >
                          {pet.hasInjuries ? "Yes" : "No"}
                        </span>
                      </div>
                    </li>
                    <br />
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0">Weight: </h6>
                      <span class="text-secondary">{pet.weight} kg</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0">Age: </h6>
                      <span class="text-secondary">{pet.age} </span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                      <h6 class="mb-0">Color: </h6>
                      <span class="text-secondary">{pet.color} </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-8">
                <div class="card mb-3">
                  <div class="card-body">
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Owner name</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {petOwner.firstName} {petOwner.lastName}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Owner email</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {petOwner.email}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Owner phone</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {petOwner.phoneNumber}
                      </div>
                    </div>
                    <hr />
                    <div class="row">
                      <div class="col-sm-3">
                        <h6 class="mb-0">Owner address</h6>
                      </div>
                      <div class="col-sm-9 text-secondary">
                        {petOwner.address}
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <div class="row gutters-sm">
                  <div class="col-sm-6 mb-3">
                    <div class="card h-100">
                      <div class="card-body">
                        <h6 class="d-flex align-items-center mb-3 title">
                          Meds taken:
                        </h6>
                        {meds.length > 0 ? (
                          meds.map((med) => <p>- {med.name}</p>)
                        ) : (
                          <div>
                            No meds taken
                            <br />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 mb-3">
                    <div class="card h-100">
                      <div class="card-body">
                        <h6 class="d-flex align-items-center mb-3 title">
                          Other problems:
                        </h6>
                        {healthProblems.length > 0 ? (
                          healthProblems.map((hp) => <p>- {hp.name}</p>)
                        ) : (
                          <div>
                            No problems
                            <br />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetPageHTML;
