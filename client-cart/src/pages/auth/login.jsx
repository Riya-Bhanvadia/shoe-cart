import React, { useContext, useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import TokenContext from "../../components/tokenContext/tokenContext";
import DashboardContext from "../../components/dashboardContext/dashboardContext";
import ResetPwd from "../../components/resetPwd/resetPwd";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [password, setPassword] = useState("");
  const { addToken } = useContext(TokenContext);
  const { setingProduct } = useContext(DashboardContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log(token);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(email);
    if (!email || !password) {
      alert("Plz fill details");
    }
    const user = { email, password };
    if (email && password) {
      axios
        .post("http://localhost:8080/login", user)
        .then((data) => {
          console.log(data.data.user.cart);
          localStorage.setItem("token", data.data.token);
          addToken(data.data.token);
          setingProduct(data.data.user.cart);
          localStorage.setItem("id", data.data.user._id);

          localStorage.setItem("name", data.data.user.name);
          console.log(data.data.user.email);
          console.log(email);

          navigate("/");
        })
        .catch((error) => {
          console.log(error);

          if (error.response) {
            setError(error.response.data.error.message);
          } else {
            setError(error.message);
          }
        });
    }
  };
  return (
    <div style={{ marginBottom: "20px", marginTop: "20px" }}>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11 register">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6 text-black">
                      <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-2 pt-5 pt-xl-0 mt-xl-n5">
                        <form
                          style={{ width: "23rem" }}
                          onSubmit={handleSubmit}
                        >
                          <h3
                            className="fw-normal mb-3 pb-3"
                            style={{ letterSpacing: "1px" }}
                          >
                            Log in
                          </h3>

                          <div className="form-outline mb-4">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              id="form2Example18"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example18"
                            >
                              Email address
                            </label>
                          </div>

                          <div className="form-outline mb-4">
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              id="form2Example28"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form2Example28"
                            >
                              Password
                            </label>
                          </div>
                          {error ? (
                            <div>
                              <span style={{ color: "red" }}>{error}</span>
                            </div>
                          ) : (
                            <div></div>
                          )}
                          <div className="pt-1 mb-4">
                            <button
                              className="btn btn-info btn-lg btn-block"
                              type="onSubmit"
                            >
                              Login
                            </button>
                          </div>

                          <p className="small mb-5 pb-lg-2">
                            <NavLink className="text-muted" to={"/resetPwd"}>
                              Forgot password?
                            </NavLink>
                          </p>
                          <p>
                            Don't have an account?
                            <NavLink to={"/register"} className="link-info">
                              Register here
                            </NavLink>
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                      {/* <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Login image"
                className="w-100 vh-100"
                style={{objectFit: "cover", objectPosition: "left"}}
              /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
