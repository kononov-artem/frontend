import React, { Component } from 'react'
import './Home.css'
import { Row, Col } from 'reactstrap'
import CardWithContent from 'components/CardWithContent/CardWithContent'

// <div
//     style={{
//         position: 'absolute',
//         left: '50%',
//         top: '50%',
//         transform: 'translate(-50%, -50%)',
//     }}
// >
//     <CardWithContent
//         redirectTo="/test"
//         title="Test"
//         description="Description"
//     />
// </div>

class Home extends Component {
    render() {
        return (
            <div className="content-window">
                <Row>
                    <Col md={{ size: 10, offset: 1 }}>
                        <Row>
                            <Col md={{ size: 6, offset: 0 }}>
                                <div
                                    style={{
                                        width: '100%',
                                        height: 400,
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <CardWithContent
                                            redirectTo="/test"
                                            title="Test"
                                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quasi."
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col md={{ size: 6, offset: 0 }}>
                                <div
                                    style={{
                                        width: '100%',
                                        height: 400,
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <CardWithContent
                                            redirectTo="/constructor"
                                            title="Constructor"
                                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quasi."
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={{ size: 10, offset: 1 }}>
                        <Row>
                            <Col md={{ size: 6, offset: 0 }}>
                                <div
                                    style={{
                                        width: '100%',
                                        height: 400,
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <CardWithContent
                                            redirectTo="/sprint"
                                            title="Sprint"
                                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quasi."
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col md={{ size: 6, offset: 0 }}>
                                <div
                                    style={{
                                        width: '100%',
                                        height: 400,
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '50%',
                                            top: '50%',
                                            transform: 'translate(-50%, -50%)',
                                        }}
                                    >
                                        <CardWithContent
                                            redirectTo="/translate"
                                            title="Translate"
                                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quasi."
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home
