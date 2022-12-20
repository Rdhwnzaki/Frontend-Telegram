const initialState = {
  user: {
    id_user: "",
    email_user: "",
    password_user: "",
    name_user: "",
    photo: "",
    token: "",
  },
  isLoading: false,
};

const UserReducerLogin = (state = initialState, action) => {
  if (action.type === "LOGIN_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "LOGIN_SUCCESS") {
    return {
      ...state,
      user: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};
export default UserReducerLogin;
