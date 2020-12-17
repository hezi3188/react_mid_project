import React, {Component} from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddTodoComp extends Component{

  constructor(){
    super()

    this.state={title:""}
  }
  

  cancel= ()=>{
    this.props.cancelCallback("");
  }

  addTodo= ()=> {
   //
    this.props.sendNewTodoCallback(this.state.title);
  }
  

 
  render(){
     
      
    return(
      <div  class=" todo text-center">
          <strong><h2>Add Todo</h2></strong>
          <input placeholder="Add Title" type="text" onChange={e=>this.setState({title: e.target.value})} class="form-control"></input>
          <br/>
          <input style={{width:"40%",margin:"10px"}}  class="btn btn-warning btn-sm" onClick={this.cancel} type="button" value="cancel"></input>
          <input style={{width:"40%", margin:"10px"}}  class="btn btn-warning btn-sm" onClick={this.addTodo} type="button" value="Add"></input>

      </div>
    )
  }
}

export default AddTodoComp;
