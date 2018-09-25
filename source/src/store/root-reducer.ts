
import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { RootState } from './root-state';
import { propertyReducer } from './property/reducer';
export { RootState, RouterState };

const rootReducer = combineReducers<RootState>({
    router: routerReducer as any,
    property: propertyReducer as any
});
export default rootReducer;