import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Illustration from "../../assets/illustration.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ErrorMsg from '../ErrorMsg';
import Count from "../Count";
import { Link } from "react-router-dom";

const ManagerLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const url = `https://crm-app-backend.onrender.com/api/manager/login`;

  const history = useHistory();

  const ErrorNotify = () => toast.error("Please enter correct Credentials");

  const loginUser = async (event) => {
    setLoading(true);
    event.preventDefault();
    const response = { email: email, password: password };
    axios({
      url: url,
      method: "POST",
      data: response,
    })
      .then((response) => {
        // 
        setLoading(false);
        if (response.data.message) {
          ErrorNotify(response.data.message);
        } else {
          setLoading(false);
          localStorage.setItem("token", response.data);
          history.push("/managerdashboard/servicerequest");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        ErrorNotify("Incorrect Credentials");
      });

    // setLoading(true);
    // e.preventDefault();
    // const response = { email: email, password: password };
    // try {
    //   const result = await axios.post(
    //     "https://crm-app-backend.onrender.com/api/manager/login",
    //     response
    //   );
    //   setLoading(false);
    //   localStorage.setItem("token", result.data);
    //   history.push("/managerdashboard/servicerequest");
    // } catch (error) {
    //   setLoading(false);
    //   ErrorNotify();
    //   console.log(`Axios request failed: ${error}`);
    // }
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;

  const [validEmail, setValidEmail] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const validateAndSetEmail = (v) => {
    if (emailPattern.test(v)) {
      setValidEmail(true);
      setShowEmailError(false);
    } else {
      setValidEmail(false);
      setShowEmailError(true);
    }
    setEmail(v);
  };

  const validateAndSetPassword = (v) => {
    if (v.length < 1) {
      setValidPassword(false);
      setShowPasswordError(true);
    } else {
      setValidPassword(true);
      setShowPasswordError(false);
    }
    setPassword(v);
  };

  return (
    <React.Fragment>
      <ToastContainer />
      {isLoading && (
        <div className="loading">
          <Loader type="Audio" color="#897eff" height={100} width={100} />
          <p>Please wait while we verify....</p>
        </div>
      )}
      {!isLoading && (
        <div className="login-container">
          <div className="flexbox">
            <div className="illustrator">
              <img src={Illustration} alt="illustration" />
            </div>
            <div className="login">
              <div className="headliner">Manager Signin</div>
              <input
                type="text"
                placeholder="enter email-id"
                onChange={(e) => validateAndSetEmail(e.target.value)}
              />
              <ErrorMsg show={showEmailError} msg={'Invalid e-mail!'} />
              <input
                type="password"
                placeholder="enter password"
                onChange={(e) => validateAndSetPassword(e.target.value)}
              />
              <ErrorMsg show={showPasswordError} msg={'Empty password!'} />
              <button type="button" onClick={(e) => loginUser(e)} disabled={!validEmail || !validPassword}>
                Login
              </button>
              <button
                type="button"
                style={{ marginLeft: "2rem" }}
                onClick={(event) => {
                  event.preventDefault();
                  history.push("/#Login");
                }}
              >
                Back
              </button>
              <div>
                <Link to="/forgot-password" style={{ color: 'white' }} className="small">Forgot Password?</Link>
              </div>
            </div>
          </div>
          <Count />
        </div>
      )}
    </React.Fragment>
  );
};

export default ManagerLogin;
