import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import BookIcon from '@material-ui/icons/Book'
import SettingsIcon from '@material-ui/icons/Settings'
import HomeIcon from '@material-ui/icons/Home'
import { Redirect } from 'react-router-dom'

const styles = {
    root: {
        width: '100%',
    },
}
const redirectValue = {
    0: '/',
    1: '/dictionaries',
    2: '/achievements',
    3: '/settings',
}

class SimpleBottomNavigation extends React.Component {
    constructor(props) {
        super(props)
        this.isRedirect = false
    }

    state = {
        value: 0,
    }

    componentWillMount() {
        this.isRedirect = false
    }

    renderRedirect = () => {
        if (window.location.pathname !== redirectValue[this.state.value]) {
            return <Redirect push to={redirectValue[this.state.value]} />
        }
    }

    handleChange = (event, value) => {
        if (value !== this.state.value) {
            this.isRedirect = true
            this.setState({
                value: value,
            })
        }
    }

    render() {
        const { classes } = this.props
        const { value } = this.state

        return (
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Dictionaries" icon={<BookIcon />} />
                <BottomNavigationAction label="Achievements" icon={<AccountBalanceIcon />} />
                <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
                {this.isRedirect ? this.renderRedirect() : null}
            </BottomNavigation>
        )
    }
}

SimpleBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleBottomNavigation)
