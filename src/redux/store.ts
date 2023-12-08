import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import usersSaga from "./usersSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: (() => [sagaMiddleware]) as any,
});

sagaMiddleware.run(usersSaga);

export default store;
