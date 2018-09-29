import * as React from 'react'
import {Route, Switch, RouteComponentProps} from 'react-router-dom'
import HeroList from "./HeroList"
import HeroCard from "./HeroCard"

interface IProps extends RouteComponentProps<any> {
}

class HeroesContainer extends React.Component<IProps> {
  render() {
    return (
      <div>
        <Switch>
          <Route path={'/heroes/:name'} component={HeroCard} />
          <Route path={'/heroes/'} component={HeroList}/>
        </Switch>
      </div>
    )
  }
}
export default HeroesContainer
