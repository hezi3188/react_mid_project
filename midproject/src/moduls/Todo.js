import React, {Component} from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OtherDataUser from './OtherDataUser'

class TodoComp extends Component{

  constructor(){
    super()

    this.state={todo:{completed:false}}
  }
  componentDidMount(){
    this.setState({todo :this.props.todo}) 

  }

  sendCompleted= ()=> {
    this.props.sendCompletedCallback(this.state.todo.id)
  }

  

 
  render(){
      let completedBtn
      if(this.state.todo.completed==false){
          completedBtn = <input style={{width:"100%"}} onClick={this.sendCompleted} class="btn btn-warning btn-sm" type="button" value="completed"></input>
      }
      
    return(
      <div  class=" todo text-center">
          <label style={{ borderBottom: "5px solid yellow"}} >Title:</label> {this.state.todo.title}<br/>
          <label style={{ borderBottom: "5px solid yellow"}} >Completed:</label> {this.state.todo.completed.toString()}<br/>
          {completedBtn}
      </div>
    )
  }
}

export default TodoComp;
