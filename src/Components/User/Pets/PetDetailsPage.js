import React from "react";
import PetDetailsPageLogic from "./PetDetailsPageLogic";
import AuthService from "../../Auth/Components/Service/auth-service";
import PetDetailsHTML from "./PetDetailsHTML";

export default function PetDetailsPage(props) {
  const {
    match: { params },
  } = props;
  const petId = params.petId;

  const currentUser = AuthService.getCurrentUser();

  const {
    pet,
    owner,
    meds,
    healthProblems,
    onChangeImage,
    petImage,
  } = PetDetailsPageLogic({
    customerId: currentUser.id,
    petId: petId,
  });

  return (
    <React.Fragment>
      <PetDetailsHTML
        pet={pet}
        petImage={petImage}
        petOwner={owner}
        meds={meds}
        healthProblems={healthProblems}
      />
      <form>
        <div>
          <input
            type="file"
            id="petImage"
            name="petImage"
            className="form-control"
            onChange={onChangeImage}
          />
        </div>
      </form>
    </React.Fragment>
  );
}
