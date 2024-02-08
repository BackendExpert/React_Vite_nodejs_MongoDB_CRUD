import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateUser from './User/CreateUser'
import UpdateUser from './User/UpdateUser'
import Users from './User/Users'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<Users />}></Route>
          <Route path='/user/create' element={<CreateUser />}></Route>
          <Route path='/user/update' element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
