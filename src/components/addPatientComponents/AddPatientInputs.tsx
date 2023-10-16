// Helpers
import { FC } from "react";
import { Controller } from "react-hook-form";

// Nested components
import { Input, Select } from "antd";

// Styling configuration
import { errorsStyle, inputStyle, selectStyle } from "./AddPatientFormStyles";
import { useTranslation } from "react-i18next";

interface AddPatientInputsPropsInterface {
  control: any;
  errors: any;
}

const AddPatientInputs: FC<AddPatientInputsPropsInterface> = ({
  control,
  errors,
}) => {
  // configure i18n
  const { t } = useTranslation("lang");
  return (
    <>
      {/* First Name Input  */}
      <Controller
        name="firstName"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            style={inputStyle}
            placeholder={t("formInputs.firstNameInput.text")}
          />
        )}
      />
      <p style={errorsStyle}>{errors.firstName && errors.firstName.message}</p>
      {/* Last Name Input */}
      <Controller
        name="lastName"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            style={inputStyle}
            placeholder={t("formInputs.lastNameInput.text")}
          />
        )}
      />
      <p style={errorsStyle}>{errors.lastName && errors.lastName.message}</p>
      {/* Age Input  */}
      <Controller
        name="age"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            style={inputStyle}
            type="number"
            placeholder={t("formInputs.ageInput.text")}
          />
        )}
      />
      <p style={errorsStyle}>{errors.age && errors.age.message}</p>
      {/* gender Input  */}
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            style={selectStyle}
            placeholder={t("formInputs.genderInput.placeholder")}
          >
            <Select.Option value="male">
              {t("formInputs.genderInput.options.male")}
            </Select.Option>
            <Select.Option value="female">
              {t("formInputs.genderInput.options.female")}
            </Select.Option>
          </Select>
        )}
      />
      <p style={errorsStyle}>{errors.gender && errors.gender.message}</p>
      {/* Phone Input  */}
      <Controller
        name="phone"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            style={inputStyle}
            placeholder={t("formInputs.phoneInput.text")}
          />
        )}
      />
      <p style={errorsStyle}>{errors.phone && errors.phone.message}</p>
      {/* Country Input  */}
      <Controller
        name="country"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            style={inputStyle}
            placeholder={t("formInputs.countryInput.text")}
          />
        )}
      />
      <p style={errorsStyle}>{errors.country && errors.country.message}</p>
    </>
  );
};

export default AddPatientInputs;
