import React, { Component } from 'react'
import './Home.css'
import { Row, Col } from 'reactstrap'
import MenuAppBar from 'components/AppBar/AppBar'
import CardWithContent from 'components/CardWithContent/CardWithContent'


class Home extends Component {
    render() {
        return (
            <div className="content-window">
                <Row>
                    <Col md={{ size: 12, offset: 0 }}>
                        <MenuAppBar />
                    </Col>
                    <Col md={{ size: 12, offset: 0 }}>
                        <CardWithContent/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home
