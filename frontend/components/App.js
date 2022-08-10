import axios from 'axios'
import React from 'react'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
   state = {
    todos: [],
  }
  fetchAllTodos(){
    axios.get(URL)
    .then(res => this.setState({...this.state, todos: res.data}))
    .catch(err => console.error(err))
  }
  componentDidMount(){
    this.fetchAllTodos()
  }
  
  render() {
    return (
      <div>
      { 
      this.state.todos.map(todo => {
        return (
          <div key={todo.id}>{todo.name}</div>
        )
      })
      }
      </div>
    )
  }
}
