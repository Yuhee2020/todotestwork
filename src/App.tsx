import React, {useEffect} from 'react';
import './App.css';
import {Todolist} from "./components/todolist/Todolist";
import {todoAPI} from "./api";
import {useAppDispatch} from "./hooks/hooks";
import {addTodoTC, deleteTodoTC, updateTodoTC} from "./store";


function App() {
const dispatch=useAppDispatch()
    useEffect(()=>{
        // dispatch(addTodoTC({name:"rrrr",descriptions:"fffff"}))
        dispatch(updateTodoTC({id:"639b83ac8aab38316451abda",status:false}))
        // todoAPI.getTodo().then((res)=>{
        //     console.log(res.data)
        // })
        // todoAPI.addTodo({name:"hello", description:"htyyyhihihi", status:false})
        // todoAPI.deleteTodo("639b81758aab38316451abd4")
        // todoAPI.updateTodo({id: "639b83ac8aab38316451abd7",
        //     name:"string",
        //     status:true,
        //     description:"string"})
    },[])
  return (
    <div>
      <Todolist/>
    </div>
  );
}

export default App;
