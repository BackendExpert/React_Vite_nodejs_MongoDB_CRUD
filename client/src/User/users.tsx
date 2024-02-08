import { useState } from "react"

const users = () => {
    const [allUsers, setUser] = useState([{
        Name: "Jehan", Email: "jehan@123.com", Age: 20
    }])
    
return (
    <div className="bg-blue-600 h-screen px-24 py-20">
        <div className="bg-white text-black px-12 py-8 rounded">
            <p className="font-semibold text-2xl py-2">Users</p>
            <hr />

            <table className="table-auto w-full">
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
                        allUsers.map((user) => {
                            <tr>
                                
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