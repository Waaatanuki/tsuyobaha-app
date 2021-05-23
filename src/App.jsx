import React, { Component } from 'react'
import Tsuyobaha from './components/Tsuyobaha'
import CalcSpeed from './components/CalcSpeed';

export default class App extends Component {
    render() {
        return (
            <div>
                <Tsuyobaha/>
                <CalcSpeed/>
            </div>
        )
    }
}
