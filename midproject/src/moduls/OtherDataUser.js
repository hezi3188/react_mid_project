import React, {Component} from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class OtherDataComp extends Component{
  constructor(){
    super()

    this.state={address:{
      street:"fatal",
      city:"jerusalem",
      zipcode:"123"
    }}
  }
  static getDerivedStateFromProps(props)
  {

    return {address : props.address}
  } 

 
 
  render(){
    return(
      <div >
         <div class="card bg-light ">
    <div class="card-body text-center">
          <lable  for="streetText" >Street:  </lable>
          <input value={this.state.address.street} type="text"  id="streetText"></input><br/>
          <lable  for="cityText" >City:  </lable>
          <input value={this.state.address.city} type="text" id="cityText"></input><br/>
          <lable  for="zipText" >Zip :  </lable>
          <input value={this.state.address.zipcode} type="text" id="zipText"></input><br/>
    </div>
  </div>

      </div>
    )
  }
}

export default OtherDataComp;
