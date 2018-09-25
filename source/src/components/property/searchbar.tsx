
import * as React from 'react';
import { ISearchCondition, SearchCondition } from "../../models/index"
import * as propertyActions from "../../store/property/actions"
import { RootState } from '../../store/root-reducer';
import { connect } from 'react-redux'

// Separate state props + dispatch props to their own interfaces.
interface IPropsFromState {
  searchCondition?: ISearchCondition
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface IPropsFromDispatch {
  updateSearchCondition?: typeof propertyActions.updateSearchCondition
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = IPropsFromState & IPropsFromDispatch

class PropertySearchBar extends React.Component<AllProps>{

  constructor(props: AllProps) {
    super(props)
    this.submitChange = this.submitChange.bind(this);
  }

  submitChange() {
    let minPriceElement = document.getElementById('txtMinPrice') as any;
    let maxPriceElement = document.getElementById('txtMaxPrice') as any;
    if (minPriceElement && maxPriceElement && this.props.updateSearchCondition) {
      let condition = new SearchCondition()
      condition.minPrice = parseInt(minPriceElement.value || "0")
      condition.maxPrice = parseInt(maxPriceElement.value || "0")
      this.props.updateSearchCondition(condition)
    }
  }

  public render() {
    return (
      <div>
        <input className={'form-control'}
          id='txtMinPrice'
          placeholder={'Description'}
          type={'text'}
        />

        <input className={'form-control'}
          id='txtMaxPrice'
          placeholder={'Description'}
          type={'text'}
        />
        <button className={'btn btn-info'} onClick={this.submitChange} >search</button>
      </div>
    );
  }
}
// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ property }: RootState) => ({
  searchCondition: property.searchCondition
})


// mapDispatchToProps is especially useful for constraining our actions to the connected component.
// You can access these via `this.props`.
const mapDispatchToProps = (dispatch: any) => ({
  updateSearchCondition: (condition: ISearchCondition) => dispatch(propertyActions.updateSearchCondition(condition))
})


// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(mapStateToProps, mapDispatchToProps as any)(PropertySearchBar) as any as React.StatelessComponent<AllProps>;
