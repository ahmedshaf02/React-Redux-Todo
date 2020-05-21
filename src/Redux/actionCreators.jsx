
import {ADD_COUNTER, REDUCE_COUNTER,ADD_TODO,TOGGLE_STATUS}  from "./actionTypes"
import {v4 as uuidv4} from "uuid"

export const addCounter = (payload)=>({
      type:ADD_COUNTER,
      payload
})
export const reduceCounter = (payload)=>({
      type:REDUCE_COUNTER,
      payload
})
export const addTodoItem = (payload)=>({
      type:ADD_TODO,
      payload:{title:payload, status:false,id:uuidv4()}
})
export const toggleTodoStatus = (payload)=>({
      type:TOGGLE_STATUS,
      payload:payload
})