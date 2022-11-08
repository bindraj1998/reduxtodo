import React from 'react'
import Input from './Input'
import {useSelector,useDispatch,shallowEqual} from "react-redux"
import { useState } from 'react'
import Setedit from './Setedit'
import Todolist from './Todolist'

const Todo = () => {

const {data:todo}=useSelector((state)=>state.todo,shallowEqual)
const dispatch=useDispatch()
// const [edit,setedit]=useState(false)
const addtodo=(value)=>{

    const add={type:"ADDTODO",value}
    dispatch(add)
}
const settaggle=(id)=>{
    const taggle={type:"TAGGLETODO",id}
    dispatch(taggle)
}
const dele=(id)=>{
    const delet={type:"DELETETODO",id}
    dispatch(delet)
}

const edit=(text,id)=>{
    console.log(text,id,"heloo")
    // console.log("HELLO")
    const edi={type:"edit",text,id}
    dispatch(edi)
}
console.log(Date.now(),"Rerenderd")

  return (
    <div>Todo


        <Input addtodo={addtodo}/>

        {todo.map((el)=>(


            <Todolist el={el} key={el.id} settaggle={settaggle}  dele={dele} edit={edit}/>
            // <div key={el.id} style={{display:"flex",justifyContent:"space-between",width:"40%",margin:"auto",border:"1px solid blue"}}>
            //     {edit?<Setedit/>:<div>{el.title}</div>}
                
                
            //     <div>{el.status?"DONE":"NOTDONE"}</div>
            //     <div><button onClick={()=>setedit(true)}>edit todo</button></div>
            //     <div><button onClick={()=>settaggle(el.id)}>settaggle</button></div>
            //     <div> <button onClick={()=>dele(el.id)}>Deletetodo</button></div>
              
            //    </div>
        ))}
    </div>
  )
}

export default Todo