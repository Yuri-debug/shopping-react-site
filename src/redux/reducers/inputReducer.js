import {createSlice} from '@reduxjs/toolkit'

const inputReducer = createSlice({
    name: 'input',
    initialState: {
        value: ''
    },
    reducers: {
        setInput: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setInput} = inputReducer.actions
export default inputReducer.reducer