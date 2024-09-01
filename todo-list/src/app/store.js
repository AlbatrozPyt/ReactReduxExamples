import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice"
import toDoListReducer from "../features/todolist/toDoSlice"

export default configureStore({
    reducer: {
        counter: counterReducer,
        todolist: toDoListReducer
    }
})