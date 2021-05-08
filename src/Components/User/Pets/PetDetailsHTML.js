import React from "react";
import Appbar from "../../Navbar/Appbar";

import "../../../Styles/PetDetails.css";

const PetPageHTML = ({ pet, petImage, petOwner, meds, healthProblems }) => {
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
                        src={
                          petImage
                            ? petImage
                            : "https://img.icons8.com/ios/452/pets--v1.png"
                        }
                        alt="Admin"
                        class="rounded-circle"
                        width="150"
                      />
                      <div class="mt-3">
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
