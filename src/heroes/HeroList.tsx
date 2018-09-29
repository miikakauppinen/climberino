import * as React from 'react'
import './heroes.css'
import {Link} from 'react-router-dom'
import {routes, heroes} from '../utils/constants'

class HeroList extends React.Component {
  render() {
    return (
      <div>
        <h1>List</h1>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          {
            heroes.map(
              x =>
                <Link
                  to={routes.heroes + '/' + x.name}
                  key={x.name}
                >
                  <div className="heroList-card" style={{backgroundImage: `url(${x.image})`}} />
                  {x.name}
                </Link>
            )
          }
        </div>
      </div>
    )
  }
}
export default HeroList
