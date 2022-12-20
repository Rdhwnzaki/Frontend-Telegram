/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import Assets from "../../images";
import { Link } from "react-router-dom";
import { regisUser } from "../../redux/actions/register";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function register() {
  const [email_user, setEmail] = useState("");
  const [password_user, setPassword] = useState("");
  const [name_user, setName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(email_user);
    console.log(password_user);
    console.log(name_user);
    let data = {
      email_user,
      password_user,
      name_user,
    };
    dispatch(regisUser(data, navigate));
  };
  return (
    <div>
      <div className="container" style={{ marginTop: "90px", width: "500px" }}>
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
                <h4 style={{ marginTop: "-22px" }}>Register</h4>
              </h4>
              <h6 className="text-start mb-5 ms-2">
                Let’s create your account!
              </h6>
              <form onSubmit={postData}>
                <h6 className="form-label text-start text-secondary ms-2">
                  Name
                </h6>
                <input
                  type="text"
                  value={name_user}
                  onChange={(e) => setName(e.target.value)}
                  className=" mb-4 form-control"
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    borderRadius: "0px",
                    marginTop: "-10px",
                  }}
                />
                <h6 className="form-label text-start text-secondary ms-2">
                  Email
                </h6>
                <input
                  type="email"
                  value={email_user}
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
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
                  value={password_user}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" mb-4 form-control"
                  style={{
                    border: "none",
                    borderBottom: "2px solid black",
                    borderRadius: "0px",
                    marginTop: "-10px",
                  }}
                />
                <button
                  className="btn text-white rounded-5 mt-3"
                  type="submit"
                  style={{
                    backgroundColor: "#7E98DF",
                    width: "300px",
                    height: "50px",
                  }}
                >
                  Register
                </button>
              </form>
              <h6 className="my-4">Register with</h6>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default register;
