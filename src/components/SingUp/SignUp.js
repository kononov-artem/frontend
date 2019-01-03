import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input'

const styles = {
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
}

class SignUp extends Component {
    render() {
        const { classes } = this.props

        return (
            <Container fluid>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Card
                            style={{
                                width: 'auto',
                                height: 50,
                                backgroundColor: '#797c98',
                                position: 'relative',
                                top: 25,
                                textAlign: 'center',
                                paddingTop: 10,
                            }}
                        >
                            Sign Up
                        </Card>

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
                        <Button size="small">Sign in</Button>
                    </CardActions>
                </Card>
            </Container>
        )
    }
}

export default withStyles(styles)(SignUp)
