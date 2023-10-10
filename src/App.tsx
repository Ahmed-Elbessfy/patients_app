// Helpers
import "./App.css";
import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Nested Components
import PatientsPage from "./views/PatientsPage";
import PatientProfile from "./views/PatientProfile";

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PatientsPage />} />
        <Route path="patient/:patient_id" element={<PatientProfile />} />
      </Routes>
    </Router>
  );
};

export default App;

/*

https://www.takeshape.io/articles/how-to-use-graphql-on-the-client-side-with-react-and-typescript/

https://www.youtube.com/watch?v=7wzR4Ig5pTI

https://blog.logrocket.com/mocking-graphql-api-server-using-json-graphql-server/?ref=morioh.com&utm_source=morioh.com

https://www.apollographql.com/docs/react/development-testing/static-typing/

https://www.apollographql.com/docs/react/get-started


*/
