import * as Yup from "yup";

// https://github.com/jquense/yup
const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  day: Yup.date()
    .required()
    .min(new Date())
});

export default schema;
