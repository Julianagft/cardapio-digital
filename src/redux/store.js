
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "./root-reducer.js";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;