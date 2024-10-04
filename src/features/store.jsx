// import { legacy_createStore as createStore } from "redux";
// function reducerFn(state = { counter: 0 }, action) {
//   return state;
// }
// const store = createStore(reducerFn);

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
export default store;
