import React from 'react'
import { Navigate } from 'react-router-dom';

const Home = () => {
     const loginuser=JSON.parse(localStorage.getItem("user"));

  return (
    <>
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-bold mb-4">Account Information</h2>
      <div className="flex flex-col space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email : <span> {loginuser.email}</span>
          </label>
         
        </div>
        <div>
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password : <span> {loginuser.password}</span>
          </label>
         
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type='button'
          onClick={()=>{localStorage.removeItem("Loggin"),
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
 



 






    </>
  )
}

export default Home