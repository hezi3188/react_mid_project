import React, {Component} from 'react'
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class PostComp extends Component{

  constructor(){
    super()

    this.state={post:{}}
  }
  componentDidMount(){
    this.setState({post :this.props.post}) 

  }



  

 
  render(){
     
      
    return(
      <div  class=" todo text-center">
          <label style={{ borderBottom: "5px solid yellow"}} >Title:</label> {this.state.post.title}<br/>
          <label style={{ borderBottom: "5px solid yellow"}} >Body:</label> {this.state.post.body}<br/>
      </div>
    )
  }
}

export default PostComp;
