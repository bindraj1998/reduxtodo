import React from 'react'
import { useState } from 'react'

const Setedit = ({edit,id,a}) => {
    const [text,settext]=useState("")
const handleadd=()=>{
    edit(text,id)
    settext("")
    a()
}
  return (
    <div>


        <input type="text" onChange={(e)=>settext(e.target.value)}/>
        <button onClick={handleadd}>save</button>
    </div>
  )
}

export default Setedit