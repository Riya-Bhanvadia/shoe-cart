const yup = require("yup");

exports.userSchema = yup.object({
  email: yup
    .string("Invalid Email")
    .email("Invalid Email")
    .required("Email is required"),
  password: yup.string().min(5),
});
