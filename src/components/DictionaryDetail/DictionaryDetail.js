import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { GetDictionaryDetailAction } from 'store/actions/dictionaryDetail'


class DictionaryDetail extends Component {
    constructor(props) {
        super(props)
        this.props.getDictionary(this.props.match.params.dictionary_id)
    }

    state = {
        dictionary: {}
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.dictionary !== this.props.dictionary) {
            this.setState({
                dictionary: nextProps.dictionary,
            })
        }
    }

    render() {
        return (
            <Row>
                <Col>
                    {String(this.state.dictionary.name)}
                </Col>
            </Row>
        )
    }
}


const mapStateToProps = store => {
    return {
        dictionary: store.dictionaryDetail.dictionary,
    }
}

const mapDispatchToProps = {
    getDictionary: (id) => new GetDictionaryDetailAction().makeRequest({id: id}, {}, {}, 'GET'),
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictionaryDetail)

