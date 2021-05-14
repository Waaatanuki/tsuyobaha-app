import React, { Component } from 'react'
import './index.css'

import pic_ring3 from './pic/ring3.jpg';
import pic_ring2 from './pic/ring2.jpg';
import pic_ring1 from './pic/ring1.jpg';
import pic_ffj from './pic/ffj.jpg';

export default class Tsuyobaha extends Component {
    state={
        total:0,aobako:0,ring3:0,ring2:0,ring1:0,ffj:0,nothing:0}

    reset=()=>{
        this.setState({total:0,aobako:0,ring3:0,ring2:0,ring1:0,ffj:0,nothing:0})
        console.clear()
    }

    plus=(itemType)=>{
        const {total,aobako,ring3,ring2,ring1,ffj,nothing} = this.state
        this.setState({total:total+1})
        switch(itemType){
            case 'ring3':
                console.log("荣冠指环")
                this.setState({aobako:aobako+1})
                this.setState({ring3:ring3+1})
                break
            case 'ring2':
                console.log("霸业指环")
                this.setState({aobako:aobako+1})
                this.setState({ring2:ring2+1})
                break
            case 'ring1':
                console.log("至极指环")
                this.setState({aobako:aobako+1})
                this.setState({ring1:ring1+1})
                break
            case 'ffj':
                console.log("菲菲金！！！！！！！！！！！")
                this.setState({aobako:aobako+1})
                this.setState({ffj:ffj+1})
                break
            case 'nothing':
                console.log("白打了")
                this.setState({nothing:nothing+1})
                break
            default:
                console.log("?")
        }
    }

    componentDidUpdate() {
        const {total,aobako} = this.state
        console.log(`↑总次数：${total}，时间：${new Date()},蓝箱率：${((aobako)/(total)*100).toFixed()}%`)
        alert("nba")
    }

    render() {
        return(
            <div>
                <h1>总次数：    {this.state.total}</h1>
                <h1>蓝箱：      {this.state.aobako}</h1>
                <h1>荣冠指环：  {this.state.ring3} <button style={{backgroundImage:`url(${pic_ring3})`}} onClick={()=>this.plus('ring3')}/></h1>
                <h1>霸业指环：  {this.state.ring2} <button style={{backgroundImage:`url(${pic_ring2})`}} onClick={()=>this.plus('ring2')}/></h1>
                <h1>至极指环：  {this.state.ring1} <button style={{backgroundImage:`url(${pic_ring1})`}} onClick={()=>this.plus('ring1')}/></h1>
                <h1>菲菲色金：  {this.state.ffj} <button style={{backgroundImage:`url(${pic_ffj})`}} onClick={()=>this.plus('ffj')}/></h1>
                <h1>啥都没有：  {this.state.nothing} <button onClick={()=>this.plus('nothing')}>白打了</button></h1>
                <button onClick={this.reset}>重置</button> 
            </div>
            
        )
    }
}
