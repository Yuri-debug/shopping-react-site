import { createSlice } from "@reduxjs/toolkit";

const sumReducer = createSlice({
    name: 'sum',
    initialState: {
        sum: 0
    },
    reducers: {
        setSum: (state, action) => {
            state.sum += action.payload
        },
        resetSum: (state) => {
            state.sum = 0
        }
    }
})

export const {setSum, resetSum} = sumReducer.actions
export default sumReducer.reducer