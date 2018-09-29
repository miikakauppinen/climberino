import * as React from 'react'
import {RouteComponentProps} from "react-router"
import {heroes} from "../utils/constants";

interface IProps extends RouteComponentProps<any> {
}

class HeroCard extends React.Component<IProps> {
  render() {
    const {match} = this.props
    const hero: any = heroes.find(x => x.name === match.params.name) || {}
    return (
      <div>
        <img src={hero.image}/>
        <div>{hero.name}</div>
      </div>
    )
  }
}
export default HeroCard
