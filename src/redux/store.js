import { configureStore } from "@reduxjs/toolkit";
import deletItemReducer from "./reducers/deleteItemReducer";
import inputReducer from "./reducers/inputReducer";
import sumReducer from "./reducers/sumReducer";


const store = configureStore({
    reducer: {
        data: deletItemReducer,
        sum: sumReducer,
        input: inputReducer
    }
})

export default store