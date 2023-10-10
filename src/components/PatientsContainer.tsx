// Helpers
import { FC } from "react";
import { useQuery } from "@apollo/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GET_PATIENTS_LIST } from "../queries/patientsQueries";

// Nested Components
import PatientsList from "./PatientsList";

const PatientsContainer: FC = () => {
  // Fetching All Patients Data
  const { data } = useQuery<TypedDocumentNode>(GET_PATIENTS_LIST);

  // Loading while fetching data
  if (!data) return <p>Loading ...</p>;

  return <>{data && <PatientsList patientsData={data.allPatients} />}</>;
};

export default PatientsContainer;
