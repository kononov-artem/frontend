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
            //<div
            //    style={{
            //        position: 'absolute',
            //        left: '50%',
            //        top: '50%',
            //        transform: 'translate(-50%, -50%)',
            //    }}
            //>
            //
            //</div>
            <Container fluid>
                <Row>
                    <Col>
                        <Row style={{
                            backgroundColor: '#37434f',
                        }}>
                            <Col md={{ size: 12, offset: 0 }} style={{
                                padding: 0,
                            }}>
                                <MenuAppBar />
                            </Col>
                        </Row>

                        <Switch>
                            <Route path="/signin" component={SingIn} />
                            <Route path="/singup" component={SingUp} />
                            <Route path="/logout" component={Logout} />
                            <Route path="/" exact component={Main} />
                        </Switch>

                        <Row style={{
                            backgroundColor: '#37434f',
                        }}>
                            <Col md={{ size: 12, offset: 0 }} style={{
                                position: 'fixed',
                                bottom: 0,
                                padding: 0,
                            }}>
                                <SimpleBottomNavigation/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default App
