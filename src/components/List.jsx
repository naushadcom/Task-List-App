import React from 'react'
import { ListItem } from './ListItem'
import {v4 as uuid} from "uuid"
function List() {
    const[query,setQuery]=React.useState("")
    const[list,setList]=React.useState([])
    const handleAdd=()=>{
        const payload={
            title:query,
            status:false,
            id:uuid()
        };
        setList([...list,payload])
    };
    const handleDelete =(id)=>{
        let updatedList = list.filter(item=>item.id !== id)
        setList(updatedList)
    }
  return (
    <>
        <h1>List  of  items</h1>
        <div>
            <input 
                value={query} 
                onChange={(e)=>setQuery(e.target.value)}
                type="text" 
                placeholder='add something'
            />
            <button onClick={handleAdd}>ADD</button>
        </div>
        <div>
            { list.length>0 && `count is ${list.length}`}
        </div>
        <div>
            {list.map((item,index) =>{
            {/* <div key={item.id}>{item.title}</div> */}
            return( 
                <ListItem 
                    isHidden={index % 2==0} 
                    handleDeleteId={handleDelete}  
                    key={item.id} 
                    {...item}
                />
            )
        })}
        </div>
    </>
  )
}

export  {List}
