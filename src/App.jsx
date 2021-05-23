import React, { Component } from 'react'
import Tsuyobaha from './components/Tsuyobaha'
import CalcSpeed from './components/CalcSpeed';
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <Tsuyobaha/>
                <CalcSpeed/>
            </div>
        )
    }
}
