import React, {Component} from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddUserComp extends Component{

  constructor(){
    super()

    this.state={name:"",email:""}
  }
  

  cancel= ()=>{
    this.props.cancelCallback("");
  }

  addUser= ()=> {
    let user={name:this.state.name,email:this.state.email}
    this.props.sendNewUserCallback(user);
  }
  

 
  render(){
     
      
    return(
      <div  class=" todo text-center">
          <strong><h2>Add User</h2></strong>
          <input placeholder="Add Name:" type="text" onChange={e=>this.setState({name: e.target.value})} class="form-control"></input>
          <br/>
          <input placeholder="Add Email:" type="text" onChange={e=>this.setState({email: e.target.value})} class="form-control"></input>
          <br/>
          <input style={{width:"40%",margin:"10px"}}  class="btn btn-warning btn-sm" onClick={this.cancel} type="button" value="cancel"></input>
          <input style={{width:"40%", margin:"10px"}}  class="btn btn-warning btn-sm" onClick={this.addUser} type="button" value="Add"></input>

      </div>
    )
  }
}

export default AddUserComp;
