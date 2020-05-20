import React, { Component } from 'react'

export default class Room extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    roomClick=()=>{
        this.props.roomRoute(this.props.index);
        this.props.updateTempP()
    }
    // updateTempProduct=()=>{
    //     this.props.updateTempP()
    // }

    roomRemove=()=>{
        this.props.roomDel(this.props.index)
    }

    render() {
        return (
            <div id="rooms">
                <button id='btn-room' 
                onClick={this.roomClick}
                style={{backgroundColor:this.props.color}}>
                <h3>{this.props.name}</h3>
                        <h5>{this.props.type}</h5>
                </button><button onClick={this.roomRemove} id='btn-remove'>-</button>

                        
            </div>
        )
    }
}
