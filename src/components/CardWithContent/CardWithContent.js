import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'
import image from 'static/back.jpg'
import { Redirect } from 'react-router-dom'

const styles = theme => ({
    card: {
        maxWidth: 400,
        margin: 50,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    content: {
        backgroundColor: '#cccccc',
    },
})

class RecipeReviewCard extends Component {
    state = {
        isRedirect: false,
    }

    handleCardClick = () => {
        this.setState({ isRedirect: true })
    }

    render() {
        const { classes } = this.props

        return (
            <CardActionArea className={classes.card} onClick={this.handleCardClick}>
                <Card>
                    <CardMedia className={classes.media} image={image} title="" />
                    <CardContent className={classes.content}>
                        <Typography variant="h6">{this.props.title}</Typography>
                        <Typography component="p">{this.props.description}</Typography>
                    </CardContent>
                    {this.state.isRedirect ? <Redirect to={this.props.redirectTo} /> : null}
                </Card>
            </CardActionArea>
        )
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
    redirectTo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default withStyles(styles)(RecipeReviewCard)
