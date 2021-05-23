import React, { Component } from 'react'
import './index.css';

export default class CalcSpeed extends Component {
    state = {min:0,sec:0,score:0,speed:0};

    input=(type)=>{
        return (event)=>{
            this.setState({[type]:Number(event.target.value)},()=>{
                const {min,sec,score}=this.state
                let speed =(score/(min+sec/60)).toFixed()
                this.setState({speed:speed})
            }) 
        }
    }
    render() {
        return (
            <div>
                <span>
                    分：<input onFocus={(e)=>e.target.select()} onChange={this.input('min')}/>
                    秒：<input onFocus={(e)=>e.target.select()} onChange={this.input('sec')}/>
                    贡献：<input onFocus={(e)=>e.target.select()} onChange={this.input('score')}/>
                    {this.state.speed}速
                </span>
            </div>
        )
    }
}
