import validator from "validator";
import isEmpty from "is-empty";

export default function validateSignUp(data) {
  let errors = {};
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  const lengthTest = /^.{6,30}$/;

  if (validator.isEmpty(data.firstName)) {
    errors.signup = "You need to fill all the inputs";
  }
  if (validator.isEmpty(data.lastName)) {
    errors.signup = "You need to fill all the inputs";
  }

  if (validator.isEmpty(data.email)) {
    errors.signup = "You need to fill all the inputs";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.password)) {
    errors.signup = "You need to fill all the inputs";
  } else if (!lengthTest.test(data.password)) {
    errors.password = "Password must include minimum 6 characters";
  }
  if (validator.isEmpty(data.password2)) {
    errors.signup = "You need to fill all the inputs";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
