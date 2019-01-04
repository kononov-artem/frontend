import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from 'components/Home/Home'

class Main extends Component {
    isLoggedIn() {
        return localStorage.getItem('token')
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
                {!this.isLoggedIn() ? <Redirect to="/signin" /> : null}
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
)(Main)
