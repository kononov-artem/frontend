import * as React from 'react'
import { AutoSizer, InfiniteLoader, List } from 'react-virtualized'
import { httpRequest } from '../../http'
import { API_URL } from '../../constants'

const STATUS_LOADING = 1
const STATUS_LOADED = 2
const remoteRowCount = 2000

export default class InfiniteLoaderExample extends React.PureComponent {
    constructor(props) {
        super(props)
        this.list = []
        this.state = {
            loadedRowCount: 0,
            loadedRowsMap: {},
            loadingRowCount: 0,
        }


        this._clearData = this._clearData.bind(this)
        this._isRowLoaded = this._isRowLoaded.bind(this)
        this._loadMoreRows = this._loadMoreRows.bind(this)
        this._rowRenderer = this._rowRenderer.bind(this)
    }

    _onRowsRendered = (data, onRowsRendered) => {
        this.props.onRowsRendered(data)
        onRowsRendered(data)
    }

    render() {
        // const { list } = this.context
        const { loadedRowCount, loadingRowCount } = this.state
        // console.log('loadedRowCount, loadingRowCount', loadedRowCount, loadingRowCount)

        return (
            <InfiniteLoader
                isRowLoaded={this._isRowLoaded}
                loadMoreRows={this._loadMoreRows}
                rowCount={remoteRowCount}
            >
                {({ onRowsRendered, registerChild }) => (
                    <AutoSizer disableHeight>
                        {({ width }) => (
                            <List
                                ref={registerChild}
                                height={300}
                                onRowsRendered={(data) => this._onRowsRendered(data, onRowsRendered)}
                                rowCount={remoteRowCount}
                                rowHeight={30}
                                rowRenderer={this._rowRenderer}
                                width={width}
                                style={{color: 'red'}}
                                scrollToIndex={this.props.page * 10}
                            />
                        )}
                    </AutoSizer>
                )}
            </InfiniteLoader>
        )
    }

    _clearData() {
        this.setState({
            loadedRowCount: 0,
            loadedRowsMap: {},
            loadingRowCount: 0,
        })
    }

    _isRowLoaded({ index }) {
        const { loadedRowsMap } = this.state
        return !!loadedRowsMap[index] // STATUS_LOADING or STATUS_LOADED
    }

    _loadMoreRows({ startIndex, stopIndex }) {
        const { loadedRowsMap, loadingRowCount } = this.state
        const increment = stopIndex - startIndex + 1

        for (var i = startIndex; i <= stopIndex; i++) {
            loadedRowsMap[i] = STATUS_LOADING
        }

        this.setState({ loadingRowCount: loadingRowCount + increment })

        return httpRequest(
            `${API_URL}translates?startIndex=${startIndex}&stopIndex=${stopIndex}`,
            'GET',
            {},
            {}
        ).then(response => {
            const { loadedRowCount, loadingRowCount } = this.state

            for (let i = startIndex; i <= stopIndex; i++) {
                this.list[i] = response[i - startIndex]
            }
            for (let i = startIndex; i <= stopIndex; i++) {
                loadedRowsMap[i] = STATUS_LOADED
            }
            this.setState({
                loadingRowCount: loadingRowCount - increment,
                loadedRowCount: loadedRowCount + increment,
            })
        })
    }

    _rowRenderer({ index, key, style }) {
        let list = this.list
        const { loadedRowsMap } = this.state

        let content

        if (loadedRowsMap[index] === STATUS_LOADED) {
            const row = list[index]
            content = row.word
        } else {
            content = <div style={{ width: 30 }} />
        }

        return (
            <div key={key} style={style}>
                {content}
            </div>
        )
    }
}
