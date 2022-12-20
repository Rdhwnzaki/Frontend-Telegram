const initialState = {
  recipe: {
    otp: "",
  },
  isLoading: false,
};

const otpReducers = (state = initialState, action) => {
  if (action.type === "CONFIRM_OTP_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "CONFIRM_OTP_SUCCESS") {
    return {
      ...state,
      otp: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};
export default otpReducers;
