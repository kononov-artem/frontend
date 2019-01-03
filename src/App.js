import React, { Component } from 'react'
import './App.css'
import { Container, Row, Col } from 'reactstrap'
import SingUp from 'components/SingUp/SignUp'
import SingIn from 'components/SingIn/SingIn'
import { Route } from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className="main-component">
                        <div className="overlay"/>

                        <Row>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <div className="content">
                                    <div className="vertical-center">
                                        <Route path="/" exact component={SingUp} />
                                        <Route path="/singin" component={SingIn} />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App
