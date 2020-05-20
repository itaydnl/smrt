import React, { Component } from 'react'

export default class RoomIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    handleAdd=(e)=>{
        // console.log(e.target.value);
        
        this.props.setTempProduct(e.target.value)
    }

    submitHandler=(e)=>{
        this.props.AddThisProduct()
        // this.props.setTempProduct("AC")
        e.preventDefault();
    }
    
    render() {
        return (
            <div>
                <div id="room-header" style={{backgroundColor:this.props.color}}>
                <h1>-  {this.props.name}  -</h1>
                <h3>{this.props.type}</h3>
                <h6>#{this.props.index}</h6>

                </div>
                <br></br>
            <form onSubmit={this.submitHandler}>
            <label>select product:</label>
                <select onChange={this.handleAdd}>
                {this.props.products.map((e,i)=>{
                    if(this.props.type==='Bathroom/Toilets'){
                        return <option key ={e.name} value={e.name}>{e.name}</option>
                    }else{
                        if(i!==1)
                        {
                            return <option key ={e.name} value={e.name}>{e.name}</option>
                        }
                    }
                    

                })}
                </select>
                <button >Add</button>
            </form>
            </div>
        )
    }
}
