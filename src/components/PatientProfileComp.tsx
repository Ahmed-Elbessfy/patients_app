// Helpers
import { FC, CSSProperties } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, TypedDocumentNode } from "@apollo/client";
import { GET_PATIENT } from "../queries/patientsQueries";

// Nested Components
import { DoubleLeftOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";

// AntD styling configuration
const { Text } = Typography;
const gridStyle: CSSProperties = {
  width: "50%",
  textAlign: "left",
};

const PatientProfileComp: FC = () => {
  // Get current Patient ID to fetch patient data
  const { patient_id } = useParams();

  // Fetching Single Patient data
  const { data } = useQuery<TypedDocumentNode>(GET_PATIENT, {
    variables: { patient_id },
  });

  // Loading while fetching data
  if (!data) return <p>Loading ...</p>;

  return (
    <>
      <Link to="/">
        {" "}
        <DoubleLeftOutlined /> Back to Patients List
      </Link>

      <Card title={`${data.Patient.firstName} ${data.Patient.lastName}`}>
        {/* first Row  */}
        <Card.Grid style={gridStyle}>
          Age: <Text strong> {data.Patient.age}</Text>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          Gender:
          <Text strong> {data.Patient.gender}</Text>
        </Card.Grid>
        {/* second Row  */}
        <Card.Grid style={gridStyle}>
          Phone: <Text strong> {data.Patient.phone}</Text>
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          Country: <Text strong> {data.Patient.country}</Text>
        </Card.Grid>
      </Card>
    </>
  );
};

export default PatientProfileComp;
