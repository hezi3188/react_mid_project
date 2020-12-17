import React, {Component} from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import OtherDataUser from './OtherDataUser'
import TodoComp from './Todo'
import AddTodoComp from './AddTodo'

class TodosComp extends Component{

  constructor(){
    super()

    this.state={todos:[],isNeedAdd:false}
  }
  componentDidMount(){
      console.log("גןג צםומא")
    this.setState({todos :this.props.todos}) 

  }
  

  sendCompleted= (data)=> {
      this.props.changeTodosDataCallback(data);
  }

  sendNewTodo= (data)=> {
    
    this.props.newTodoCallback(data,this.props.userActive);
    this.setState({isNeedAdd:false})
  }

 
 
  render(){
      let todos
      
    if(this.state.isNeedAdd){
        todos=<AddTodoComp sendNewTodoCallback={data=>this.sendNewTodo(data)} cancelCallback={data=>this.setState({isNeedAdd:false})} />
    }
    else{
         todos=this.props.todos
        console.log(todos)
        if(this.props.todos!=undefined) 
        {
            
          todos=todos.map(item=>{
              return (
                <TodoComp key={item.id} todo={item} sendCompletedCallback={data=>this.sendCompleted(data)}/>
                )
          })
        }
    }

    
      

    
      
    return(


         
      <div  class=" todos text-center">
          <strong>Todos User: </strong>{this.props.userActive} 
          <button onClick={()=>this.setState({isNeedAdd:true})} type="button" style={{width:"100%", margin:"5px"}}  class="btn btn-info">Add Todo</button>
          {todos}
      </div>

    )
  }
}

export default TodosComp;
