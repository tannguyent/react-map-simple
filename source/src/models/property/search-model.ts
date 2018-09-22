
export interface ISearchCondition {
    minPrice: number;
    maxPrice: number;
}

export class SearchCondition implements ISearchCondition {
    public minPrice: number;
    public maxPrice: number;
}


