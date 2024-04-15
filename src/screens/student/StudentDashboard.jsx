import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StudentDashboard = () => {
    const [allStudent , setAllStudent] = useState([])
    const [newArr , setNewArr] = useState([])

   useEffect(() => {
    axios.get('https://silly-overshirt-pig.cyclic.app/api/v1/students')
    .then((res)=>{
        allStudent.push(res.data.students)
        setAllStudent([...allStudent])
        console.log(allStudent[0]);
    }).catch((err)=>{
        console.log(err);
    })
   }, [])

   const editStudent = (index)=>{
    console.log(index);
   }

   function deleteStudent(index) {
    console.log(index);
    axios.delete(`https://silly-overshirt-pig.cyclic.app/api/v1/students/${index._id}`)
    .then((res)=>{
        console.log(res.data);
        // allStudent.push(res.data.students)
        setAllStudent([...allStudent])
        console.log(allStudent);
    }).catch((err)=>{
        console.log(err);
    })
   }
   
   
  return (
    <>
    <div className='flex justify-between m-3'>
        <h1 className='text-2xl font-semibold '>Student Dashboard</h1>
        <button className='pr-3 pl-3 rounded-md bg-indigo-600 transition-all text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Signout</button>
    </div><hr />
    


    <div className='flex gap-5 ml-5 mr-5 justify-evenly flex-wrap'>
     {allStudent.length > 0 ? allStudent.map((item , index)=>{
        console.log(item[index]);
        return <div key={item[index]._id} className='mt-5 p-5 w-[30%] border-2 rounded-md'>
        <p className='flex justify-between m-2'><span className='font-semibold'>Name:</span>{item[index].fullName}</p>
        <p className='flex justify-between m-2'><span className='font-semibold'>Email:</span>{item[index].email}</p>
        <p className='flex justify-between m-2'><span className='font-semibold'>Course:</span>{item[index].course}</p>
        <p className='flex justify-between m-2'><span className='font-semibold'>Age:</span>{item[index].age}</p>
        <p className='flex justify-between m-2 mb-5'><span className='font-semibold'>Contact:</span>{item[index].contactNo}</p><hr />
        <div className='flex justify-around mt-5'>
            <button className='pr-3 pl-3 rounded-md bg-indigo-600 transition-all text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={()=>editStudent(item[index])}>Edit</button>
            <button className='pr-3 pl-3 rounded-md bg-indigo-600 transition-all text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' onClick={()=>deleteStudent(item[index])}>Delete</button>
        </div>
        </div>
     }) : <h1>Loading...</h1>}
    </div>
    </>
  )
}

export default StudentDashboard