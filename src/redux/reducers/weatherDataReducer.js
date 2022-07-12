import { createSlice } from "@reduxjs/toolkit";

const weatherDataReducer = createSlice({
  name: "weather",
  initialState: {
    location: {
      name: "vsdfvs",
      region: "",
      country: "",
    },
    current: {
      temp_c: 0,
      feelslike_c: 0,
      wind_kph: 0,
      pressure_mb: 0,
      humidity: 0,
      uv_index: 0,
    },
  },
  reducers: {
    setData: (state, action) => {
      state.location.name = action.payload.location.name;
      state.location.region = action.payload.location.region;
      state.location.country = action.payload.location.country;

      state.current.temp_c = action.payload.current.temp_c;
      state.current.feelslike_c = action.payload.current.feelslike_c;
      state.current.wind_kph = action.payload.current.wind_kph;
      state.current.pressure_mb = action.payload.current.pressure_mb;
      state.current.humidity = action.payload.current.humidity;
      state.current.uv_index = action.payload.current.uv;
    },
  },
});

export const { setData } = weatherDataReducer.actions;
export default weatherDataReducer.reducer;
