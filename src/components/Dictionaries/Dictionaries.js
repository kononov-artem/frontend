import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ListOfDictionaries from 'components/ListOfDictionaries/ListOfDictionaries'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { Redirect } from 'react-router-dom'
import * as urls from '../../urls'

const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
    },
})

class Dictionaries extends Component {
    state = {
        isRenderRedirect: false,
    }

    handleClick = () => {
        this.setState({ isRenderRedirect: true })
    }

    renderRedirect = () => {
        if (this.state.isRenderRedirect) {
            return <Redirect to={urls.CREATE_DICTIONARY} />
        }
    }

    render() {
        const { classes } = this.props
        return (
            <Row>
                <Col md={{ size: 8, offset: 2 }}>
                    <ListOfDictionaries />
                    <Fab
                        color="primary"
                        aria-label="Add"
                        onClick={this.handleClick}
                        className={classes.fab}
                    >
                        <AddIcon />
                    </Fab>
                    {this.renderRedirect()}
                </Col>
            </Row>
        )
    }
}

Dictionaries.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Dictionaries)
