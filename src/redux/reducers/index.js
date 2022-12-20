import { combineReducers } from "redux";
import UserReducerLogin from "./user";
import UserReducerRegister from "./register";
import otpReducers from "./otp";

const RootReducers = combineReducers({
  user: UserReducerLogin,
  userRegister: UserReducerRegister,
  otp: otpReducers,
});

export default RootReducers;
