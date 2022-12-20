import { applyMiddleware, createStore } from "redux";
import RootReducers from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(RootReducers, applyMiddleware(thunk, logger));

export default store;
