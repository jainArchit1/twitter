import { ConfigureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
const Store = ConfigureStore({
  reducer: {
    user: Slice,
  },
});
export default Store;
