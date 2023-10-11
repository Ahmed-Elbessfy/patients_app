// Helpers
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Mutations
import { ADD_PATIENT } from "../../mutations/patientMutations";

// Nested components
import { Button, Form } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";
import AddPatientInputs from "./AddPatientInputs";

// Styling configuration
import { inputStyle } from "./AddPatientFormStyles";

// Custom Configuration
const telRegex: RegExp =
  /^(0111|0114|0112|0155|0101|0109|0106|0100|0120|0128|0127|0122)\d{7}$/;
// Yup schema to validate inputs values
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  age: yup
    .number()
    .positive()
    .integer()
    .required("Age is required")
    .typeError("Age must be a positive and integer"),
  gender: yup.string().required("Gender is required"),
  country: yup.string().required("Country is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(telRegex, "Please Provide a valid Egyptian mobile phone number"),
});

// interface for from values
interface FormValuesInterface {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  phone: string;
  country: string;
}

const AddPatientForm: FC = () => {
  // allow redirecting after submitting new patient data
  const navigate = useNavigate();

  // configure React Hook Form
  const { control, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
  });

  // perform mutation to add new patient
  const [createPatient] = useMutation(ADD_PATIENT, { variables: { data: {} } });

  // Submitting function
  const submitHandler = (data: FormValuesInterface) => {
    createPatient({
      variables: { key: Math.floor(Math.random() * 1000), ...data },
    });
    // empty fields
    reset();
    // redirect to home page
    navigate("/", { replace: true });
  };

  return (
    <>
      <Button ghost>
        <DoubleLeftOutlined /> <Link to="/">Go back </Link>
      </Button>
      <h1>Add New Patient</h1>
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 15 }}
        onFinish={handleSubmit(submitHandler)}
      >
        {/* Form Inputs  */}
        <AddPatientInputs control={control} errors={formState.errors} />
        {/* Submit Form Button  */}
        <Button type="primary" block style={inputStyle} htmlType="submit">
          Add Patient
        </Button>
      </Form>
    </>
  );
};

export default AddPatientForm;
