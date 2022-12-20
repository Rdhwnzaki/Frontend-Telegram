import axios from "axios";
import Swal from "sweetalert2";

export const otpPost = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "CONFIRM_OTP_PENDING" });
    const result = await axios.post(
      `${process.env.REACT_APP_API_USERS}/verif`,
      data
    );
    const otp = result.data.message;
    dispatch({ type: "CONFIRM_OTP_SUCCESS", payload: otp });
    navigate("/login");
    Swal.fire({
      title: "Verification Succes",
      text: "Your verification has been successful",
      icon: "success",
      timer: "3000",
      showConfirmButton: false,
    });
  } catch (err) {
    Swal.fire({
      title: "Verification Fail",
      text: "Please verify again using the correct email and OTP",
      icon: "error",
      timer: "3000",
      showConfirmButton: false,
    });
    console.log(err);
  }
};
