import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'

class Dictionaries extends Component {
    render() {
        return (
            <Row>
                <Col md={{ size: 12, offset: 0 }}>
                    <div style={{ width: '100%', height: '100vh' }}>
                        <div
                            style={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        >
                            <div
                                style={{
                                    width: 400,
                                    height: 400,
                                    backgroundColor: 'red',
                                }}
                            />
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Dictionaries
