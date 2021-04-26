import React from 'react';
import PetDetailsPageLogic from './PetDetailsPageLogic';
import AuthService from "../../Auth/Components/Service/auth-service";

import firebase from '../../firebase/firebase';

export default function PetDetailsPage(props) {

    const {
        match: { params },
    } = props;
    const petId = params.petId;

    const currentUser = AuthService.getCurrentUser();
    const { pet, onChangeImage, petImage } = PetDetailsPageLogic({ customerId: currentUser.id, petId: petId });

    return (
        <React.Fragment>
            <h1>
                Pet name: {pet.name} - {pet.type}
            </h1>
            <h1>Pet race: {pet.race}</h1>
            <h1>Pet age: {pet.age}</h1>
            <h1>Pet color: {pet.color}</h1>
            <img src={petImage} alt="petImage" />
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
