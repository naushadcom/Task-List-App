import React from 'react'
const initState={
    name:"",
    email:"",
    password:""
}

function Form() {
    const [state,setState]=React.useState(initState)
    const {name,email,password}=state;
    const handleChange = (e) =>{
        // console.log(e.target.value,e.target.name)
        const {name,value}=e.target
        setState({
            ...state,
            [name]:value
        })
    }

    const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(state,"data is")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='name' value={state.name} onChange={handleChange} />
            <br />
            <input type="text" name='email' placeholder='email' value={state.email} onChange={handleChange} />
            <br />
            <input type="text" name='password' placeholder='password' value={state.password} onChange={handleChange} />
            <br />
            <input type="submit" value="SUBMIT DATA"  onChange={handleChange} />
            <br />
        </form>
    </div>
  )
}

export  {Form}
