import React, { Component } from 'react'
import connect from 'react-redux/es/connect/connect'
import { Redirect } from 'react-router-dom'

class Logout extends Component {
    componentWillMount() {
        localStorage.removeItem('token')
    }

    render() {
        return <Redirect to="/" />
    }
}

export const mapStateToProps = store => {
    return {
        token: store.signin.token || null,
    }
}
//TODO: delete token from store
const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Logout)
