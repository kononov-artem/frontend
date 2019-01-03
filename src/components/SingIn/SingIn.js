import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { SignInAction } from 'store/actions/signin'

const styles = theme => ({
    card: {
        minWidth: 275,
        backgroundColor: '#FFFFFF',
        minHeight: 400,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        margin: theme.spacing.unit,
        '&:hover': {
            outline: '0 !important',
        },
        '&:focus': {
            outline: '0 !important',
        },
    },
    titleBlock: {
        width: 'auto',
        height: 50,
        backgroundColor: '#797c98',
        position: 'relative',
        top: 25,
        textAlign: 'center',
        paddingTop: 10,
    },
})

const singUp = props => <Link to="/singup" {...props} />

class SingIn extends Component {
    signIn = () => {
        // fetch('http://localhost:8000/auth/token/create/', {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     method: 'POST',
        //     body: JSON.stringify({
        //         password: 123,
        //         username: 'artem',
        //     }),
        // })
        //     .then(function(response) {
        //         return response.json()
        //     })
        //     .then(answer => {
        //         console.log(answer)
        //     })
        //     .catch(console.log)
        this.props.signIn()
        setTimeout(() => {
            console.log(this.props.token)
        }, 2000)
    }

    render() {
        const { classes } = this.props

        return (
            <Container fluid>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Card className={classes.titleBlock}>Sign In</Card>
                    </Col>
                </Row>
                <Card className={classes.card}>
                    <CardContent>
                        <Row
                            style={{
                                marginTop: 50,
                            }}
                        >
                            <Col xs="6">
                                <Input
                                    placeholder="Login"
                                    inputProps={{
                                        'aria-label': 'Description',
                                    }}
                                />
                            </Col>
                            <Col xs="6">
                                <Input
                                    placeholder="Password"
                                    inputProps={{
                                        'aria-label': 'Description',
                                    }}
                                />
                            </Col>
                        </Row>
                    </CardContent>
                    <CardActions>
                        <Button className={classes.button} onClick={this.signIn}>
                            Sign in
                        </Button>
                        <Button component={singUp} className={classes.button}>
                            Sign up
                        </Button>
                    </CardActions>
                </Card>
            </Container>
        )
    }
}

export const mapStateToProps = store => {
    return {
        token: store.signin.token,
    }
}

const mapDispatchToProps = {
    signIn: () => new SignInAction().makeRequest(),
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SingIn))

// export default withStyles(styles)(SingIn)
