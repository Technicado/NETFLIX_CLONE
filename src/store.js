import { configureStore } from "@reduxjs/toolkit";
import reducer from "./userSlice";

export default configureStore({
  reducer: {
    user: reducer,
  },
});
