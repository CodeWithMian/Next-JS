import axios from 'axios'
import React, { useEffect, useState } from 'react'


const getallusers = () => {
  const [users , setuser]=useState([])
const allusers = async()=>{
    try {
        const res = await axios.get("/api/user/getalluser")
        setuser(res.data.message)
        console.log(res.data.message)
    } catch (error) {
      
        console.log(error)
    }
}
useEffect(() => {
  allusers()
}, []);
  return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-400 dark:text-black font-extrabold">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    UserName
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody className='text-base'>
            {
              users.map((user)=>{
                return(
                  <tr className="even:bg-white even:dark:bg-gray-300 odd:bg-gray-50 odd:dark:bg-gray-100 border-b text-black dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    {user.name}
                </th>
                <td className="px-6 py-4">
                {user.email}
                </td>
                <td className="px-6 py-4">
                {user.phone}
                </td>
                <td className="px-6 py-4">
                {user.userName}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
                )
              })
            }
        </tbody>
    </table>
</div>

  )
}

export default getallusers
