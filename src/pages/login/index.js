import React from "react";
import { Link } from "react-router-dom";
import Assets from "../../images";

function login() {
  return (
    <div>
      <div className="container" style={{ marginTop: "90px", width: "500px" }}>
        <div className="row shadow rounded-4">
          <div className="col-md-12">
            <div className="container">
              <h4 className="mb-5 mt-4" style={{ color: "#7E98DF" }}>
                Login
              </h4>
              <h6 className="text-start mb-5 ms-2">Hi, Welcome back!</h6>
              <h6 className="form-label text-start text-secondary ms-2">
                Email
              </h6>
              <input
                type="email"
                className=" mb-4 form-control"
                style={{
                  border: "none",
                  borderBottom: "2px solid black",
                  borderRadius: "0px",
                  marginTop: "-10px",
                }}
              />
              <h6 className="form-label text-start text-secondary ms-2">
                Password
              </h6>
              <input
                type="password"
                className=" mb-4 form-control"
                style={{
                  border: "none",
                  borderBottom: "2px solid black",
                  borderRadius: "0px",
                  marginTop: "-10px",
                }}
              />
              <Link to="/forgot-password" style={{ textDecoration: "none" }}>
                <h6 className="text-end" style={{ color: "#7E98DF" }}>
                  Forgot password?
                </h6>
              </Link>
              <button
                className="btn text-white rounded-5 mt-3"
                style={{
                  backgroundColor: "#7E98DF",
                  width: "300px",
                  height: "50px",
                }}
              >
                Login
              </button>
              <h6 className="my-4">Login with</h6>
              <button
                className="btn btn-new rounded-5 mt-3 mb-5"
                style={{
                  borderColor: "#7E98DF",
                  color: "#7E98DF",
                  width: "300px",
                  height: "50px",
                }}
              >
                <img src={Assets.google} alt="" className="me-3" />
                Google
              </button>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h6 className="mb-4">
                  Don’t have an account?{" "}
                  <h6 style={{ color: "#7E98DF" }}>Sign Up</h6>
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
