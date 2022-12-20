const initialState = {
  userRegister: {
    id_user: "",
    email_user: "",
    password_user: "",
    name_user: "",
    photo: "",
    token: "",
  },
  isLoading: false,
};

const UserReducerRegister = (state = initialState, action) => {
  if (action.type === "REGISTER_PENDING") {
    return {
      ...state,
      isLoading: true,
    };
  } else if (action.type === "REGISTER_SUCCESS") {
    return {
      ...state,
      userRegister: action.payload,
      isLoading: false,
    };
  } else {
    return state;
  }
};
export default UserReducerRegister;
