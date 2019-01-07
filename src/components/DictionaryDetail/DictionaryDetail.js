import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import { GetDictionaryDetailAction } from 'store/actions/dictionaryDetail'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import CheckIcon from '@material-ui/icons/Check'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

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

    handlerFocusOut = () => {
        this.setState({ isNameEdit: false })
    }

    handleChangeName = () => {
        console.log(this.state.name)
        this.handlerFocusOut()
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }

    renderName = () => {
        if (this.state.isNameEdit) {
            return (
                <div>
                    <TextField
                        id="standard-name"
                        label="Name"
                        autoFocus
                        defaultValue={this.state.dictionary.name}
                        autoComplete="off"
                        onChange={this.handleChange('name')}
                        margin="normal"
                    />
                    <IconButton onClick={this.handleChangeName}>
                        <CheckIcon />
                    </IconButton>
                    <IconButton onClick={this.handlerFocusOut}>
                        <HighlightOffIcon />
                    </IconButton>
                </div>
            )
        }
        return (
            <div>
                {this.state.dictionary.name}
                <IconButton onClick={this.handleClickOnName}>
                    <EditIcon />
                </IconButton>
            </div>
        )
    }

    render() {
        return (
            <Row>
                <Col md={{ size: 8, offset: 2 }}>
                    <div
                        style={{
                            backgroundColor: 'red',
                        }}
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
