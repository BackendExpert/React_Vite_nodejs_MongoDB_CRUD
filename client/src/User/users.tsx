const users = () => {
    
    
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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="px-8">Jehan</td>
                        <td>Jhegabn@1</td>
                        <td>21</td>
                        <td className="px-12">
                            <button>Update</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default users