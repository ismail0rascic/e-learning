import validator from "validator";
import isEmpty from "is-empty";

export default function validatePost(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.level = !isEmpty(data.level) ? data.level : "";
  data.duration = !isEmpty(data.duration) ? data.duration : "";
  data.image = !isEmpty(data.image) ? data.image : "";

  const letterTest = /^[A-Za-z0-9\s]*$/;
  const lengthTest = /^.{1,100}$/;

  if (validator.isEmpty(data.title)) {
    errors.add = "The post is missing required information";
  } else if (!lengthTest.test(data.title)) {
    errors.title = "Title can max 100 characters";
  } else if (!letterTest.test(data.title)) {
    errors.title = "Only letters and numbers are allowed";
  }

  if (validator.isEmpty(data.description)) {
    errors.add = "The post is missing required information";
  }
  if (validator.isEmpty(data.level)) {
    errors.add = "The post is missing required information";
  }
  if (validator.isEmpty(data.duration)) {
    errors.add = "The post is missing required information";
  }
  if (validator.isEmpty(data.image)) {
    errors.add = "The post is missing required information";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
