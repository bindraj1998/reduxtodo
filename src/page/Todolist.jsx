import React from 'react'
import { useState } from 'react'
import Setedit from './Setedit'

const Todolist = ({el,setedit,settaggle,dele,edit}) => {
    const[edit1,setedi]=useState(el.isedit)
    const a=()=>{
        setedi(!edit1)
    }
    console.log(edit1)
  return (
    <div>

<div key={el.id} style={{marginTop:30,borderRadius:"2%",alignItems:"center",height:50,display:"flex",justifyContent:"space-between",width:"40%",margin:"auto",border:"1px solid blue"}}>
                {edit1?<Setedit  edit={edit} id={el.id} a={a}/>:<div>{el.title}</div>}
                
                
                <div>{el.status?"DONE":"NOTDONE"}</div>
                <div><button onClick={()=>setedi(!edit1)}>edit todo</button></div>
                <div><button onClick={()=>settaggle(el.id)}>settaggle</button></div>
                <div> <button onClick={()=>dele(el.id)}>Deletetodo</button></div>
              
               </div>


    </div>
  )
}

export default Todolist