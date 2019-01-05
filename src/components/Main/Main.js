import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from 'components/Home/Home'
import Dictionaries from 'components/Dictionaries/Dictionaries'
import { Row, Col } from 'reactstrap'


class Main extends Component {
    isLoggedIn() {
        return localStorage.getItem('token')
    }

    render() {
        return (
            <Row>
                <Col>
                    <Switch>
                        <Route path="/dictionaries" component={Dictionaries} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                    {!this.isLoggedIn() ? <Redirect to="/signin" /> : null}
                </Col>
            </Row>
        )
    }
}

export default Main
