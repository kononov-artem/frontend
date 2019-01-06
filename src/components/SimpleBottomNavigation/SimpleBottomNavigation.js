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
import { connect } from 'react-redux'
import * as urls from '../../urls'


const styles = {
    root: {
        width: '100%',
    },
}
const redirectValue = {
    0: urls.HOME,
    1: urls.DICTIONARIES,
    2: urls.ACHIVEMENTS,
    3: urls.SETTINGS,
}

class SimpleBottomNavigation extends React.Component {
    constructor(props) {
        super(props)
        this.isRedirect = false
    }

    state = {
        value: parseInt(this.getKeyByValue(redirectValue, this.props.pathname)),
    }

    getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.pathname !== this.props.pathname) {
            this.isRedirect = false
            let value = this.getKeyByValue(redirectValue, nextProps.pathname)
            value = parseInt(value)
            this.setState({
                value: value,
            })
        }
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

const mapStateToProps = store => {
    return {
        pathname: store.router.location.pathname,
    }
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(SimpleBottomNavigation))
