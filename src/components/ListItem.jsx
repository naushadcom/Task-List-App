import React from 'react'

function ListItem({title,id,status,handleDeleteId,isHidden}) {
    // const handleDeleteFn=()=>{
    //     handleDeleteId(id)
    // };
// if(title==="HIDDEN"){
//     return null
// }
if(isHidden){
    return null
}
  return (
    <div style={{border:"1px solid clack",margin:"10",padding:"5"}}>
      <h3>{title}</h3>
      <button onClick={()=>handleDeleteId(id)}>Delete</button>
    </div>
  )
}

export {ListItem}
