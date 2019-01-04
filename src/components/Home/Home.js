import React, { Component } from 'react'
import './Home.css'
import { Container, Row, Col } from 'reactstrap'
import MenuAppBar from 'components/AppBar/AppBar'

class Home extends Component {
    render() {
        return (
            <div className="content-window">
                <Row>
                    <Col md={{ size: 12, offset: 0 }}>
                        <MenuAppBar />
                    </Col>
                    <Col md={{ size: 12, offset: 0 }}>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home
