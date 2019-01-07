import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { GetDictionaryDetailAction } from 'store/actions/dictionaryDetail'
import TextField from '@material-ui/core/TextField'

class DictionaryDetail extends Component {
    constructor(props) {
        super(props)
        this.props.getDictionary(this.props.match.params.dictionary_id)
    }

    state = {
        dictionary: {},
        isNameEdit: false,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.dictionary !== this.props.dictionary) {
            this.setState({
                dictionary: nextProps.dictionary,
            })
        }
    }

    handleClickOnName = () => {
        this.setState({ isNameEdit: true })
    }

    renderName = () => {
        if (this.state.isNameEdit) {
            return (
                <TextField
                    id="standard-name"
                    label="Name"
                    // className={classes.textField}
                    value={this.state.dictionary.name}
                    // onChange={this.handleChange('name')}
                    margin="normal"
                />
            )
        }
        return this.state.dictionary.name
    }

    render() {
        return (
            <Row>
                <Col md={{ size: 8, offset: 2 }}>
                    <div
                        style={{
                            backgroundColor: 'red',
                        }}
                        onClick={this.handleClickOnName}
                    >
                        {this.renderName()}
                    </div>
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
    getDictionary: id => new GetDictionaryDetailAction().makeRequest({ id: id }, {}, {}, 'GET'),
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DictionaryDetail)
