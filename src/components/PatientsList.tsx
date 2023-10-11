// Helpers
import { FC } from "react";
import { Link } from "react-router-dom";
import { Patient } from "../__generated__/graphql";

// Nested Components
import { Table, Button } from "antd";

interface PatientsInterface {
  patientsData: Patient[];
}

// AntD styling configuration
const { Column } = Table;

const PatientsList: FC<PatientsInterface> = ({ patientsData }) => {
  return (
    <>
      <h1>Patients List</h1>
      <Button style={{ marginBottom: "2rem" }}>
        <Link to="/add_patient">Add New Patient</Link>
      </Button>
      <Table dataSource={patientsData}>
        <Column
          title="First Name"
          dataIndex="firstName"
          key="firstName"
          render={(text, record: Patient) => (
            <Link to={`/patient/${record.id}`}>{text}</Link>
          )}
        />
        <Column
          title="Last Name"
          dataIndex="lastName"
          key="lastName"
          render={(text, record: Patient) => (
            <Link to={`/patient/${record.id}`}>{text}</Link>
          )}
        />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Gender" dataIndex="gender" key="gender" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column title="Country" dataIndex="country" key="country" />
      </Table>
    </>
  );
};

export default PatientsList;
