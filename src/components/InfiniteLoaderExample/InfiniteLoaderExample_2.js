import * as React from 'react'
import ReactDOM from 'react-dom'
import { InfiniteLoader, List } from 'react-virtualized'
import 'react-virtualized/styles.css'
import { httpRequest } from '../../http'
import { API_URL } from '../../constants' // only needs to be imported once

// This example assumes you have a way to know/load this information
const remoteRowCount = 10
const STATUS_LOADING = 1
const STATUS_LOADED = 2

export default class InfiniteLoaderExample extends React.PureComponent {
    constructor(props) {
        super(props)
        this.list = []
    }

    state = {
        loadedRowsMap: {},
    }

    isRowLoaded = ({ index }) => {
        const { loadedRowsMap } = this.state
        return !!loadedRowsMap[index]
    }

    rowRenderer = ({ key, index, style }) => {
        // console.log(this.list)
        let content = 'empty'
        const { loadedRowsMap } = this.state
        if (loadedRowsMap[index] === STATUS_LOADED) {
            // console.log(this.list)
            content = this.list[index].word
        }
        return (
            <div key={key} style={{ color: 'red' }}>
                {content}
            </div>
        )
    }

    loadMoreRows = ({ startIndex, stopIndex }) => {
        const { loadedRowsMap } = this.state
        for (let i = startIndex; i <= stopIndex; i++) {
            loadedRowsMap[i] = STATUS_LOADING
        }
        return httpRequest(
            `${API_URL}translates?startIndex=${startIndex}&stopIndex=${stopIndex}`,
            'GET',
            {},
            {}
        ).then(response => {
            // console.log(startIndex, stopIndex)
            // console.log(response)
            for (let i = startIndex; i <= stopIndex; i++) {
                this.list[i] = response[i - startIndex]
            }
            for (let i = startIndex; i <= stopIndex; i++) {
                loadedRowsMap[i] = STATUS_LOADED
            }
        })
    }

    render() {
        return (
            <InfiniteLoader
                isRowLoaded={this.isRowLoaded}
                loadMoreRows={this.loadMoreRows}
                rowCount={remoteRowCount}
            >
                {({ onRowsRendered, registerChild }) => (
                    <List
                        height={200}
                        onRowsRendered={onRowsRendered}
                        ref={registerChild}
                        rowCount={remoteRowCount}
                        rowHeight={20}
                        rowRenderer={this.rowRenderer}
                        width={400}
                    />
                )}
            </InfiniteLoader>
        )
    }
}
