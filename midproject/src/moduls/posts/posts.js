import React, {Component} from 'react'
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostComp from './Post'
import AddTodoComp from './AddPost'
class PostsComp extends Component{

  constructor(){
    super()

    this.state={posts:[],isNeedAdd:false}
  }
  componentDidMount(){
    this.setState({posts :this.props.posts}) 

  }
  

  

  sendNewPost= (data)=> {
    
    this.props.newPostCallback(data,this.props.userActive);
    this.setState({isNeedAdd:false})
  }

 
 
  render(){
      let posts
      
    if(this.state.isNeedAdd){
        posts=<AddTodoComp sendNewPostCallback={data=>this.sendNewPost(data)} cancelCallback={data=>this.setState({isNeedAdd:false})} />
    }
    else{
        posts=this.props.posts
        console.log(posts)
        if(this.props.posts!=undefined) 
        {
            
          posts=posts.map(item=>{
              return (
               <PostComp key={item.id} post={item} />
                )
          })
        }
    }

    
      

    
      
    return(


         
      <div  class=" todos text-center">
          <strong>Posts User: </strong>{this.props.userActive} 
          <button onClick={()=>this.setState({isNeedAdd:true})} type="button" style={{width:"100%", margin:"5px"}}  class="btn btn-info">Add Post</button>
          {posts}
      </div>

    )
  }
}

export default PostsComp;
