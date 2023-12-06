const yup = require("yup");

exports.userSchema = yup.object({
  email: yup
    .string("Invalid Email")
    .email("Invalid Email")

    .required("Email is required"),
  password: yup
    .string("invalid password")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
});
