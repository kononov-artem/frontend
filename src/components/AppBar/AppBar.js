import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import ExitToApp from '@material-ui/icons/ExitToApp'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { CheckPermissionAction } from 'store/actions/checkPermission'
import { GetMyInformationAction } from 'store/actions/getMyInformation'
import { GetUsersAction } from 'store/actions/getUsers'
import { GetTokenByUserAction } from 'store/actions/getTokenByUser'
import SimpleDialogWrapped from 'components/UserSelectionMenu/UserSelectionMenu'

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}

class MenuAppBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
        logout: false,
        isSuperUser: false,
        isShowUserSelectionMenu: false,
        users: [],
    }

    componentWillMount() {
        if (!this.props.permission) {
            this.props.checkPermission()
            this.props.getMyInformation()
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.permission !== nextProps.permission) {
            if (nextProps.permission === 'superuser') {
                this.setState({ isSuperUser: true })
            }
        }
        if (this.props.users !== nextProps.users) {
            let users = nextProps.users.map(user => {
                return user.username
            })
            this.setState({ users: users })
        }
        if (this.props.userToken !== nextProps.userToken) {
            localStorage.setItem('userToken', nextProps.userToken)
            window.location.reload()
        }
        if (this.props.myInformation !== nextProps.myInformation) {
            this.setState({ username: nextProps.myInformation.username })
        }
    }

    handleCloseUsersMenu = value => {
        if (value !== this.state.selectedValue) {
            console.log({ username: value })
            this.props.getTokenByUser({ username: value })
        }
        this.setState({ selectedValue: value, isShowUserSelectionMenu: false })
    }

    handleChange = event => {
        this.setState({ auth: event.target.checked })
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    handleLogout = () => {
        this.setState({ logout: true })
    }

    handleLoginAsUser = () => {
        this.props.getUsers()
        this.setState({ isShowUserSelectionMenu: true })
        this.handleClose()
    }

    logout = () => {
        localStorage.removeItem('userToken')
        window.location.reload()
    }

    isViewAsUser = () => {
        return localStorage.getItem('userToken')
    }

    renderAdminMenu() {
        if (this.state.isSuperUser) {
            return <MenuItem onClick={this.handleLoginAsUser}>Login as user</MenuItem>
        }
    }

    render() {
        const { classes } = this.props
        const { auth, anchorEl } = this.state
        const open = Boolean(anchorEl)

        return (
            <div className={classes.root}>
                {this.state.logout ? <Redirect to="/logout" /> : null}

                <AppBar
                    position="static"
                    style={{
                        backgroundColor: '#37434f',
                    }}
                >
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Word
                        </Typography>
                        {auth && (
                            <div>
                                {this.state.username}
                                {this.isViewAsUser() ? (
                                    <IconButton
                                        aria-owns={open ? 'menu-appbar' : undefined}
                                        aria-haspopup="true"
                                        onClick={this.logout}
                                        color="inherit"
                                    >
                                        <ExitToApp />
                                    </IconButton>
                                ) : null}

                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : undefined}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                    {this.renderAdminMenu()}
                                    <MenuItem onClick={this.handleLogout}>Log out</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
                <SimpleDialogWrapped
                    selectedValue={this.state.selectedValue}
                    open={this.state.isShowUserSelectionMenu}
                    onClose={this.handleCloseUsersMenu}
                    users={this.state.users}
                />
            </div>
        )
    }
}

MenuAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
}

export const mapStateToProps = store => {
    return {
        permission: store.checkPermission.permission
            ? store.checkPermission.permission.permission
            : null,
        users: store.getUsers.users ? store.getUsers.users.results : null,
        userToken: store.getTokenByUser.userToken ? store.getTokenByUser.userToken.token : null,
        myInformation: store.getMyInformation.myInformation,
    }
}

const mapDispatchToProps = {
    checkPermission: () => new CheckPermissionAction().makeRequest({}, {}, {}, 'GET'),
    getUsers: () => new GetUsersAction().makeRequest({}, {}, {}, 'GET'),
    getTokenByUser: data => new GetTokenByUserAction().makeRequest({}, {}, { data }, 'POST'),
    getMyInformation: () => new GetMyInformationAction().makeRequest({}, {}, {}, 'GET'),
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(MenuAppBar))
