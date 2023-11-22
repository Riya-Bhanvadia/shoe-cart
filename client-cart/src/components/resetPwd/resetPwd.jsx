import React, { useContext, useState } from "react";
import { useSendResetemail } from "../../hooks/hooks";
import { ToastContainer, toast } from "react-toastify";
import "./resetPwd.css";

const ResetPwd = () => {
  const [email, setEmail] = useState();
  const [error, setError] = useState("");
  const { mutate, isError } = useSendResetemail();
  console.log(isError);

  const handleSubmit = (e) => {
    e.preventDefault();

    mutate(
      { email },
      {
        onSuccess: (data) => {
          console.log(data);
          localStorage.removeItem("token");
          setEmail("");
          localStorage.removeItem("token")
          toast.success("check your mail",{
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "dark",
          });
        },
        onError: (error) => {
          console.log("errorrrrrrrrr");
          console.log(error);
          if (error.response) {
            setError(error.response.data.error.message);
          } else {
            setError(error.message);
          }
        },
      }
    );
    // addEmail(email)
  };
  return (
    <div className="resetBody">
      <div className="containerReset">
        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <h2 className="forgotTitle">Forgot Password</h2>
          <p className="para">
            Enter your email address below to reset your password.
          </p>

          <label htmlFor="email">Email:</label>
          <input
            className="emailInput"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error ? <span style={{ color: "red" }}>{error}</span> : <div></div>}

          <button className="resetButton" type="submit">
            Reset Password
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPwd;
