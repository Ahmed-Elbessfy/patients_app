// FormComponent.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AddPatientForm from "../components/addPatientComponents/AddPatientForm";
import mockI18n from "../i18n-tets-config";
import { I18nextProvider } from "react-i18next";

test("it renders a form with input fields and a submit button", () => {
  const mockFun = () => {};
  render(
    <I18nextProvider i18n={mockI18n}>
      <AddPatientForm redirect={mockFun} />
    </I18nextProvider>
  );

  expect(screen.getByTestId("backHomeLink")).toBeInTheDocument();
  expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/firstName/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/lastName/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/age/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/gender/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/phone/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/country/i)).toBeInTheDocument();
  expect(screen.getByTestId("submitBtn")).toBeInTheDocument();
});

test("Go back home redirects to home page", () => {
  const mockFun = () => {};
  render(
    <I18nextProvider i18n={mockI18n}>
      <AddPatientForm redirect={mockFun} />
    </I18nextProvider>
  );

  expect(screen.getByTestId("backHomeLink")).toHaveAttribute("href", "/");
});

test("it updates input values as users type", () => {
  const mockFun = () => {};
  render(
    <I18nextProvider i18n={mockI18n}>
      <AddPatientForm redirect={mockFun} />
    </I18nextProvider>
  );

  const firstNameInput = screen.getByPlaceholderText(
    /firstName/i
  ) as HTMLInputElement;
  const lastNameInput = screen.getByPlaceholderText(
    /lastName/i
  ) as HTMLInputElement;
  const ageInput = screen.getByPlaceholderText(/age/i) as HTMLInputElement;
  const genderInput = screen.getByPlaceholderText(
    /gender/i
  ) as HTMLInputElement;
  const phoneInput = screen.getByPlaceholderText(/phone/i) as HTMLInputElement;
  const countryInput = screen.getByPlaceholderText(
    /country/i
  ) as HTMLInputElement;

  fireEvent.change(firstNameInput, { target: { value: "Ahmed" } });
  fireEvent.change(lastNameInput, { target: { value: "Taha" } });
  fireEvent.change(ageInput, { target: { value: 33 } });
  fireEvent.change(genderInput, { target: { value: "male" } });
  fireEvent.change(phoneInput, { target: { value: "01112223334" } });
  fireEvent.change(countryInput, { target: { value: "Egypt" } });

  expect(firstNameInput.value).toBe("Ahmed");
  expect(lastNameInput.value).toBe("Taha");
  expect(ageInput.value).toBe(33);
  expect(genderInput.value).toBe("male");
  expect(phoneInput.value).toBe("01112223334");
  expect(countryInput.value).toBe("Egypt");
});

test("handles form submission correctly", () => {
  const mockFun = () => {};
  render(
    <I18nextProvider i18n={mockI18n}>
      <AddPatientForm redirect={mockFun} />
    </I18nextProvider>
  );

  const firstNameInput = screen.getByPlaceholderText(
    /firstName/i
  ) as HTMLInputElement;
  const lastNameInput = screen.getByPlaceholderText(
    /lastName/i
  ) as HTMLInputElement;
  const ageInput = screen.getByPlaceholderText(/age/i) as HTMLInputElement;
  const genderInput = screen.getByPlaceholderText(
    /gender/i
  ) as HTMLInputElement;
  const phoneInput = screen.getByPlaceholderText(/phone/i) as HTMLInputElement;
  const countryInput = screen.getByPlaceholderText(
    /country/i
  ) as HTMLInputElement;
  const submitBtn = screen.getByTestId("submitBtn");

  const firstNameInputIsValid = firstNameInput.value.length > 0;
  const lastNameInputIsValid = lastNameInput.value.length > 0;
  const ageIsValid =
    parseInt(ageInput.value) > 0 &&
    Math.floor(parseInt(ageInput.value)) == parseInt(ageInput.value);
  const genderInputIsValid = genderInput.value.length > 0;
  const phnoeInputIsValid =
    phoneInput.value.length > 0 &&
    phoneInput.value.match(
      /^(0111|0114|0112|0155|0101|0109|0106|0100|0120|0128|0127|0122)\d{7}$/
    );
  const countryInputIsValid = countryInput.value.length > 0;

  fireEvent.click(submitBtn)
});
