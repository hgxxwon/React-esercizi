import React from "react";

export class TodoList extends React.Component{

    state = {
        items: [],
        input: '',
      }
    
      inputChangeHandler = ({target:{value}}) => this.setState({
        input: value
      })
      
      handleSubmitTodo = (event) => {
        event.preventDefault()
        this.setState({
         items: [...this.state.items, this.state.input],
         input: ''
        })
      }   
    
      render() {
        return (
          <div>
            <h2>Todo List!</h2>
            <ul>
              {
                this.state.items.map((li) => <li>{li}</li>)
              }
            </ul>
            <form onSubmit={this.handleSubmitTodo}>
              <input value={this.state.input} onChange={this.inputChangeHandler} />
              <button type="submit">Add Todo</button>
            </form>
          </div>
        )
      }
    }
