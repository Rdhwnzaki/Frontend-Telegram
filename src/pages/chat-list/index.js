/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Assets from "../../images";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./index.css";

function chatList() {
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
            <img src={Assets.header} alt="" />
            <img src={Assets.profile} alt="" className="mt-5" />
            <h4 className="mt-3">Gloria Mckinney</h4>
            <h6 className="mt-2 text-secondary">@wdlam</h6>
            <input
              type="search"
              className="form-control"
              placeholder="Type your message..."
            />
            <div className="row mt-4">
              <div className="col-3">
                <button className="btn">All</button>
              </div>
              <div className="col-5">
                <button
                  className="btn rounded-4"
                  style={{ backgroundColor: "#7E98DF", color: "white" }}
                >
                  Important
                </button>
              </div>
              <div className="col-3">
                <button className="btn">Unread</button>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-2">
                <img src={Assets.profile2} alt="" />
              </div>
              <div className="col-7 offset-1">
                <h6 className="text-start">Theresa Webb</h6>
                <p className="text-start" style={{ color: "#7E98DF" }}>
                  Why did you do that?
                </p>
              </div>
              <div className="col-1">
                <h6 className="text-secondary">15:20</h6>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-2">
                <img src={Assets.profile3} alt="" />
              </div>
              <div className="col-7 offset-1">
                <h6 className="text-start">Calvin Flores</h6>
                <p className="text-start" style={{ color: "#7E98DF" }}>
                  Hi, bro! Come to my house!
                </p>
              </div>
              <div className="col-1">
                <h6 className="text-secondary">15:13</h6>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-2">
                <img src={Assets.profile4} alt="" />
              </div>
              <div className="col-7 offset-1">
                <h6 className="text-start">Gregory Bell</h6>
                <p className="text-start" style={{ color: "#7E98DF" }}>
                  Will you stop ignoring me?
                </p>
              </div>
              <div className="col-1">
                <h6 className="text-secondary">15:13</h6>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-2">
                <img src={Assets.profile5} alt="" />
              </div>
              <div className="col-7 offset-1">
                <h6 className="text-start">Soham Henry</h6>
                <p className="text-start" style={{ color: "#7E98DF" }}>
                  Me: Bro, just fuck off
                </p>
              </div>
              <div className="col-1">
                <h6 className="text-secondary">8:30</h6>
              </div>
            </div>
          </div>
          <div className="col-md-9" style={{ backgroundColor: "#FAFAFA" }}>
            <div className="row bg-white">
              <div className="col-1 ms-4 mt-4 mb-4">
                <img src={Assets.profile2} alt="" />
              </div>
              <div className="col-3" style={{ marginTop: "35px" }}>
                <h6 style={{ marginRight: "160px" }}>Theresa Webb</h6>
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

export default chatList;
