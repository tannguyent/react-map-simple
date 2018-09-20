
import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { RootState } from './state';

export { RootState, RouterState };

const rootReducer = combineReducers<RootState>({
    router: routerReducer as any
});
export default rootReducer;