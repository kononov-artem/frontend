import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import ListOfDictionaries from 'components/ListOfDictionaries/ListOfDictionaries'


class Dictionaries extends Component {
    render() {
        return (
            <Row>
                <Col
                    md={{ size: 8, offset: 2 }}
                >
                    <ListOfDictionaries/>
                </Col>
            </Row>
        )
    }
}

export default Dictionaries
