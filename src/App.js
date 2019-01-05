import React, { Component } from 'react'
import './App.css'
import SingUp from 'components/SingUp/SignUp'
import SingIn from 'components/SingIn/SingIn'
import Main from 'components/Main/Main'
import Logout from 'components/Logout/Logout'
import { Route, Switch } from 'react-router-dom'
import { Row, Col, Container } from 'reactstrap'
import MenuAppBar from 'components/AppBar/AppBar'
import SimpleBottomNavigation from 'components/SimpleBottomNavigation/SimpleBottomNavigation'

class App extends Component {
    render() {
        return (
            <Container fluid>
                <Row
                    style={{
                        backgroundColor: '#37434f',
                    }}
                >
                    <Col
                        md={{ size: 12, offset: 0 }}
                        style={{
                            padding: 0,
                            position: 'fixed',
                            top: 0,
                            zIndex: 1,
                        }}
                    >
                        <MenuAppBar />
                    </Col>
                </Row>

                <div
                    style={{
                        paddingTop: 70,
                        paddingBottom: 70,
                    }}
                >
                    <Switch>
                        <Route path="/signin" component={SingIn} />
                        <Route path="/singup" component={SingUp} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/" exact component={Main} />
                    </Switch>
                </div>

                <Row
                    style={{
                        backgroundColor: '#37434f',
                    }}
                >
                    <Col
                        md={{ size: 12, offset: 0 }}
                        style={{
                            position: 'fixed',
                            bottom: 0,
                            padding: 0,
                            zIndex: 1,
                        }}
                    >
                        <SimpleBottomNavigation />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App
