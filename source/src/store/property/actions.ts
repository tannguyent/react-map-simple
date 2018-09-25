import { ISearchCondition, IGoogleMapMaker } from '../../models';
import { action } from 'typesafe-actions'

export const enum PropertyActionTypes {
    UPDATE_SEARCH_CONDITION = '@@propertylist/UPDATE_SEARCH_CONDITION',
    FETCH_MAKERS = '@@propertylist/FETCH_MAKERS',
    FETCH_MAKERS_SUCCESS = '@@propertylist/FETCH_MAKERS_SUCCESS',

    FETCH_REQUEST = '@@propertylist/FETCH_REQUEST',
    FETCH_SUCCESS = '@@propertylist/FETCH_SUCCESS',
    FETCH_ERROR = '@@propertylist/FETCH_ERROR',
}

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
export const fetchMakers = (searchCondition: ISearchCondition) => action(PropertyActionTypes.FETCH_MAKERS, searchCondition)
export const fetchMakersSuccess = (data: IGoogleMapMaker[]) => action(PropertyActionTypes.FETCH_MAKERS_SUCCESS, data)
export const fetchRequest = (searchCondition: ISearchCondition) => action(PropertyActionTypes.FETCH_REQUEST, searchCondition)
export const fetchSuccess = (data: ISearchCondition[]) => action(PropertyActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(PropertyActionTypes.FETCH_ERROR, message)
export const updateSearchCondition = (searchCondition: ISearchCondition) => action(PropertyActionTypes.UPDATE_SEARCH_CONDITION, searchCondition)
