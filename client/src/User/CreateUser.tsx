import { Link } from 'react-router-dom'
import IonIcon from "@reacticons/ionicons"


const CreateUser = () => {
  return (
    <div className="bg-blue-600 h-screen px-24 py-20">
        <div className="bg-white text-black px-12 py-8 rounded">
            <Link to="/user"><span className='bg-blue-500 px-8 py-2 text-white rounded hover:bg-blue-600 duration-500'><IonIcon name="arrow-back" /><span className='pl-2 pt-[-2]'>Back</span></span></Link>
            <p className="font-semibold text-2xl py-4">Add New User</p>
            <hr />

        </div>
    </div>
  )
}

export default CreateUser