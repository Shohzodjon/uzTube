import React from 'react'
import './App.css'
import HomePage from './containers/HomePage/HomePage'
import UserProfilePage from './components/UserProfilePage/UserProfilePage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import WatchPage from './containers/WatchPage/WatchPage'

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                        <Route exact path="/watch">
                            <WatchPage />
                        </Route>
                        <Route exact path="/userProfilePage">
                            <UserProfilePage />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App
