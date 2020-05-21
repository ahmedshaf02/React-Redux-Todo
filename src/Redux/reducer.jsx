
import { ADD_COUNTER, REDUCE_COUNTER, LOGIN_DATA, ADD_TODO,TOGGLE_STATUS} from "./actionTypes"
import { toggleTodoStatus } from "./actionCreators"

export const initState = {
  counter:0, 
  login:true,
  todo:[]
}


export default (state=initState, {type,payload})=>{

  switch(type){
    case ADD_COUNTER:
      return{
        ...state,
        counter: state.counter+payload
      }

    case REDUCE_COUNTER:
      return{
        ...state,
        counter: state.counter-payload
      }
    case LOGIN_DATA:
      return{
        ...state,
        login:payload
      }
    case ADD_TODO:
      return{
        ...state,
        todo:[...state.todo,payload]
      }
    case TOGGLE_STATUS:
      return{
        ...state,
        todo:state.todo.map(ele=>ele.id === payload?{...ele,status:!ele.status}:ele)
      }
    default:
      return state
  }

}