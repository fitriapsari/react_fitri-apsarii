import { configureStore } from "@reduxjs/toolkit"
// import productSlice from "../slice/productSlice";
import productReducer from "../slice/productSlice"

export const store = configureStore({
  reducer: {
    products: productReducer,
  }
  // middleware: {},
  // devTools: {}
});

export default store;
// console.log("ddd")
