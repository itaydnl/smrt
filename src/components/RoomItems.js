import React, { Component } from 'react'

export default class RoomItems extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        // console.log(this.props.btnColor);
        
        
    }
    
    itemHandler=()=>{
       
        this.props.updateSwitch(this.props.index,this.props.roomIndex);
    }
   
    colorPicker=()=>{
        let indexOfItemInSwitches=0,val=0;
        if(this.props.switchTest.length!==0){
        this.props.switchTest.map((e,i)=>{
            if(e.name===this.props.roomIndex.toString()+this.props.index.toString()){
              
              val=e.status
            }
            // else{
            //     indexOfItemInSwitches=-1;
            // }
          })
        //   console.log(this.props.switchTest[indexOfItemInSwitches].status);
                
        
        }else{
            
            
        }
            // console.log(val);
            
        return val
    }
    
   

    // componentDidMount() {
    //     this.props.updateSwitch(this.props.index);
        
    //  }

    remove=()=>{
        this.props.rem(this.props.roomIndex,this.props.index)
    }
    render() {
        return (
            <div >
                {/* {this.colorPicker()} */}
                <button onClick={this.itemHandler} 
                  style={{backgroundColor:this.colorPicker()}}
        id="items">{this.props.name}</button>
        <button id='btn-remove' onClick={this.remove}>-</button>
                 
            </div>
        )
    }
}

//                                   updateSwitch={this.updateSwitch}
//                                     name={e} 
//                                      index={i}
//                                      switchTest={this.state.switchTest}
//                                       roomIndex={this.state.currentRoomIndex}