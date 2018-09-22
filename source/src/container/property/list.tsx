
import * as React from 'react';
import { PropertyListModel, ISearchCondition } from "../../models/index"
import { fetchRequest } from "../../store/reducers/modules/property/actions"
import { RootState } from '../../store/reducers';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

import PropertySearchBar  from "../../components/property/searchbar"

// Separate state props + dispatch props to their own interfaces.
interface IPropsFromState {
  loading: boolean
  data: PropertyListModel[]
  errors: string
  searchCondition: ISearchCondition
}

// We can use `typeof` here to map our dispatch types to the props, like so.
interface IPropsFromDispatch {
  fetchRequest?: typeof fetchRequest
}


// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = IPropsFromState & IPropsFromDispatch 

class PropertyList extends React.Component<AllProps>{
  public componentDidMount(){
    if(this.props.fetchRequest && this.props.searchCondition)
      this.props.fetchRequest(this.props.searchCondition);
  }
  public render() {
    let searchCondition = this.props.searchCondition;
    return (
      <div>
        <PropertySearchBar />
        <div> this is property list</div>
        <label>{searchCondition.minPrice}</label>
        <label>{searchCondition.maxPrice}</label>
      </div>
    );
  }
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ property }: RootState) => ({
  loading: property.loading,
  errors: property.errors,
  data: property.data,
  searchCondition: property.searchCondition
})

// Mapping our action dispatcher to props is especially useful when creating container components.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: (condition: ISearchCondition) => dispatch(fetchRequest(condition))
})

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default connect(mapStateToProps, mapDispatchToProps)(PropertyList)

