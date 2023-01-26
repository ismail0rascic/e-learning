import validator from "validator";
import isEmpty from "is-empty";

export default function validateComment(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (validator.isEmpty(data.text)) {
    errors.text = "Description field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
