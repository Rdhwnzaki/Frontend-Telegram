/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Assets from "../../images";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./index.css";
import { Link } from "react-router-dom";
import { FaRegBell, FaLock } from "react-icons/fa";
import {
  BsFolder2Open,
  BsFillChatSquareTextFill,
  BsLaptop,
} from "react-icons/bs";
import Username from "../../components/User/Username";

function Profile() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const resultSocket = io("http://localhost:4000");
    setSocket(resultSocket);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("messageBe", (data) => {
        setMessages((current) => [...current, data]);
      });
    }
  }, [socket]);

  const handleMessage = () => {
    socket.emit("message", message);
    setMessage("");
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-4">
            <Link to="/chat-list">
              <img src={Assets.back} alt="" style={{ marginRight: "300px" }} />
            </Link>
            <h5 style={{ color: "#7E98DF", marginTop: "-23px" }}>@wdlam</h5>
            <Username />
            <h6 className="text-start mb-3 mt-4">Account</h6>
            <h6 className="text-start">+375(29)9638433</h6>
            <h6 className="text-start mb-4" style={{ color: "#7E98DF" }}>
              Tap to change phone number
            </h6>
            <hr />
            <h6 className="text-start">@wdlam</h6>
            <h6 className="text-start text-secondary">Username</h6>
            <hr />
            <h6 className="text-start  mt-4">
              I’m Senior Frontend Developer from Microsoft
            </h6>
            <h6 className="text-start text-secondary mb-4">Bio</h6>
            <h5 className="text-start">Setting</h5>
            <h6 className="text-start my-3">
              {" "}
              <FaRegBell /> Notification and Sounds
            </h6>
            <h6 className="text-start my-3">
              {" "}
              <FaLock /> Privaty and Security
            </h6>
            <h6 className="text-start my-3">
              {" "}
              <BsFolder2Open /> Data and Stronge
            </h6>
            <h6 className="text-start my-3">
              {" "}
              <BsFillChatSquareTextFill /> Chat settings
            </h6>
            <h6 className="text-start my-3">
              {" "}
              <BsLaptop /> Devices
            </h6>
          </div>
          <div className="col-md-9" style={{ backgroundColor: "#FAFAFA" }}>
            <div className="row bg-white">
              <div className="col-1 ms-4 mt-4 mb-4">
                <img src={Assets.profile2} alt="" />
              </div>
              <div className="col-3" style={{ marginTop: "35px" }}>
                <h6 style={{ marginRight: "150px" }}>Theresa Webb</h6>
                <h6
                  style={{
                    color: "#7E98DF",
                    marginRight: "220px",
                    fontSize: "13px",
                  }}
                >
                  Online
                </h6>
              </div>
              <div className="col-6" style={{ marginTop: "43px" }}>
                <img
                  src={Assets.profilemenu}
                  alt=""
                  style={{ marginLeft: "670px" }}
                />
              </div>
            </div>
            <ul>
              {messages.map((item, index) => (
                <li key={index + 1}>
                  {item.message} - {item.date}
                </li>
              ))}
            </ul>
            <div className="bottom-input">
              <div className="row ">
                <div className="col-11">
                  <input
                    type="text"
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: "900px",
                      height: "40px",
                      marginLeft: "50px",
                      marginBottom: "-23px",
                      backgroundColor: "#f5f5f5",
                    }}
                    className="form-control"
                  />
                </div>
                <div className="col-1">
                  <button
                    onClick={handleMessage}
                    style={{
                      color: "white",
                      backgroundColor: "#7E98DF",
                      marginRight: "0px ",
                      marginTop: "0px",
                    }}
                    className="btn"
                  >
                    Kirim
                  </button>
                </div>
              </div>
              {/* <input
                type="text"
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: "900px",
                  height: "40px",
                  marginLeft: "50px",
                  marginBottom: "-23px",
                  backgroundColor: "#f5f5f5",
                }}
                className="form-control"
              /> */}
              <br />
              {/* <button
                onClick={handleMessage}
                style={{
                  color: "white",
                  backgroundColor: "#7E98DF",
                  marginLeft: "1010px ",
                  marginTop: "-70px",
                }}
                className="btn"
              >
                Kirim
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
