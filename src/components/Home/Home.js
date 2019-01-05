import React, { Component } from 'react'
import './Home.css'
import { Row, Col } from 'reactstrap'
import CardWithContent from 'components/CardWithContent/CardWithContent'


class Home extends Component {
    render() {
        return (
            <div className="content-window">
                <Row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <Row>
                            <Col md={{ size: 6, offset: 0 }}>
                                <CardWithContent
                                    redirectTo="/test"
                                    title="Test"
                                    description="Description"
                                />
                            </Col>
                            <Col md={{ size: 6, offset: 0 }}>
                                <CardWithContent
                                    redirectTo="/constructor"
                                    title="Constructor"
                                    description="Description"
                                />
                            </Col>
                        </Row>
                    </Col>

                    <Col md={{ size: 10, offset: 1 }}>
                        <Row>
                            <Col md={{ size: 6, offset: 0 }}>
                                <CardWithContent
                                    redirectTo="/sprint"
                                    title="Sprint"
                                    description="Description"
                                />
                            </Col>
                            <Col md={{ size: 6, offset: 0 }}>
                                <CardWithContent
                                    redirectTo="/translate"
                                    title="Translate"
                                    description="Description"
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home
