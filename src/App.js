
import React, { Component } from 'react'
import './App.css';
import Room from './components/Room.js'
import RoomIn from './components/RoomIn.js'
import  RoomItems from './components/RoomItems.js'
import IconTest from './components/icon.png'



export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      flag:0,
      roomType:[ {index:0,name:'Bedroom'},
                  {index:1,name:'Bathroom/Toilets'},
                   {index:2,name:'Kitchen'},
                    {index:3,name:'Living-Room'}],
      products:[{index:0,name:'AC'},
                 {index:1,name:'Boiler'},
                  {index:2,name:'Sound-System'},
                   {index:3,name:'Lamp'}],
      limitOfProducts:5,
      test:[],
      tempType:"Bedroom",
      tempName:'',
      inputNameColor:["white"],
      inputColorColor:["white"],
      tempColor:'',
      tempRoom:'',
      rooms:[],
      currentRoomIndex:'',
      tempProduct:'AC',
      productsInRoom:0,
      switchTest:[]
      

       
    }
  }
  handleName=(e)=>{
    this.setState({tempName:e.target.value})
    this.setState({test:e.target.value.length})
    if(e.target.value.length>1 && e.target.value.length<=5){
      this.setState({inputNameColor:"green"})
       }else{
        this.setState({inputNameColor:"red"})
     }
  };

  handleColor=(e)=>{
    let colors=["red","green","blue","yellow","brown","purple","orange","white","pink","black"]
    let f=colors.filter((color)=>(e.target.value===color));
    
    if(f.length>=1){
      this.setState({inputColorColor:"green"})
      this.setState({tempColor:e.target.value})
    }else{
      this.setState({inputColorColor:"red"})
    }
    
    
  };

  handleType=(e)=>{
    this.setState({tempType:e.target.value})
  };
  handleSubmit=(e)=>{
    // alert(this.state.tempColor+" "+this.state.tempName+" "+this.state.tempType);
    if(this.state.inputNameColor==='green'&&this.state.inputColorColor==='green'){
      this.setState({rooms:[...this.state.rooms,{name:this.state.tempName,color:this.state.tempColor,type:this.state.tempType,products:[]}]});
    }else{
      alert('err')
    }
          this.setState({flag:0});
          
          //clear the temps
          this.setState({tempColor:''});
          this.setState({tempType:'Bedroom'});
          this.setState({tempName:''});
          this.setState({inputNameColor:'white'});
          this.setState({inputColorColor:'white'});
         
    e.preventDefault();
  };

  addItem=()=>{
    
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* Spread the room type in the manu  */}
        <label >Room-Type: </label>
          <select value={this.state.tempType} onChange={this.handleType}>
            {this.state.roomType.map((e,i)=>{
              return <option style={{backgroundImage:IconTest}} key={e.name}value={e.name}>{e.name} </option>
            })}    
           
          </select><br></br>
          <label >Name: </label>
        <input placeholder="Room-Name"  onChange={this.handleName} style={{backgroundColor:this.state.inputNameColor}}></input>
        <p>Should've Contain 1-5 Charecters</p>
        
        <label >Color: </label>
        <input placeholder="Room-Color"  onChange={this.handleColor} style={{backgroundColor:this.state.inputColorColor}}></input>
        <p>Should Be Valid Color</p>
        
        <button id="btn-add" value="submit" onClick={()=>{ 
          
        }}>Add Room!</button>
        </form>
      </div>
    )
  };

  updateTempP=()=>{
    this.setState({tempProduct:"AC"})
  }

 route=(i)=>{
    // console.log("you pressed",i);
    this.setState({flag:2})
    this.setState({currentRoomIndex:i})
    // this.setState({currentRoomIndex:parseInt(i)})
    // this.setState({tempProduct:"AC"})
    // set index to the Current Room Index  
 }

 setTempProduct=(i)=>{
// add the product to the temp and update the total items in room  
// console.log(i);
  this.setState({tempProduct:i})

 }
 checkStereo=()=>{
   let stereoCounter=0;
   this.state.rooms[this.state.currentRoomIndex].products.map((e,i)=>{
    if(e==='Sound-System'){
      stereoCounter++;
    }
    
   })
  //  console.log(stereoCounter);
   return stereoCounter;
 }

 AddThisProduct=()=>{
//add the item /product to the Products array in the room
this.setState({productsInRoom:(this.state.rooms[this.state.currentRoomIndex].products.length+1)})
this.checkStereo();
if(this.state.limitOfProducts>this.state.productsInRoom){
  if((this.state.tempProduct==='Sound-System'&&this.checkStereo()<1) ||(this.state.tempProduct!=='Sound-System')){

 
  this.setState(this.state.rooms[this.state.currentRoomIndex].products=[...this.state.rooms[this.state.currentRoomIndex].products,this.state.tempProduct])
  // this.setState(this.state.switchTest=[{[this.state.rooms[this.state.currentRoomIndex].products.length-1]:"off"},...this.state.switchTest])
}else{
  alert("err-only 1 Sound-System")
}
}else{
  alert("err-only 5 Products Please")
 }
 }
