import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import CommentIcon from '@material-ui/icons/Comment'
import { connect } from 'react-redux'
import { GetDictionariesAction } from 'store/actions/dictionaries'
import { httpRequest } from '../../http'
import { API_URL } from '../../constants'

const styles = theme => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
})

class ListOfDictionaries extends React.Component {
    constructor(props) {
        super(props)
        this.props.getDictionaries()
    }

    state = {
        checked: [],
        dictionaries: [],
    }

    doActiveDictionaries = arr => {
        //TODO: вынести в отдельную функцию обновления словаря
        let index = Number(arr[0])
        let dictionary_id = this.state.dictionaries[index].id
        let data = {
            data: [
                {
                    id: dictionary_id,
                    is_active: this.state.checked.indexOf(index) === -1
                },
            ],
        }
        httpRequest(`${API_URL}dictionaries/update/`, 'POST', {}, data)
    }

    handleToggle = value => () => {
        const { checked } = this.state
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        this.doActiveDictionaries(this.arr_diff(newChecked, checked))
        this.setState({
            checked: newChecked,
        })
    }

    arr_diff(a1, a2) {
        var a = [],
            diff = []

        for (let i = 0; i < a1.length; i++) {
            a[a1[i]] = true
        }

        for (let i = 0; i < a2.length; i++) {
            if (a[a2[i]]) {
                delete a[a2[i]]
            } else {
                a[a2[i]] = true
            }
        }

        for (var k in a) {
            diff.push(k)
        }

        return diff
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.dictionaries !== this.props.dictionaries) {
            let dictionaries = nextProps.dictionaries
            let checked = []
            dictionaries.map((dictionary, index) => {
                if (dictionary.is_active) {
                    checked.push(index)
                }
            })
            this.setState({
                dictionaries: dictionaries,
                checked: checked,
            })
        }
    }

    render() {
        const { classes } = this.props

        return (
            <List className={classes.root}>
                {this.state.dictionaries.map((value, index) => (
                    <ListItem
                        key={index}
                        role={undefined}
                        dense
                        button
                        onClick={this.handleToggle(index)}
                    >
                        <Checkbox
                            checked={this.state.checked.indexOf(index) !== -1}
                            tabIndex={-1}
                            disableRipple
                        />
                        <ListItemText primary={`${value.name}`} />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Comments">
                                <CommentIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        )
    }
}

ListOfDictionaries.propTypes = {
    classes: PropTypes.object.isRequired,
}

const mapStateToProps = store => {
    return {
        dictionaries: store.dictionaries.dictionaries,
    }
}

const mapDispatchToProps = {
    getDictionaries: () => new GetDictionariesAction().makeRequest({}, {}, {}, 'GET'),
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ListOfDictionaries))
