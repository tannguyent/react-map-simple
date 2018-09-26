import { takeLatest } from "redux-saga"  
import { call, put, all, fork } from "redux-saga/effects"
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

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  yield* takeLatest(PropertyActionTypes.FETCH_REQUEST, fetchRequest);
}


// We can also use `fork()` here to split our saga into multiple watchers.
function* propertySaga() {
  yield all([fork(watchFetchRequest)])
}

export default propertySaga
