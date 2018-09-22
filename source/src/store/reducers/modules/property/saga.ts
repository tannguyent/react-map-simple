import { takeLatest } from "redux-saga"  
import { call, put } from "redux-saga/effects"
import { PropertyActionTypes } from "./actions"

const url = [
    // Length issue
    `https://gist.githubusercontent.com`,
    `/farrrr/dfda7dd7fccfec5474d3`,
    `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
  ].join("")

function* fetchRequest() {  
   try {
      const data = yield call(fetch, url);
      yield put({type: PropertyActionTypes.FETCH_SUCCESS, payload: data});
   } catch (e) {
      yield put({type: PropertyActionTypes.FETCH_ERROR, payload: e.message});
   }
}

function* fetchSaga() {  
  yield* takeLatest(PropertyActionTypes.FETCH_REQUEST, fetchRequest);
}

export default fetchSaga;  