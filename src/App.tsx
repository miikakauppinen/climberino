import * as React from 'react'
import './App.css'
import HeroesContainer from "./heroes/HeroesContainer"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Router basename={'/climberino'}>
          <Switch>
            <Route path={'/heroes'} component={HeroesContainer}/>
            <Route
              exact path={'/'}
              render={
                () => (<header className="App-header">
                  <h1 className="App-title">Kauppinen & CO kiipeilykollektiivi!</h1>
                </header>)
              }
            />
          </Switch>

        </Router>
      </div>
    )
  }
}

export default App
