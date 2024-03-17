import axios from "axios";
import React, { useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const email = useRef();
  const password = useRef();
  const fullName = useRef();
  const contact = useRef();
  const age = useRef();
  const course = useRef();
  const navigate = useNavigate()

  const registerStudent = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(fullName.current.value);
    console.log(contact.current.value);
    console.log(age.current.value);
    console.log(course.current.value);

    axios.post(
      "https://gray-handsome-walkingstick.cyclic.app/api/v1/students/register",
      {
        email: email.current.value,
        password: password.current.value,
        fullName: fullName.current.value,
        contactNo: contact.current.value,
        age: age.current.value,
        course: course.current.value,
      }).then((res)=>{
        console.log(res);
        alert(res.data.message)
        navigate('/')
      }).catch((err)=>{
        console.log(err);
        alert(err.message)
      })
  };

  const goToLogin = ()=>{
    navigate('/')
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={registerStudent} method="POST">
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

              <div className="flex items-center justify-between">
                <label className=" mt-1 block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  ref={fullName}
                  className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className=" mt-1 block text-sm font-medium leading-6 text-gray-900">
                  Contact
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="contact"
                  name="contact"
                  type="number"
                  autoComplete="phone"
                  required
                  ref={contact}
                  maxLength={11}
                  className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className=" mt-1 block text-sm font-medium leading-6 text-gray-900">
                  Age
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="age"
                  name="age"
                  type="number"
                  autoComplete="age"
                  required
                  ref={age}
                  maxLength={2}
                  className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className=" mt-1 block text-sm font-medium leading-6 text-gray-900">
                  Course
                </label>
              </div>
              <div className="mt-1">
                <select
                  ref={course}
                  className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="course"
                  id="course"
                >
                  <option>None</option>
                  <option>Web Mobile App Development</option>
                  <option>Ai ChatBot</option>
                  <option>Graphic Design</option>
                  <option>Flutter Development</option>
                </select>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>
          <p onClick={goToLogin} className="mt-3 text-center font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer">Already a User?</p>
        </div>
      </div>
    </>
  );
};

export default Register;
