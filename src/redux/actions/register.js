import axios from "axios";
import Swal from "sweetalert2";

export const regisUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_URL_BASE}/users/register`,
      data
    );
    const user = result.data.data;
    console.log(user);
    dispatch({ type: "REGISTER_SUCCESS", payload: user });
    navigate("/verif-otp");
    Swal.fire({
      title: "Register Succes",
      text: "You have successfully registered",
      icon: "success",
      timer: "3000",
      showConfirmButton: false,
    });
  } catch (err) {
    Swal.fire({
      title: "Register Fail",
      text: "Please try to register again",
      icon: "error",
      timer: "3000",
      showConfirmButton: false,
    });
  }
};
