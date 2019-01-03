import React, { Component } from 'react'
import './App.css'
import { Container, Row, Col } from 'reactstrap'
import SingUp from 'components/SingUp/SignUp'
import SingIn from 'components/SingIn/SingIn'
import { Route } from 'react-router-dom'

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
                <Route path="/" exact component={SingIn} />
                <Route path="/singup" component={SingUp} />
            </div>
        )
    }
}

export default App
