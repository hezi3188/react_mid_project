import React, {Component} from 'react'
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddPostComp extends Component{

  constructor(){
    super()

    this.state={title:"",body:""}
  }
  

  cancel= ()=>{
    this.props.cancelCallback("");
  }

  addTodo= ()=> {
   let newPost={
       title: this.state.title,
       body: this.state.body
   }
    this.props.sendNewPostCallback(newPost);
  }
  

 
  render(){
     
      
    return(
      <div  class=" todo text-center">
          <strong><h2>Add Post</h2></strong>
          <input placeholder="Add Title" type="text" onChange={e=>this.setState({title: e.target.value})} class="form-control"></input>
          <br/>
          <textarea placeholder="Add Body" onChange={e=>this.setState({body: e.target.value})} class="form-control" rows="5" id="body"></textarea>
          <br/>
          <input style={{width:"40%",margin:"10px"}}  class="btn btn-warning btn-sm" onClick={this.cancel} type="button" value="cancel"></input>
          <input style={{width:"40%", margin:"10px"}}  class="btn btn-warning btn-sm" onClick={this.addTodo} type="button" value="Add"></input>

      </div>
    )
  }
}

export default AddPostComp;
