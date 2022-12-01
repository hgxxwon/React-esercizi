import React, { Children } from "react";

export class TodoList extends React.Component{

    state = {
        items: [],
        input: ''
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

      handleResetButton = (event) => {
        event.preventDefault()
        this.setState({
            items: [],
            input: ''
        })
      }
    

      handleRemoveButton = (event) => {
        event.preventDefault()
        const filters = this.state.items.filter(filters.filter.forEach(element => {
            element.removeItem('li')
        }))
        this.setState({
            items: filters
        })
      }

      render() {
        return (
          <div>
            <h2>Todo List!</h2>
            <ul>
              {
                this.state.items.map((li) => <li>{li}  <button type="submit" onClick={this.handleRemoveButton}>Remove</button></li>)
              }
            </ul>
            <form onSubmit={this.handleSubmitTodo}>
              <input value={this.state.input} onChange={this.inputChangeHandler} />
              <button type="submit">Add Todo</button>
              <button type="reset" onClick={this.handleResetButton}>Reset Todos</button>
            </form>
          </div>
        )
      }
    }
