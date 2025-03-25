import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

 const authData= useContext(AuthContext)
 console.log(authData.employee);
  return (
    <div className='bg-[#1c1c1c] p-5 rounded mt-5 '>
      <div className='bg-red-400 mb-2  py-2 px-4 flex justify-between rounded'>
          <h2 className=' text-lg font-medium w-1/5 '>Employee Name</h2>
          <h3 className=' text-lg font-medium w-1/5 '>New Task</h3>
          <h5 className=' text-lg font-medium w-1/5 '>Active Task</h5>
          <h5 className=' text-lg font-medium w-1/5 '>Completed</h5>
          <h5 className=' text-lg font-medium w-1/5 '>Failed</h5>
        </div>
     <div className=''>
     {authData.employees.map(function(el,id){
          return  <div key={id} className='border-2 border-green-300 bg-black-500 mb-2  py-2 px-4 flex justify-between rounded'>
          <h2 className=' text-lg font-medium w-1/5 '>{el.firstName}</h2>
          <h3 className=' text-lg font-medium w-1/5 text-blue-400'>{el.taskNumbers.newTask}</h3>
          <h5 className=' text-lg font-medium w-1/5 text-yellow-300'>{el.taskNumbers.active}</h5>
          <h5 className=' text-lg font-medium w-1/5 text-white-900'>{el.taskNumbers.completed}</h5>
          <h5 className=' text-lg font-medium w-1/5 text-red-600'>{el.taskNumbers.fail}</h5>
        </div>
      })}
     </div>
    </div>
  )
}

export default AllTask
