




const init={counter:0,todo:{data:[]}}

export const reducer=(state=init,action)=>{
    switch(action.type){

        case "ADDTODO":{
            return{
                ...state,todo:{...state.todo,data:[...state.todo.data,action.value]}
            }

        }
        case "DELETETODO":{
            return {...state,todo:{...state.todo,data:[...state.todo.data.filter((el)=>el.id!==action.id)]}}
        }
    
    case"TAGGLETODO":{
        return {...state,todo:{...state.todo,data:[...state.todo.data.map((el)=>el.id===action.id
            ?{...el,status:!el.status} :state
            )]}}
    }
    case "edit":{
        return  {...state,todo:{...state.todo,data:[...state.todo.data.map((el)=>el.id===action.id
            ?{...el,title:action.text} :state
            )]}}
    }
    default:return state
}
}