// Helpers
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";
// Mutations
import { ADD_PATIENT } from "../../mutations/patientMutations";

// Nested components
import { Button, Form, Select, ConfigProvider } from "antd";
import AddPatientInputs from "./AddPatientInputs";
import GoHomeButton from "../GoHomeButton";

// Styling configuration
import { inputStyle } from "./AddPatientFormStyles";

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

  // configure i18n
  const { t, i18n } = useTranslation("lang");
  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  // configure React Hook Form
  // Custom Configuration
  const telRegex: RegExp =
    /^(0111|0114|0112|0155|0101|0109|0106|0100|0120|0128|0127|0122)\d{7}$/;
  // Yup schema to validate inputs values
  const schema = yup.object().shape({
    firstName: yup.string().required(t("formInputs.firstNameInput.errorText")),
    lastName: yup.string().required(t("formInputs.lastNameInput.errorText")),
    age: yup
      .number()
      .positive()
      .integer(t("formInputs.ageInput.errorText.validation"))
      .required(t("formInputs.ageInput.errorText.required"))
      .min(1, t("formInputs.ageInput.errorText.validation")),
    gender: yup.string().required(t("formInputs.genderInput.errorText")),
    country: yup.string().required(t("formInputs.countryInput.errorText")),
    phone: yup
      .string()
      .required(t("formInputs.phoneInput.errorText.required"))
      .matches(telRegex, t("formInputs.phoneInput.errorText.validation")),
  });

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
    <ConfigProvider direction={i18n.language == "ar" ? "rtl" : "ltr"}>
      <GoHomeButton />
      <h1>{t("main.formHeader")}</h1>
      <Select
        defaultValue="en"
        style={{ width: 100, marginBottom: "1rem" }}
        placeholder="Select Language"
        options={[
          { value: "en", label: "English" },
          { value: "ar", label: "العربية" },
        ]}
        onChange={switchLanguage}
      />
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 15 }}
        onFinish={handleSubmit(submitHandler)}
      >
        {/* Form Inputs  */}
        <AddPatientInputs control={control} errors={formState.errors} />
        {/* Submit Form Button  */}
        <Button type="primary" block style={inputStyle} htmlType="submit">
          {t("addPatientFormBtn")}
        </Button>
      </Form>
    </ConfigProvider>
  );
};

export default AddPatientForm;
