import { createSlice } from "@reduxjs/toolkit";
import dataJSON from "../../components/Products/components/data.json";

const deletItemReducer = createSlice({
  name: "index",
  initialState: {
    index: 0,
    data: dataJSON.data,
  },
  reducers: {
    makeDelete: (state, action) => {
      for (let i = 0; i < state.data.length; i++)
        if (action.payload == state.data[i].id) {
          state.data.splice(i, 1);
        }
    },
  },
});

export const { setArray, makeDelete } = deletItemReducer.actions;
export default deletItemReducer.reducer;
