import React from 'react'
import { useState } from 'react'

const Input = ({addtodo}) => {

    const[text,settext]=useState("")
    const handleadd=()=>{

        const handle={id:Date.now(),title:text,status:false,isedit:false}
addtodo(handle)
settext("")

    }
  return (
    <div>



        <input type="text" value={text} placeholder='add something'onChange={(e)=>settext(e.target.value)}/>
        <button onClick={handleadd}>Add todo</button>
    </div>
  )
}

export default Input