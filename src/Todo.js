import React from 'react';
import './Todo.css'
import Todoitem from './Todoitem'

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todoslist: props.todos,
      showInput: null
    }
  }

  submitNewTodo(e) {
    e.preventDefault()
    let input = e.target.querySelector('input')
    let newTodo = input.value

    this.setState({
      todoslist: this.state.todoslist.concat(newTodo),
      showInput: null
    })

    input.value = ''
  }

  showInput(e) {
    this.setState({
      showInput: e.target.value
    })
  }

  clearTodo(e) {
    this.setState({
      todoslist: []
    })
  }

  completedOneTodo(index) {
    console.log(`YO NUMBER ${index} is completed`)
//     let sth = this.state.todoslist
//     console.log(sth);
//     sth.splice(index, 1)
// console.log(sth);
    this.setState((prevState, props) => {
      console.log('prevState', prevState)
      console.log(index)

      return {
        todoslist: prevState.todoslist.splice(index, 1)
      }
      // {
      //   todoslist: sth
      // }
    })

    // console.log(`after remove ${this.state.todoslist}`)
  }

  render() {
    let todoslist = this.state.todoslist.map((item, index) => {
      console.log(item)
      return (
        <Todoitem
          item={item}
          key={index}
          index={index}
          completed={this.completedOneTodo.bind(this)}
        />
      )
    })

    let showInput = this.state.showInput ? <p>{this.state.showInput}</p> : ''

    let emptyTodosMsg = this.state.todoslist.length === 0 ? <p>You've no pending todos!</p> : ''

    return (
      <div>
        <div>
          {emptyTodosMsg}
          {todoslist}
          {showInput}
        </div>
        <h3>Add Todo</h3>
        <div>
          <form onSubmit={(e) => this.submitNewTodo(e)}>
            <input onChange={(e) => this.showInput(e)}type='text' />
            <button>Add!</button>
          </form>
        </div>
        <div>
          <button onClick={(e) => this.clearTodo(e)}>Finished the list!</button>
        </div>
      </div>
    )
  }

}

export default Todo;
