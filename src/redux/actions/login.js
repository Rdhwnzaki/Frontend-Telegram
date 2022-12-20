import axios from "axios";
import Swal from "sweetalert2";

export const loginUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_API_USERS}/login`,
      data
    );
    const user = result.data.message;
    console.log(user);
    localStorage.setItem("token", user.token);
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
    navigate("/chat-list");
    Swal.fire({
      title: "Login Succes",
      text: "You have successfully logged in",
      icon: "success",
      timer: "3000",
      showConfirmButton: false,
    });
  } catch (err) {
    Swal.fire({
      title: "Login Fail",
      text: "Please login again using the correct email and password",
      icon: "error",
      timer: "3000",
      showConfirmButton: false,
    });
  }
};
