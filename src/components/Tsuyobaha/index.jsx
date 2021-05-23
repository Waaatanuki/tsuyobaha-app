import React, { Component } from 'react'
import './index.css'

import pic_ring3 from './pic/ring3.jpg';
import pic_ring2 from './pic/ring2.jpg';
import pic_ring1 from './pic/ring1.jpg';
import pic_ffj from './pic/ffj.jpg';

export default class Tsuyobaha extends Component {
    state={
        total:0,aobako:0,ring3:0,ring2:0,ring1:0,ffj:0,nothing:0,message:[]}

    reset=()=>{
        this.setState({total:0,aobako:0,ring3:0,ring2:0,ring1:0,ffj:0,nothing:0,message:[]});
        console.clear()
    }

    add=(itemType)=>{
        return (e)=>{
            const {total,aobako} = this.state
            this.setState({
                [itemType] : this.state[`${itemType}`]+1,
                total : total+1,
                aobako : itemType!== 'nothing'? aobako+1 : aobako
            },()=>{
                const {message,total} = this.state
                const time=this.dateFormat("HH:MM:SS", new Date())
                let outputType = ""
                if (itemType ==="ring3"){
                    outputType ="荣冠指环"
                }else if (itemType==="ring2"){
                    outputType ="霸业指环"
                }else if (itemType==="ring1"){
                    outputType ="至极指环"
                }else if (itemType==="ffj"){
                    outputType ="ffj!!!"
                }else if (itemType==="nothing"){
                    outputType ="白打了"
                }
                let newMessage = `第${total}把，[${time}]，掉落：${outputType}`
                this.setState({message:[newMessage,...message]})
            })
        }
    }

    //时间格式化
    dateFormat(fmt, date) {
        let ret;
        const opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "m+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            "H+": date.getHours().toString(),           // 时
            "M+": date.getMinutes().toString(),         // 分
            "S+": date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    }

    render() {
        return(
            <div>
                <h2>总次数：{this.state.total} 蓝箱：{this.state.aobako}</h2>
                <h2>荣冠指环：{this.state.ring3} 霸业指环：{this.state.ring2}</h2>
                <h2>至极指环：{this.state.ring1} 菲菲色金：{this.state.ffj} </h2>
                <button style={{backgroundImage:`url(${pic_ring3})`}} onClick={this.add('ring3')}/>
                <button style={{backgroundImage:`url(${pic_ring2})`}} onClick={this.add('ring2')}/><br/>
                <button style={{backgroundImage:`url(${pic_ring1})`}} onClick={this.add('ring1')}/>
                <button style={{backgroundImage:`url(${pic_ffj})`}} onClick={this.add('ffj')}/><br/>
                <button onClick={this.add('nothing')}>白打了</button>
                <button onClick={this.reset}>重置</button> 
                <div className="list">
                    {this.state.message.map((data,index) => {
                        return <div className="message" key={index}>{data}</div>
                    })}
                </div>
            </div>
        )
    }
}
