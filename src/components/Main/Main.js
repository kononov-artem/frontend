import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Home from 'components/Home/Home'
import Test from 'components/Test/Test'
import Snake from 'components/Snake/Snake'
import CreateDictionary from 'components/CreateDictionary/CreateDictionary'
import DictionaryDetail from 'components/DictionaryDetail/DictionaryDetail'
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
                        <Route path={urls.TEST} component={Test} />
                        <Route path={urls.DICTIONARIES} component={Dictionaries} />
                        <Route path={urls.SNAKE} component={Snake} />
                        <Route path={urls.CREATE_DICTIONARY} component={CreateDictionary} />
                        <Route
                            path={`${urls.DICTIONARY_DETAIL}/:dictionary_id`}
                            component={DictionaryDetail}
                        />
                        <Route path={urls.HOME} exact component={Home} />
                    </Switch>
                    {!this.isLoggedIn() ? <Redirect to={urls.LOGOUT} /> : null}
                </Col>
            </Row>
        )
    }
}

export default Main
