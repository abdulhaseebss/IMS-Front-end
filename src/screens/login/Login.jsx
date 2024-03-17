import axios from 'axios';
import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

const login = () => {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate()
  
    const loginStudent = (e) => {
      e.preventDefault();
      console.log(email.current.value);
      console.log(password.current.value);
  
      axios.put(
        "https://gray-handsome-walkingstick.cyclic.app/api/v1/students/login",
        {
          email: email.current.value,
          password: password.current.value,
        }).then((res)=>{
          console.log(res);
          navigate('/studentDashboard')
          alert(res.data.message)
        }).catch((err)=>{
          console.log(err);
          alert(err.message)
        })
    }

    const goToRegister = ()=>{
        navigate('/register')
    }

      
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={loginStudent} method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                ref={email}
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 mt-[-20px]"
              >
                Password
              </label>
            </div>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                ref={password}
                className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>
        <p onClick={goToRegister} className="mt-3 text-center font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">Not a User?</p>
      </div>
    </div>
  </>
  )
}

export default login