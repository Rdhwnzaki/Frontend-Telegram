/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import Assets from "../../images";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./index.css";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalEdit from "../../components/ModalEdit";
import { useNavigate } from "react-router-dom";

function chatList() {
  // const [message, setMessage] = useState("");
  // const [socket, setSocket] = useState(null);
  // const [messages, setMessages] = useState([]);
  const [socketio, setSocketIo] = useState(null);
  const [listchat, setListchat] = useState([]);
  const [message, setMessage] = useState();
  const [login, setLogin] = useState({});
  const [list, setList] = useState([]);
  const [activeReceiver, setActiveReceiver] = useState({});
  const [activeChat, setActiveChat] = useState(1);
  const [profile, setProfile] = useState([]);
  const token = localStorage.getItem("token");
  const users = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const self = user;
  const friend = JSON.parse(localStorage.getItem("receiver"));
  let getProfile = `${process.env.REACT_APP_URL_BASE}/users/detail-user`;
  useEffect(() => {
    axios
      .get(getProfile, users)
      .then((res) => {
        console.log("Get profile success");
        console.log(res.data.data[0]);
        setProfile(res.data.data[0]);
      })
      .catch((err) => {
        console.log("Get profile fail");
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   const resultSocket = io("http://localhost:4000");
  //   setSocket(resultSocket);
  // }, []);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on("messageBe", (data) => {
  //       setMessages((current) => [...current, data]);
  //     });
  //   }
  // }, [socket]);

  // const handleMessage = () => {
  //   socket.emit("message", message);
  //   setMessage("");
  // };
  useEffect(() => {
    const socket = io(process.env.REACT_APP_URL_BASE);
    socket.on("send-message-response", (response) => {
      // set receiver
      const receiver = JSON.parse(localStorage.getItem("receiver"));
      // Kondisi nampilkan data receiver
      if (
        receiver.username === response[0].sender ||
        receiver.username === response[0].receiver
      ) {
        setListchat(response);
      }
      console.log("res", response);
    });
    setSocketIo(socket);
  }, []);
  const SubmitMessage = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const receiver = JSON.parse(localStorage.getItem("receiver"));

    // list history saat submit message
    const payload = {
      sender: user?.username,
      receiver: receiver?.username,
      message,
    };

    setListchat([...listchat, payload]);

    const data = {
      sender: user?.id_user,
      receiver: activeReceiver?.id_user,
      message,
    };

    socketio.emit("send-message", data);

    setMessage("");
  };
  const selectReceiver = (item) => {
    setListchat([]);
    setActiveReceiver(item);
    setActiveChat(2);

    //set receiver
    localStorage.setItem("receiver", JSON.stringify(item));
    socketio.emit("join-room", login);

    const data = {
      sender: login?.id_user,
      receiver: item?.id_user,
    };
    console.log("ini data", data);
    socketio.emit("chat-history", data);
  };
  console.log(self);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const data = user;
    setLogin(user);
    axios
      .get(`${process.env.REACT_APP_URL_BASE}/users/get-user`)
      .then((response) => {
        console.log(response.data.data);
        setList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleLeaveChat = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 mt-4">
            <div className="row">
              <div className="col-6">
                <h4 style={{ color: "#7E98DF" }}>Chat App</h4>
              </div>
              <div className="col-3 offset-3">
                <img src={Assets.menu} alt="" />
              </div>
            </div>
            <Link
              to="/profile"
              style={{ textDecoration: "none", color: "black" }}
            >
              <p className="mt-5">
                <img
                  src={profile.photo}
                  alt=""
                  className="rounded-4"
                  style={{ height: "70px", width: "70px" }}
                />
              </p>
              <h4 className="mt-3">{profile.name_user}</h4>
              <h6 className="mt-2 text-secondary">@{profile.username}</h6>
              <h6 className="mt-2 text-secondary">{profile.bio}</h6>
            </Link>
            <ModalEdit />
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
            <button
              className="btn text-white mt-4"
              style={{ backgroundColor: "#7E98DF", marginLeft: "-30px" }}
              onClick={handleLeaveChat}
            >
              Leave Chat
            </button>
            <div className="overflow-2">
              {list?.map((user) => (
                <div
                  className="row mt-4"
                  key={user.id_user}
                  onClick={() => selectReceiver(user)}
                >
                  <div className="col-2">
                    <img
                      src={user.photo}
                      alt=""
                      className="rounded-4"
                      style={{ height: "50px", width: "50px" }}
                    />
                  </div>
                  <div className="col-7 offset-1">
                    <h6 className="text-start">{user.name_user}</h6>
                    {/* <p className="text-start" style={{ color: "#7E98DF" }}>
                    Why did you do that?
                  </p> */}
                  </div>
                  {/* <div className="col-1">
                  <h6 className="text-secondary">15:20</h6>
                </div> */}
                </div>
              ))}
            </div>
          </div>
          <div
            className="col-md-9"
            style={{ backgroundColor: "#FAFAFA" }}
            key={activeReceiver.id_user}
          >
            <div className="row bg-white">
              <div className="col-1 ms-4 mt-4 mb-4">
                <img
                  src={activeReceiver.photo}
                  alt=""
                  className="rounded-4"
                  style={{ height: "50px", width: "50px" }}
                />
              </div>
              <div className="col-4" style={{ marginTop: "35px" }}>
                <h6 style={{ marginLeft: "-282px" }}>
                  {activeReceiver.username
                    ? activeReceiver.username
                    : "Tap Friend to Start Chat"}
                </h6>
                <h6
                  style={{
                    color: "#7E98DF",
                    marginLeft: "-322px",
                    fontSize: "13px",
                  }}
                >
                  {activeReceiver.username ? "Online" : "Offline"}
                </h6>
              </div>
              <div className="col-6" style={{ marginTop: "43px" }}>
                <img
                  src={Assets.profilemenu}
                  alt=""
                  style={{ marginLeft: "570px" }}
                />
              </div>
            </div>
            {/* <ul> */}
            {/* {message.map((item, index) => (
                <li key={index + 1}>
                  {item.message} - {item.date}
                </li>
              ))} */}
            {/* </ul> */}
            <div className="overflow">
              {listchat.map((item) => (
                <div key={item.id_user}>
                  {item.sender === login?.username ? (
                    <div>
                      <div
                        className="text-end me-5 mt-4"
                        style={{ color: "#7E98DF" }}
                      >
                        <p>You</p>
                        <div
                          className="btn text-white"
                          style={{
                            borderRadius: "12px 3px 12px 12px",
                            backgroundColor: "#7E98DF",
                            height: "50px",
                          }}
                        >
                          <p>{item?.message}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        className="text-start me-5 mt-4"
                        style={{ color: "#7E98DF" }}
                      >
                        <p>{item?.sender}</p>
                        <div
                          className="btn text-white"
                          style={{
                            borderRadius: "3px 12px 12px 12px",
                            backgroundColor: "#7E98DF",
                            height: "50px",
                          }}
                        >
                          <p>{item?.message}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="bottom-input">
              <form onSubmit={SubmitMessage}>
                <div className="row ">
                  <div className="col-10">
                    <input
                      type="text"
                      value={message}
                      name="message"
                      placeholder="Masukan Text"
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
                  <div className="col-1 offset-1">
                    <button
                      // onClick={handleMessage}
                      style={{
                        color: "white",
                        backgroundColor: "#7E98DF",
                        marginRight: "0px ",
                        marginTop: "0px",
                      }}
                      type="submit"
                      className="btn"
                    >
                      Kirim
                    </button>
                  </div>
                </div>
              </form>
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
