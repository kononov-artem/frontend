import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import AddWord from 'components/AddWord/AddWord'
import InfiniteLoaderExample from 'components/InfiniteLoaderExample/InfiniteLoaderExample'
import { httpRequest } from '../../http'
import { API_URL } from '../../constants'
import ListItem from '@material-ui/core/ListItem/ListItem'
import Checkbox from '@material-ui/core/Checkbox/Checkbox'
import ListItemText from '@material-ui/core/ListItemText/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton/IconButton'
import EditIcon from '@material-ui/core/SvgIcon/SvgIcon'
import List from '@material-ui/core/List/List'
import connect from 'react-redux/es/connect/connect'
import { withStyles } from '@material-ui/core'


const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
})

const filterWords = (words, inputValue) => {
    let new_words
    if (Array.isArray(words)) {
        new_words = words.map((item, index) => {
            return {
                label: item.word,
                value: item.word,
            }
        })
        if (inputValue) {
            return new_words.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
        }
    } else {
        new_words = words.word
    }

    return new_words
}
const promiseGetWord = inputValue => {
    return httpRequest(`${API_URL}search-word/`, 'POST', {}, { word: inputValue }).then(words => {
        return filterWords(words, inputValue)
    })
}

class CreateDictionary extends Component {
    state = {
        translate: null,
        translateList: [],
        checked: [],
        page: 0,
    }

    chooseWord = word => {
        console.log('word', word)
        this.setState({ word: word })
        this.promiseGetTranslate(word).then(word => {
            this.setState({ translate: word.word })
        })
    }
    chooseTranslate = word => {
        this.setState({ translate: word })
    }

    promiseGetTranslate = inputValue => {
        return httpRequest(`${API_URL}search-translate/`, 'POST', {}, { word: inputValue })
    }

    componentDidMount() {
        httpRequest(`${API_URL}translates/`, 'GET', {}, {}).then(translate => {
            this.setState({ translateList: translate.results })
        })
    }

    getDefaultValue = () => {
        if (this.state.translate) {
            return { label: this.state.translate, value: this.state.translate }
        }
        return null
    }

    onRowsRendered = (data) => {
        // console.log(data)
        this.setState({page: Math.floor(data.startIndex / 10)})
    }

    render() {
        const { classes } = this.props
        return (
            <Row>
                <Col md={{ size: 8, offset: 2 }}>
                    <h1 style={{color: 'blue'}}>Page: {this.state.page}</h1>
                    <Row>
                        <Col>
                            <InfiniteLoaderExample onRowsRendered={this.onRowsRendered} page={0}/>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ size: 6, offset: 0 }}>
                            <AddWord
                                chooseItem={this.chooseWord}
                                promiseOptions={promiseGetWord}
                                // value={{lable: this.state.word, value: this.state.word}}
                            />
                        </Col>
                        <Col md={{ size: 6, offset: 0 }}>
                            <AddWord
                                value={this.getDefaultValue()}
                                promiseOptions={promiseGetWord}
                                chooseItem={this.chooseTranslate}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default withStyles(styles)(CreateDictionary)
