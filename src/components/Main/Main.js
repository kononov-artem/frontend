import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import { Redirect } from 'react-router-dom'

class Main extends Component {
    isLoggedIn() {
        return localStorage.getItem('token')
    }

    render() {
        return (
            <div style={{ color: 'red' }}>
                123
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
