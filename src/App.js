import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";
import ChatList from "./pages/chat-list";
import Profile from "./pages/profile";
import VerifOtp from "./pages/verif-otp";
import GroupChat from "./pages/group-chat";
import socketIO from "socket.io-client";

function App() {
  const socket = socketIO.connect(process.env.REACT_APP_BACKEND_API_HOST);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} replace="true" />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/chat-list" element={<ChatList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/verif-otp" element={<VerifOtp />} />
          <Route path="/group-chat" element={<GroupChat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
