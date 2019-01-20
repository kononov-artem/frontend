import React, { Component } from 'react'
import { httpRequest } from '../../http'
import { API_URL } from '../../constants'
import { components } from 'react-select'
import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable'
//https://react-select.com/props

// const filterWords = (words, inputValue) => {
//     let new_words = words.map((item, index) => {
//         return {
//             label: item.word,
//             value: item.word,
//         }
//     })
//     if (inputValue) {
//         return new_words.filter(i => i.label.toLowerCase().includes(inputValue.toLowerCase()))
//     }
//     return new_words
// }
//
// const promiseOptions = inputValue => {
//     return httpRequest(`${API_URL}search-word/`, 'POST', {}, { word: inputValue }).then(words => {
//         return filterWords(words, inputValue)
//     })
// }

const SingleValue = ({ children, ...props }) => {
    return <components.SingleValue {...props}>{children}</components.SingleValue>
}

export default class WithPromises extends Component {
    state = {}

    handleInputChange = newValue => {
        const value = newValue.replace(/\W/g, '')
        this.setState({ value: value })
        return value
    }

    onChange = value => {
        console.log(value)
        this.props.chooseItem(value.value)
        this.setState({ value: value })
    }

    handleCreate = value => {
        console.log(value)
        this.setState({ value: { value: value, label: value } })
    }

    render() {
        return (
            <AsyncCreatableSelect
                value={this.props.value || this.state.value}
                styles={{
                    singleValue: base => ({
                        ...base,
                        padding: 5,
                        borderRadius: 5,
                        background: 'grey',
                        color: 'white',
                        display: 'flex',
                    }),
                }}
                onInputChange={this.handleInputChange}
                onChange={this.onChange}
                isClearable={() => this.setState({ value: '' })}
                cacheOptions
                onCreateOption={this.handleCreate}
                closeMenuOnSelect={true}
                loadOptions={this.props.promiseOptions}
                // defaultValue={this.props.defaultValue}
                // defaultOptions={[{ label: 'asd', value: 'asd' }, { label: 'zxc', value: 'zxc' }]}
            />
        )
    }
}
