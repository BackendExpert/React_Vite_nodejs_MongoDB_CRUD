import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={}></Route>
          <Route path='/create' element={}></Route>
          <Route path='/update' element={}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
