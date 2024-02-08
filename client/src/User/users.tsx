import { useState } from "react"
import { Link } from 'react-router-dom'
import IonIcon from "@reacticons/ionicons"

const users = () => {
    const [allusers, setUser] = useState([{
        Name: "Jehan", Email: "jehan@123.com", Age: 20
    }])
    
return (
    <div className="bg-blue-600 h-screen px-24 py-20">
        <div className="bg-white text-black px-12 py-8 rounded">
            <p className="font-semibold text-2xl py-2">Users</p>
            <hr className="pb-4"/>
            <Link to="/user/create"><span className="bg-green-600 text-white px-8 py-2 mt-8 rounded">Add User <IonIcon name="person-add"/></span></Link>
            <table className="table-auto w-full my-8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allusers.map((user) => {
                           return <tr>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>
                                <td><button className="bg-green-500 px-8 py-2 rounded text-white hover:bg-green-600 duration-500">Update</button></td>
                                <td><button className="bg-red-500 px-8 py-2 rounded text-white hover:bg-red-600 duration-500">Delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default users