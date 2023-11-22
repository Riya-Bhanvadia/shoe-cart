import React, { useState } from "react";
import "./confirmPwd.css";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer , toast} from "react-toastify";
import axios from "axios";

const ConfirmPwd = (props) => {
  const [pwd, setPwd] = useState();
  const [repwd, setRepwd] = useState();
  const [error, setError] = useState("");
  const navigate = useNavigate()

  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const data = searchParams.get("token");
  const { email } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // const id = {id}
    if (pwd && repwd && pwd === repwd) {
      const data = { email, pwd };
      axios
        .post("http://localhost:8080/confirmPassword", data)
        .then((data) => {
          toast.success("reset", {
            position: toast.POSITION.BOTTOM_LEFT,
            theme: "dark",
          });
          navigate("/login")
        })
        .catch((error) => {
          if (error.response) {
            setError(error.response.data.error.message);
          } else {
            setError(error.message);
          }
        });
    }
  };
  return (
    <div className="bodyConfirm" >
      <div className="containerConfirm">
        <form className="password-reset-form" onSubmit={handleSubmit}>
          <h2>Password Reset</h2>
          <p>Enter your new password below to reset your password.</p>

          <div className="form-group">
            <label for="new-password">New Password:</label>
            <input
              type="password"
              id="new-password"
              name="new-password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              className="password-input"
              required
            />
          </div>

          <div className="form-group">
            <label for="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              value={repwd}
              onChange={(e) => setRepwd(e.target.value)}
              name="confirm-password"
              className="password-input"
              required
            />
          </div>
          {error ? <span style={{ color: "red" }}>{error}</span> : <div></div>}
          <button type="submit" className="reset-button">
            Reset Password
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ConfirmPwd;
