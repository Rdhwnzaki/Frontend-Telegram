import React from "react";
import Assets from "../../images";
import { Link } from "react-router-dom";

function forgotPassword() {
  return (
    <div>
      <div>
        <div
          className="container"
          style={{ marginTop: "90px", width: "500px" }}
        >
          <div className="row shadow rounded-4">
            <div className="col-md-12">
              <div className="container">
                <h4 className="mb-5 mt-4" style={{ color: "#7E98DF" }}>
                  <Link to="/login">
                    <img
                      src={Assets.back}
                      alt=""
                      style={{ marginRight: "400px" }}
                    />
                  </Link>
                  <h4 style={{ marginTop: "-22px" }}>Forgot Password</h4>
                </h4>
                <h6 className="text-start mb-5 ms-2">
                  You’ll get messages soon on your e-mail
                </h6>
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
                <button
                  className="btn text-white rounded-5 mt-3 mb-5"
                  style={{
                    backgroundColor: "#7E98DF",
                    width: "300px",
                    height: "50px",
                  }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default forgotPassword;
