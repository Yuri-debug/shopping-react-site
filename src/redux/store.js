import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import deletItemReducer from "./reducers/deleteItemReducer";
import inputReducer from "./reducers/inputReducer";
import sumReducer from "./reducers/sumReducer";
import weatherDataReducer from "./reducers/weatherDataReducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(
  {
    reducer: {
      data: deletItemReducer,
      sum: sumReducer,
      input: inputReducer,
      weatherData: weatherDataReducer,
    },
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;
