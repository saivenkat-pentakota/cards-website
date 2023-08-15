import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import loginPageImage from "../images/login.jpg";

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);
  return (
    <section className="signin-page d-flex flex-row justify-content-center m-2 p-2">
      <div class="left-portion m-2 ">
        <img
          src={loginPageImage}
          alt="logipage"
          style={{ width: "400px", height: "400px", borderRadius: "5px" }}
        />
      </div>
      <div class="right-portion m-2 p-2 ">
        <form class="sign-up">
          <div class="mb-3 ">
            <label for="email" class="form-label">
              Email Address
            </label>
            <input
              type="email"
              class="form-control "
              id="email"
              placeholder="Enter your email address"
              style={{ width: "400px" }}
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Create a password"
              style={{ width: "400px" }}
            />
          </div>
          <div className="d-flex flex-row justify-content-center ">
          <button
              type="submit"
              class="btn submit-btn bg-primary "
              style={{ width: "150px", color: "white" }}
            >
              SIGN IN
            </button>
          </div>
            
          
        </form>
        <p class="hr-lines"> or sigin with</p>

        <div
          className="d-flex flex-row justify-content-center "
          style={{ margin: "auto" ,width:'250px'}}
        >
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
        <div class="sign-up d-flex flex-row justify-content-center " style={{ fontSize: "15px", fontWeight: "400" ,margin: '10px',}}>
          <p>
            Doesn't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signin;
