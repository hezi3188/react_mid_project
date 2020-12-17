import React, {Component} from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OtherDataUser from './OtherDataUser'

class UserComp extends Component{

  constructor(){
    super()

    this.state={user:{},otherdata:[],complete:false,name:"",email:""}
  }
  componentDidMount(){
    this.setState({user :this.props.user}) 

  }

  

otherDataOpen =()=> {
    this.setState({ otherData:<OtherDataUser address={this.state.user.address} />})
}

otherDataClose= ()=>{
    this.setState({otherData:[]})

}

deleteUser= ()=> {
    this.props.delCallback(this.state.user.id)
}

updateUser= ()=> {
  this.props.updateCallback(this.state.user)
}

showUserItems= ()=> {
  this.props.showUserItemsCallback(this.state.user.id)
}
 
 
  render(){
    let divColor
      if(this.props.isCompleted){
        divColor="green"
      }
      else{
        divColor="red"
      }
    return(
      <div style={{borderColor:divColor}} class="user text-center">
          <strong><lable onClick={this.showUserItems} >ID: </lable></strong>{this.state.user.id}<br/>
          <lable  for="nameText" >Name:  </lable>
          <input class="form-control" onChange={e=>{
              var userChange={...this.state.user}
              userChange.name=e.target.value
              this.setState({user: userChange})
          }} 
           type="text" defaultValue={this.state.user.name} id="nameText"></input><br/>

          <lable  for="emailText" >Email:  </lable>
          <input class="form-control" type="text" onChange={e=>{
              var userChange={...this.state.user}
              userChange.email=e.target.value
              this.setState({user: userChange})
          }}  defaultValue={this.state.user.email} id="emailText"></input><br/>
          <button style={{margin:"10px"}} onMouseOver={this.otherDataOpen} onClick={this.otherDataClose}>Other Data</button>
          <button onClick={this.updateUser}   style={{margin:"1px"}} class="btn btn-warning btn-sm" >Update</button>
          <button onClick={this.deleteUser}  class="btn btn-warning btn-sm">Delete</button>
          {this.state.otherData}
      </div>
    )
  }
}

export default UserComp;
