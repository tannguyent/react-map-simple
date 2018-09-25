import { ISearchCondition, PropertyListModel } from '../../models/index'
export interface IPropertyState {
    readonly searchCondition: ISearchCondition;
    readonly loading: boolean
    readonly data: PropertyListModel[]
    readonly errors?: string
}
