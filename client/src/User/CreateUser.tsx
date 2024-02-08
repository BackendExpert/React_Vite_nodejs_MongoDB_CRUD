import { Link } from 'react-router-dom'
import IonIcon from "@reacticons/ionicons"


const CreateUser = () => {
  return (
    <div className="bg-blue-600 h-screen px-24 py-20">
        <div className="bg-white text-black px-12 py-8 rounded">
            <Link to="/user"><span className='bg-blue-500 px-8 py-2 text-white rounded hover:bg-blue-600 duration-500'><IonIcon name="arrow-back" /><span className='pl-2 pt-[-2]'>Back</span></span></Link>
            <p className="font-semibold text-2xl py-4">Add New User</p>
            <hr />

            <form>
              <div className="mb-2">
                <label htmlFor="">Name</label>
                <input type="text" name="Enter Name" id="" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <div className="mb-2">
                <label htmlFor="">Email</label>
                <input type="email" name="Enter Name" id="" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <div className="mb-2">
                <label htmlFor="">Age</label>
                <input type="number" name="Enter Name" id="" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'/>
              </div>
              <button className="rounded bg-green-700 duration-500 hover:bg-green-800 text-white py-4 px-8 font-semibold text-md">Add User</button>
            </form>

        </div>
    </div>
  )
}

export default CreateUser