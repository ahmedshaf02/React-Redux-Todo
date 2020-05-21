import React from "react";
import { addTodoItem,toggleTodoStatus } from "../Redux/actionCreators";
import { connect } from "react-redux";
class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    const { value } = this.state;
    const { handleTodo,todo,toggleStatus } = this.props;
    console.log(todo)
    return (
      <>
        <h1>Todo app</h1>
        <br />
        <input
          value={value}
          onChange={e => this.setState({ value: e.target.value })}
        />
        <button onClick={()=>handleTodo(value)}>Add todo</button>

        <div>
          {todo && todo.map(ele=>(
          <div key={ele.title}>
            <span>{ele.title}</span>
            <span>Status:
              <button onClick={()=>toggleStatus(ele.id)} >
                  {ele.status?"true":"false"}
              </button> 
            </span>
              <button onClick={()=>editTodo(ele.id)} >
                  edit
              </button> 
              <button onClick={()=>deleteTodo(ele.id)} >
                  delete
              </button> 
          </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state =>({
  todo: state.todo
})
const mapDispatchToProps = disptach =>({
  handleTodo: data =>disptach(addTodoItem(data)),
  toggleStatus:(id) =>disptach(toggleTodoStatus(id))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
