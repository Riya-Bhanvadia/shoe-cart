import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import {  useRegisterData } from "../../hooks/hooks";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  // const [pwdSize, setPwdSize] = useState("")
  const [rpassword, setrPassword] = useState("");
  // const { isLoading, data } = useGetRegisterData();
  const { mutate } = useRegisterData();
  // console.log(data);

  const handleCheckbox = () => {
    setCheckbox(!checkbox);
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(name);
    if (!name || !email || !password || !rpassword) {
      alert("Fill all field");
    }
    // if(password.length < 5){
    //   setPwdSize("Password should be atleast 5")
    // }
    if (password !== rpassword) {
      alert("password dosent match");
    }
    if (!checkbox) {
      alert("please agree the terms and conditions!!");
    }

    const data = { name, email, password };
    console.log(data);
    if (name && email && password && rpassword && checkbox === true) {
      mutate(data, {
        onError: (error) => {
          if (error.response) {
            setError(error.response.data.error.message);
          } else {
            setError(error.message);
          }
        },
        onSuccess: () => {
          return nav("/login");
        },
      });
    }
  };

  return (
    <section className="vh-117" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11 register">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-2">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 ">
                      Sign up
                    </p>

                    <form onSubmit={handleClick}>
                      <div className="d-flex flex-row align-items-center mb-2">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="form3Example1c"
                            className="form-control"
                            autoComplete="on"
                            
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            autoComplete="on"
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Your Email
                          </label>
                          <div>
                            <span style={{ color: "red" }}>{error}</span>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="password"
                            id="form3Example4c"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            autoComplete="on"
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="repassword"
                            id="form3Example4cd"
                            value={rpassword}
                            onChange={(e) => setrPassword(e.target.value)}
                            className="form-control"
                            autoComplete="on"
                            required
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Repeat your password
                          </label>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center m2-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          onChange={()=>handleCheckbox()}
                          id="form2Example3c"
                          checked={checkbox}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3"
                        >
                          I agree all statements in<br/>
                          Terms of service
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-2 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
