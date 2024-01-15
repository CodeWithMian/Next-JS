import axios from 'axios'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useRouter } from 'next/router';
const login = () => {
  const [input, setInput] = useState({
    userName:"",
    password:""
  })
  const router = useRouter()
  const [newError, setError] = useState(false)
  const inputhandler = (e)=>{
    const {name, value} = e.target
    setInput({...input, [name]:value})
  }
const submithandler = async(e)=>{
e.preventDefault()
try {
  const res = await axios.post("/api/user/login", input,{
    headers: {
      "Content-Type": "application/json",
    },
  })
  console.log(res)
  if (res?.data?.success) {
    toast.success("User register Successfully")
  }
  router.push("/dashboard");

} catch (error) {
  console.log(error?.response?.data?.message)
  toast.error(error?.response?.data?.message)
  setError(error?.response?.data?.message)
}finally{
  setTimeout(() => {
    setError(false)
  }, 5000);
}
}

  return (
    <div>
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submithandler} action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
             UserName
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="userName"
                  type="text"
                  autoComplete="email"
                  onChange={inputhandler}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  {newError ? newError :""}
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={inputhandler}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default login
