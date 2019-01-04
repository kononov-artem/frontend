import React, { Component } from 'react'
import './App.css'
import SingUp from 'components/SingUp/SignUp'
import SingIn from 'components/SingIn/SingIn'
import Main from 'components/Main/Main'
import Logout from 'components/Logout/Logout'
import { Route, Switch } from 'react-router-dom'
import connect from 'react-redux/es/connect/connect'

class App extends Component {
    render() {
        return (
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <Switch>
                    <Route path="/signin" exact component={SingIn} />
                    <Route path="/singup" component={SingUp} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/" component={Main} />
                </Switch>
            </div>
        )
    }
}

export const mapStateToProps = store => {
    return {
        token: store.signin.token || null,
    }
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
