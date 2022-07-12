import { takeEvery } from "redux-saga/effects"
import { useDispatch } from 'react-redux'
import { setData } from "../reducers/weatherDataReducer"

async function WorkerSaga() {
    const dispatch = useDispatch()

    const request = await fetch('http://api.weatherapi.com/v1/current.json?key=95b27957d7b24ef5872124347221006&q=Sumy&aqi=yes')
    const data = await request.json()
    
    dispatch(setData(data))

    return data
}

export function* watcherSage() {
    yield takeEvery('LOAD_DATA', WorkerSaga)
}

export default function* rootSaga() {
    yield watcherSage()
}