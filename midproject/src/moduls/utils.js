import axios from 'axios'

const users="https://jsonplaceholder.typicode.com/users"
const posts="https://jsonplaceholder.typicode.com/posts"
const todos="https://jsonplaceholder.typicode.com/todos"

 let getAllUsers = () =>
{
    return axios.get(users)
}


let getAllPosts = () =>
{
    return axios.get(posts)
}



let getAllTodos = () =>
{
    return axios.get(todos)
}


export default {getAllUsers, getAllPosts,getAllTodos}