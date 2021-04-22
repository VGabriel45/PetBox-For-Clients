import React, { useEffect } from 'react';
import PetDetailsPageLogic from './PetDetailsPageLogic';
import AuthService from "../../Auth/Components/Service/auth-service";

export default function PetDetailsPage(props) {

    const {
        match: { params },
    } = props;
    const petId = params.petId;

    const currentUser = AuthService.getCurrentUser();
    const { pet } = PetDetailsPageLogic({ customerId: currentUser.id, petId: petId });

    return (
        <React.Fragment>
            <h1>
                Pet name: {pet.name} - {pet.type}
            </h1>
            <h1>Pet race: {pet.race}</h1>
            <h1>Pet age: {pet.age}</h1>
            <h1>Pet color: {pet.color}</h1>
        </React.Fragment>
    );
}
