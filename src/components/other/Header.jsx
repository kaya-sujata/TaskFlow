import React from 'react'
import { useState,useEffect } from 'react';

const Header = (props) => {
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      try {
        const parsedUser = JSON.parse(loggedInUser);
        if (parsedUser?.data?.firstName) {
          setFirstName(parsedUser.data.firstName);
        }
      } catch (error) {
        console.error("Error parsing loggedInUser:", error);
      }
    }
  }, []);
  const logOutUser=()=>{
   localStorage.setItem('loggedInUser','')
   window.location.reload();
  props.changeUser(' ')
  } 

  return (
    <div className='flex items-end justify-between'>
<h1 className='text-2xl font-medium'>Hello <br/>  
<span className="text-3xl font-semibold">{firstName || "Guest"}</span>
</h1>

<button onClick={logOutUser} className='bg-red-600 text-lg font-medium px-5 py-2 text-white' >Log out</button>
    </div> 
  )
}

export default Header
