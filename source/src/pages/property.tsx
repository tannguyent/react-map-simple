import * as React from 'react'
import { RouteComponentProps, Route, Switch } from 'react-router-dom'
import IndexPage from '../container/property/list'

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AllProps = RouteComponentProps<{}> 

class PropertyPage extends React.Component<AllProps> {
  public render() {
    const { match } = this.props

    return (
      <Switch>
        <Route path={match.path + '/'} component={IndexPage} />
      </Switch>
    )
  }
}

// Now let's connect our component!
// With redux v4's improved typings, we can finally omit generics here.
export default PropertyPage
