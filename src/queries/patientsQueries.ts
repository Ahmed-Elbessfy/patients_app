// Helpers
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import {gql} from "@apollo/client"

export const GET_PATIENTS_LIST: TypedDocumentNode = gql`
  query {
    allPatients {
      id
      firstName
      lastName
      age
      gender
      country
      phone
    }
  }
`;


export  const GET_PATIENT: TypedDocumentNode = gql`
    query getPatient($patient_id: ID!) {
      Patient(id: $patient_id) {
        id
        key
        firstName
        lastName
        age
        gender
        phone
        country
      }
    }
  `;
