/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { otpPost } from "../../redux/actions/otp";

function otp() {
  const [email_user, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email_user);
    console.log(otp);
    let data = {
      email_user,
      otp,
    };
    dispatch(otpPost(data, navigate));
  };
  return (
    <div>
      <div className="container" style={{ marginTop: "90px", width: "500px" }}>
        <div className="row shadow rounded-4">
          <div className="col-md-12">
            <div className="container">
              <h4 className="mb-5 mt-4" style={{ color: "#7E98DF" }}>
                Verification
              </h4>
              <h6 className="text-start mb-5 ms-2">
                Please verify your account using the correct email and OTP
              </h6>
              <form onSubmit={postData}>
                <h6 className="form-label text-start text-secondary ms-2 mb-3">
                  Email
                </h6>
                <input
                  type="email"
                  value={email_user}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className=" mb-4 form-control"
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    borderRadius: "0px",
                    marginTop: "-10px",
                  }}
                />
                <h6 className="form-label text-start text-secondary ms-2 mb-3">
                  OTP
                </h6>
                <input
                  type="text"
                  className=" mb-4 form-control"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    borderRadius: "0px",
                    marginTop: "-10px",
                  }}
                />
                <button
                  type="submit"
                  className="btn text-white rounded-5 mt-3 mb-5"
                  style={{
                    backgroundColor: "#7E98DF",
                    width: "300px",
                    height: "50px",
                  }}
                >
                  Verify
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default otp;
