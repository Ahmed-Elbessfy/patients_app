import { FC } from "react";
import AddPatientForm from "../components/addPatientComponents/AddPatientForm";
import { useNavigate } from "react-router-dom";

const AddPatientPage: FC = () => {
  // allow redirecting after submitting new patient data
  const navigate = useNavigate();

  // redirect to home page
  const redirectToHome = () => navigate("/", { replace: true });
  return (
    <div>
      <AddPatientForm redirect={redirectToHome} />
    </div>
  );
};

export default AddPatientPage;
