import { Link } from 'react-router-dom'
import IonIcon from "@reacticons/ionicons"
import React, {useState} from "react"
import axios from 'axios'


const CreateUser = () => {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  
  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, email, age})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className="bg-blue-600 h-screen px-24 py-20">
        <div className="bg-white text-black px-12 py-8 rounded">
            <Link to="/user"><span className='bg-blue-500 px-8 py-2 text-white rounded hover:bg-blue-600 duration-500'><IonIcon name="arrow-back" /><span className='pl-2 pt-[-2]'>Back</span></span></Link>
            <p className="font-semibold text-2xl py-4">Add New User</p>
            <hr />

            <form onSubmit={Submit}>
              <div className="mb-2">
                <label htmlFor="">Name</label>
                <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <div className="mb-2">
                <label htmlFor="">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <div className="mb-2">
                <label htmlFor="">Age</label>
                <input onChange={(e) => setAge(e.target.value)} type="number" placeholder="Enter Age" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <button className="rounded bg-green-700 duration-500 hover:bg-green-800 text-white py-4 px-8 font-semibold text-md">Add User</button>
            </form>

        </div>
    </div>
  )
}

export default CreateUser