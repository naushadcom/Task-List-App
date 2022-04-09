// import logo from './logo.svg';
// import React from 'react';
import './App.css';
// import { List } from './components/List';
// import { Form } from  './components/Form'

// function App() {
//   //conditional tardering
//   const [isAuth,setIsAuth]=React.useState(false)
//   const isError = false;
//   const isLoading =false;
//   const handleLogin =()=>{
//     setIsAuth(true)
//   }

//   // if(!isAuth){
//   //   return(
//   //     <div>
//   //       User is not logged in, please 
//   //       <button onClick={handleLogin}>LOGIN</button>
//   //     </div>
//   //   );
//   // }

//   return !isAuth?(
//     <div>
//       user si not logged in , please
//       <button onClick={handleLogin}>Login</button> 
//     </div>
//   ):isLoading ? <div>...loading</div>:isError ? <div>Something went wrong</div>:(
//     <div className="App">
//       <List/>
//       <Form/>
//     </div>
//   );
// }

// export default App;



//................................................................
import TodoList from './Day3/TodoList'

import React from 'react'

function App() {
  return (
    <div className='App'>
      <h1 className='head'>Task list of 2022</h1>
      <TodoList />
    </div>
  )
}

export default App








































// list am=nd keys
//array of items
//[1,2,3].map
//conditional 
//different components//
//if true com-a if flase com-b