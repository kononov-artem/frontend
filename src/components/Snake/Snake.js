import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import './Snake.css'
import TextField from '@material-ui/core/TextField/TextField'

class Main extends Component {
    state = {
        words: ['Table', 'Enable', 'East', 'Twist'],
        newWord: '',
    }

    capitalizeLastLetter = string => {
        return string.slice(0, -1) + string.charAt(string.length - 1).toUpperCase()
    }

    getBodySnake = (word, index) => {
        return (
            <span key={index} style={{ color: this.getRandomColor() }}>
                {word}
            </span>
        )
    }

    getRandomColor() {
        let letters = '0123456789ABCDEF'
        let color = '#'
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)]
        }
        return color
    }

    renderSnake = () => {
        let snake = this.state.words.map((word, index) => {
            let snakeWord = word
            if (index !== this.state.words.length - 1) {
                snakeWord = this.capitalizeLastLetter(snakeWord)
            }
            if (index === 0) {
                snakeWord = this.getBodySnake(snakeWord, index)
            } else {
                snakeWord = this.getBodySnake(snakeWord.slice(1), index)
            }
            return snakeWord
        })
        return snake
    }

    isRightWord = word => {
        return true
    }

    handleKeyPress = event => {
        if (event.key === 'Enter') {
            if (this.isRightWord(this.state.newWord)) {
                let words = [...this.state.words]
                words[words.length] = this.state.newWord
                this.setState({
                    words: words,
                    newWord: this.state.newWord.charAt(this.state.newWord.length - 1).toUpperCase(),
                })
            }
        }
    }

    handleChange = event => {
        this.setState({ newWord: event.target.value })
    }

    render() {
        return (
            <Row>
                <Col md={{ size: 8, offset: 2 }}>
                    <div className="main">
                        <div>{this.renderSnake()}</div>
                    </div>

                    <TextField
                        id="standard-name"
                        label="word"
                        autoFocus
                        value={this.state.newWord}
                        autoComplete="off"
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        margin="normal"
                    />
                </Col>
            </Row>
        )
    }
}

export default Main
