
import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { RootState } from './state';
import { propertyReducer } from './modules/property/reducer';
export { RootState, RouterState };

const rootReducer = combineReducers<RootState>({
    router: routerReducer as any,
    property: propertyReducer as any
});
export default rootReducer;