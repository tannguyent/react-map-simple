import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
// import logger from 'redux-logger';

const persistConfig = {
    key: 'root',
    'storage': storage,
}

const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, reducers)
export default () => {
    const store = createStore(
        persistedReducer,
        applyMiddleware(...middlewares)
    )
    const persistor = persistStore(store)
    return { store, persistor }
}
