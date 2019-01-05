import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from 'components/Home/Home'
import Dictionaries from 'components/Dictionaries/Dictionaries'
import { Row, Col } from 'reactstrap'
import * as urls from '../../urls'


class Main extends Component {
    isLoggedIn() {
        // return localStorage.getItem('token')
        return true
    }

    render() {
        return (
            <Row>
                <Col>
                    <Switch>
                        <Route path={urls.DICTIONARIES} component={Dictionaries} />
                        <Route path={urls.HOME} exact component={Home} />
                    </Switch>
                    {!this.isLoggedIn() ? <Redirect to={urls.LOGOUT} /> : null}
                </Col>
            </Row>
        )
    }
}

export default Main
