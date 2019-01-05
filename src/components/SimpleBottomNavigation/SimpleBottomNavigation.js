import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'
import BookIcon from '@material-ui/icons/Book'
import SettingsIcon from '@material-ui/icons/Settings'
import HomeIcon from '@material-ui/icons/Home'

const styles = {
    root: {
        width: '100%',
    },
}

class SimpleBottomNavigation extends React.Component {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value })
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
                <BottomNavigationAction label="Achievement" icon={<AccountBalanceIcon />} />
                <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
            </BottomNavigation>
        )
    }
}

SimpleBottomNavigation.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleBottomNavigation)
