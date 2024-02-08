import { Link } from 'react-router-dom'
import IonIcon from "@reacticons/ionicons"


const CreateUser = () => {
  return (
    <div className="bg-blue-600 h-screen px-24 py-20">
        <div className="bg-white text-black px-12 py-8 rounded">
            <Link to="/user"><span>Back</span></Link>
            <p className="font-semibold text-2xl py-4">Add New User</p>
            <hr />

        </div>
    </div>
  )
}

export default CreateUser