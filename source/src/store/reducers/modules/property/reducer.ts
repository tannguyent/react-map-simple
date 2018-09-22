import { Reducer } from 'redux';
import { IPropertyState } from './types'
import { SearchCondition } from '../../../../models/index'
import { PropertyActionTypes } from './actions'
// Type-safe initialState!
export const initialState: IPropertyState = {
    searchCondition: new SearchCondition(),
    data: [],
    errors: "",
    loading: false
};

const reducer: Reducer<IPropertyState> = (state = initialState, action) => {
    switch (action.type) {
        case PropertyActionTypes.FETCH_REQUEST: {
            return { ...state, loading: true }
        }
        case PropertyActionTypes.FETCH_SUCCESS: {
            return { ...state, loading: false, data: action.payload }
        }
        case PropertyActionTypes.FETCH_ERROR: {
            return { ...state, loading: false, errors: action.payload }
        }
        case PropertyActionTypes.UPDATE_SEARCH_CONDITION: {
            return { ...state, searchCondition: action.payload }
        }
        default: {
            return state
        }
    }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as propertyReducer }