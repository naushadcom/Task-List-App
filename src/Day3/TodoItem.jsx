import React from 'react'

function TodoItem(props) {
    // console.log(props)
    const {title,id,status,handleRemove}=props
  return (
    <>
    <div className='cont'>
        <h1>{title}</h1>
        <button className='btn2' onClick={()=>handleRemove(id)}>Delete</button>
    </div>
      
    </>
  )
}

export default TodoItem
