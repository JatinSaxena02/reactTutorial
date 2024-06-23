import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="mt-5 text-3xl text-white">Todos</div>
      {todos.map((todo) => (
        <div className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}>
        <div className='text-white text-2xl'>{todo.text}</div>
            <button className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md" onClick={()=>dispatch(removeTodo(todo.id))}>X</button>
            <button className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md" onClick={()=>dispatch(updateTodo(todo.id))}>Update</button>
        </div>
      ))}
    </>
  );
}

export default Todo;
