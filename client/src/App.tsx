import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from './User/CreateUser'
import UpdateUser from './User/UpdateUser'
import Users from './User/Users'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<Users />}></Route>
          <Route path='/user/create' element={<CreateUser />}></Route>
          <Route path='/user/update' element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
