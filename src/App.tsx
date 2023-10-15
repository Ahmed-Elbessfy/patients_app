// Helpers
import "./App.css";
import { FC, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Nested Components
import PatientsPage from "./views/PatientsPage";
import PatientProfile from "./views/PatientProfile";
import AddPatientPage from "./views/AddPatientPage";

const App: FC = () => {
  return (
    <Suspense fallback={<p>.... Loading</p>}>
      <Router>
        <Routes>
          <Route path="/" element={<PatientsPage />} />
          <Route path="/patient/:patient_id" element={<PatientProfile />} />
          <Route path="/add_patient" element={<AddPatientPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
