import validator from "validator";
import isEmpty from "is-empty";
export default function validateSignIn(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.email)) {
    errors.signin = "You need to fill all the inputs";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Input a valid email";
  }
  if (validator.isEmpty(data.password)) {
    errors.signin = "You need to fill all the inputs";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
}
