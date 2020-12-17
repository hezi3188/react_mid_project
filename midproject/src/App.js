import React,  {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import axios from './moduls/utils';
import User from './moduls/User'
import TodosComp from './moduls/Todos'

class App extends Component {
  constructor(){
    super()
    this.state = {search:"",users: [],posts: [],todos:[],userActive:0,nextTodoId:201}
  }

   deleteUser= (id)=> {
     let users=this.state.users.filter(item=>item.id!=id)
    // let todos=this.state.todos.filter(item=>item.userId!=id)
     this.setState({users:users})
   }

   updateUser= (user)=> {
     console.log(user)
     let users=this.state.users.map(data=>{
       if(data.id==user.id) {
         return user;
       }
       return data;
     })
     console.log(users)
     this.setState({users:users})
   }

  addUser= ()=> {
   
  }

  isUserCompletedMissions=(id)=>{
    let userTodos=this.state.todos.filter(item=>item.userId==id)
    userTodos=userTodos.filter(item=>item.completed==false)
    if(userTodos.length==0){
      return true;
    }
    return false;
  }

  changeTodos= (data)=> {
    let todos=this.state.todos.filter(item=>{
      if(item.id==data){
        item.completed=true;
      }
      return item;
    })
    this.setState({todos:todos})
  }

  isPaintingColor= (id)=> {
    if( this.state.userActive==id){
      return "red"
    }
    else return "rgba(0, 0, 0, 0)"
  }

  addTodo= (data,userId)=>{
    let newTodo={
      userId:userId,
      title:data,
      id:this.state.nextTodoId,
      completed:false
    }
    this.setState({nextTodoId:this.state.nextTodoId+1})
    this.setState({todos:[newTodo,...this.state.todos]})
  }
  
 
  componentDidMount(){
   axios.getAllUsers().then(res=>this.setState({users: res.data}))
   axios.getAllPosts().then(res=>this.setState({posts: res.data}))
   axios.getAllTodos().then(res=>this.setState({todos: res.data}))
  }
  render(){
    //users
    let users=this.state.users
    if(this.state.search!=""){
      users=users.filter(user=>user.name.includes(this.state.search)||user.email.includes(this.state.search))
    }

     users=users.map((user)=>{
      return (
       <div style={{background:this.isPaintingColor(user.id)}} > <User isCompleted={this.isUserCompletedMissions(user.id)} showUserItemsCallback={data=>this.setState({userActive:data})} updateCallback={data=>this.updateUser(data)} delCallback={data=>this.deleteUser(data)} user={user} key={user.id} /></div>
      )
    })


    let todos=undefined
    if(this.state.userActive!=0){
      todos=this.state.todos.filter(item=>item.userId==this.state.userActive)
      console.log(todos)
      todos= <TodosComp newTodoCallback={(data,userId)=>this.addTodo(data,userId)}  changeDataCallback={data=>this.changeTodos(data)} todos={todos} />
      //console.log(todos)


   
    }
    
    


    


    return(
      <div class="row">
        <div class="col-sm-6" id="leftToolBar">
          <input class="form-control " onChange={e=>this.setState({search: e.target.value})} style={{margin:"10px"}} type="text" placeholder="Search" aria-label="Search"/>
          <button type="button" style={{width:"100%", margin:"5px"}} class="btn btn-info">Add User</button>
          {users}
        </div>
        <div class="col-sm-6" id="rightToolBar">
       {todos}
        </div>
        
      </div>

     
    )
  }
}

export default App;
