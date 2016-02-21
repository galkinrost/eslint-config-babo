import React, {Component} from 'react'

export default class NoBind extends Component {
    render() {
        return (
            <div ref={ref => {
                this.ref = ref
            }}
            />
        )
    }
}