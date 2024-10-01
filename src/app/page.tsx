'use client';

import React, { useEffect, useState } from 'react'
import axios from 'axios'

type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
};

const Page = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('http://localhost:5000/users')
        setUsers(res.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">First Name</th>
              <th className="py-2 px-4 border-b">Last Name</th>
              <th className="py-2 px-4 border-b">Created At</th>
              <th className="py-2 px-4 border-b">Updated At</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b text-center">{user.id}</td>
                <td className="py-2 px-4 border-b text-center">{user.username}</td>
                <td className="py-2 px-4 border-b text-center">{user.email}</td>
                <td className="py-2 px-4 border-b text-center">{user.first_name}</td>
                <td className="py-2 px-4 border-b text-center">{user.last_name}</td>
                <td className="py-2 px-4 border-b text-center">{new Date(user.createdAt).toLocaleString()}</td>
                <td className="py-2 px-4 border-b text-center">{new Date(user.updatedAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Page