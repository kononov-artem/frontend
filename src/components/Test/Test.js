import React from 'react'
import Button from '@material-ui/core/Button/Button'
import { Row, Col } from 'reactstrap'

class Test extends React.Component {
    constructor(props) {
        super(props)
        this.initColors = [null, null, null, null]
        this.disable = [false, false, false, false]
        this.initVarians = ['outlined', 'outlined', 'outlined', 'outlined']
        this.count = 0
        this.state = {
            word: '...init',
            wrongWords: [],
            colors: [...this.initColors],
            variants: [...this.initVarians],
            isAnswer: false,
            countOfAttempt: 0,
            countOfСorrect: 0,
            disable: [...this.disable],
            isLoading: true,
            isChecked: false,
        }
    }

    componentWillMount() {
        this.loadData()
    }

    loadData() {
        var array = [
            { original: 'ceremony', translate: 'церемония' },
            { original: '1', translate: 'd' },
            { original: '2', translate: 'ds' },
            { original: '3', translate: 'das' },
            { original: '4', translate: 'ca' },
            { original: 'certain', translate: 'dwq' },
        ]
        this.item = this.shuffle(array)
        this.getWord()
    }

    getWord() {
        this.setState({
            isChecked: false,
            colors: [...this.initColors],
            variants: [...this.initVarians],
            disable: [...this.disable],
            isAnswer: false,
        })

        if (this.count === this.item.length) {
            this.count = 0
        }
        var word = this.item[this.count].translate
        var translate = this.item[this.count].original
        var wrongWords = this.getWrongWord(translate, 3)
        wrongWords.push(translate)
        var data = wrongWords
        data = this.shuffle(data)
        this.setState({
            wrongWords: data,
            word: word,
            translate: translate,
        })
        this.count++
        console.log(this.state)
    }

    shuffle(array) {
        var currentIndex = array.length,
            temporaryValue,
            randomIndex
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1
            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }
        return [...array]
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }

    getWrongWord(word, count) {
        var index2 = 0
        if (count > this.item.length) {
            count = this.item.length
        }
        var arr = []
        while (index2 < count) {
            var index = this.getRandomInt(0, this.item.length)
            if (
                this.item[index].original !== word &&
                arr.indexOf(this.item[index].original) === -1
            ) {
                arr.push(this.item[index].original)
                index2++
            }
        }
        return [...arr]
    }

    check(word, index) {
        console.log(this.state.isChecked)
        if (!this.state.isChecked) {
            let colors = [...this.state.colors]
            let variants = [...this.state.variants]
            var disable = [true, true, true, true]
            this.setState({ countOfAttempt: this.state.countOfAttempt + 1 })
            if (word === this.state.translate) {
                colors[index] = 'primary'
                variants[index] = 'contained'
                this.setState({ countOfСorrect: this.state.countOfСorrect + 1 })
            } else {
                colors[index] = 'secondary'
                variants[index] = 'contained'
            }
            variants[index] = 'outlined'
            disable[index] = false
            this.state.wrongWords.map((item, index) => {
                if (item === this.state.translate) {
                    disable[index] = false
                    colors[index] = 'primary'
                    variants[index] = 'contained'
                }
            })

            this.setState({
                colors: colors,
                variants: variants,
                isAnswer: true,
                disable: [...disable],
                isChecked: true,
            })
        }
    }

    render() {
        return (
            <Row>
                <Row>
                    <Col>
                        <Row>
                            <Col
                                xs="12"
                                md="12"
                                style={{
                                    textAlign: 'center',
                                    fontFamily: 'Oswald',
                                    fontSize: 16,
                                    marginTop: 25,
                                }}
                            >
                                <div>
                                    <p>Give the translation of the word</p>
                                </div>

                                <div
                                    style={
                                        {
                                            // border: '1px solid #cccccc',
                                        }
                                    }
                                >
                                    <p
                                        style={{
                                            fontSize: 24,
                                            marginTop: 20,
                                            marginBottom: 20,
                                            fontFamily: 'Noto Serif TC',
                                        }}
                                    >
                                        <b>{this.state.word.toLowerCase()}</b>
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 10 }}>
                            <Col md-offset="2" md="8" xs-offset="2" xs="8">
                                <Row>
                                    {this.state.wrongWords.map((word, index) => (
                                        <Col key={index} md="6" xs="6">
                                            <Button
                                                style={{
                                                    width: 117,
                                                    marginBottom: 20,
                                                }}
                                                color={this.state.colors[index]}
                                                variant={this.state.variants[index]}
                                                disabled={this.state.disable[index]}
                                                key={index}
                                                onClick={() => this.check(word, index)}
                                            >
                                                <span
                                                    style={{
                                                        fontSize: 12,
                                                    }}
                                                >
                                                    {word}
                                                </span>
                                            </Button>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ height: 50 }}>
                            <Col md-offset="2" md="8" xs-offset="2" xs="8">
                                {this.state.isAnswer ? (
                                    <Button
                                        variant="outlined"
                                        onClick={() => this.getWord()}
                                        style={{
                                            width: '100%',
                                        }}
                                    >
                                        Next
                                    </Button>
                                ) : null}
                            </Col>
                        </Row>
                        <Row>
                            <Col
                                md-offset="5"
                                md="3"
                                xs-offset="5"
                                xs="2"
                                style={{
                                    // textAlign: 'center'
                                    marginLeft: 192,
                                }}
                            >
                                <div
                                    style={
                                        {
                                            // borderRadius: '5px',
                                            // border: '1px solid #cccccc',
                                        }
                                    }
                                >
                                    <b>
                                        <span style={{ color: '' }}>
                                            {this.state.countOfСorrect}
                                        </span>{' '}
                                        /{' '}
                                        <span style={{ color: '' }}>
                                            {this.state.countOfAttempt}
                                        </span>
                                    </b>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
        )
    }
}

export default Test
