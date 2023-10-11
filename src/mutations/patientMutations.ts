import {gql} from "@apollo/client"

export const ADD_PATIENT = gql`
  mutation createPatient($key:Int!, $firstName: String!, $lastName: String!, $age: Int!, $gender:String!, $phone:String!, $country: String!){
  createPatient(key:$key, firstName:$firstName, lastName:$lastName, age:$age,gender:$gender, phone:$phone, country:$country){
    id,
    key,
    firstName,
    lastName,
    age,
    gender,
    phone,
    country
  }
}
`