//  countProductsInRoom=()=>{
//     let counter=0;
//     this.state.rooms[this.state.currentRoomIndex].products.length
//     })
//  }
updateSwitch=(itemIndex,roomIndex)=>{
  // console.log(this.state.currentRoomIndex.toString()+itemIndex.toString());

  //update in switchtest and set its status , and changes it .
  let itemName =this.state.currentRoomIndex.toString()+itemIndex.toString();
  let existAlready=0,indexOfItemInSwitches=0;
  let temp=[...this.state.switchTest];
  this.state.switchTest.map((e,i)=>{
    if(e.name===itemName){
      existAlready++;
      indexOfItemInSwitches=i
    }
  })
  if(existAlready===0){
    //item not exist in panel

    //add to switchTest and turn it on -green 
    this.setState({switchTest:[...this.state.switchTest,{name:itemName,status:'green'}]})
  }
  else{
    // does exist
    
    if(temp[indexOfItemInSwitches].status==='red'){
      //if its off
      temp[indexOfItemInSwitches].status='green';
   
    this.setState({switchTest:temp})
    }else{
      //if its on 
      temp[indexOfItemInSwitches].status='red';
    
    this.setState({switchTest:temp})
    }
    
    
    
    
    // temp[indexOfItemInSwitches].status='red'
    
    // {name:itemName,status:'red'}]
    
  } 
}

removeItem=(roomID,itemID)=>{
  let temp2=0;
 let temp= this.state.rooms[roomID].products.filter((e,i)=>(i!==itemID))
 console.log(temp);
 this.setState(this.state.rooms[this.state.currentRoomIndex].products=temp)  
}

roomDel=(roomID)=>{
let temp =this.state.rooms.filter((e,i)=>(i!==roomID))
this.setState({rooms:temp})
}

  show = () =>{
    if(this.state.flag === 2){
      return (
        <div>
          
          <RoomIn name={this.state.rooms[this.state.currentRoomIndex].name}
                   color={this.state.rooms[this.state.currentRoomIndex].color}
                     type={this.state.rooms[this.state.currentRoomIndex].type} 
                       index={this.state.currentRoomIndex} 
                        products={this.state.products}
                          setTempProduct={this.setTempProduct}
                            AddThisProduct={this.AddThisProduct}/>
         <br></br><br></br>
         {this.state.rooms[this.state.currentRoomIndex].products.map((e,i)=>{
                return <RoomItems updateSwitch={this.updateSwitch}
                                    name={e} 
                                     index={i}
                                     switchTest={this.state.switchTest}
                                      roomIndex={this.state.currentRoomIndex}
                                      itemClick={this.itemClick}
                                      rem={this.removeItem}/> 
                
              })}
          <br></br>
          <button id='nav' onClick={()=>{this.setState({flag:0});this.setState({productsInRoom:0})}}>Back</button>
        </div>
      )
    }
    if(this.state.flag === 1){
      return (
        <div >
             {this.addItem()}

             
        </div>
      )
    }
    if(this.state.flag ===0){
      return (
        <div>
          {this.state.rooms.map((e,i)=>{
            return (
              <div> <Room index={i} name={[e.name]} color={[e.color]} type={[e.type]} roomRoute={this.route}
              updateTempP={this.updateTempP} roomDel={this.roomDel}/></div>
            )
          })}
              <br></br><br></br>
          <button id="btn-add" onClick={()=>{this.setState({flag:1})}}>+</button>
        </div>
      )
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>SmartHouse</h1>
        {/* <img src={IconTest}></img> */}
        <div>
          {this.show()}
        </div>
      </div>
    )
  }
}


