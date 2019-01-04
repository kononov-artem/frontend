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
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
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
            <CardActionArea onClick={this.handleCardClick}>
                <Card className={classes.card}>
                    <CardMedia className={classes.media} image={image} title="" />
                    <CardContent>
                        <Typography variant="h6">Title</Typography>
                        <Typography component="p">Description</Typography>
                    </CardContent>
                    { this.state.isRedirect ? <Redirect to="/test" /> : null }
                </Card>
            </CardActionArea>
        )
    }
}

RecipeReviewCard.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(RecipeReviewCard)
