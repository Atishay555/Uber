import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

    const[password , setPassword] = useState('')
    const[email , setEmail] = useState('')
    const[firstName , setFirstname] = useState('')
    const[lastName , setLastname] = useState('')
    const [userData ,setUserData] = useState({})
  
    const handleSubmit = (e)=>{
      e.preventDefault() ; 
      const data = {
       fullname:{ 
        firstName:firstName,
        lastName:lastName
      },
        email:email,
        password:password
      };
      setUserData(data) ; 
      console.log(data) ; 
      setPassword('');
      setEmail('');
    }
  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
         <div>
                         <img className='w-16 mb-10' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="Uber" />
         <form onSubmit={(e)=>{handleSubmit(e)}} >
          <h3 className='text-lg font-medium mb-2'>What's your Name</h3>
          <div className='flex gap-4'>
                <input value={firstName} 
           onChange={(e)=> 
             setFirstname(e.target.value)
             } className='bg-[#eeeeee] mb-5 w-1/2 rounded px-4 py-2  border text-lg placeholder:text-base' type="text" required placeholder='Firstname' />
                <input  value={lastName} 
           onChange={(e)=> 
             setLastname(e.target.value)
             } className='bg-[#eeeeee] mb-5 w-1/2 rounded px-4 py-2  border text-lg placeholder:text-base' type="text" placeholder='Lastname' />
          </div>
           <h3 className='text-lg font-medium mb-2'>What's your email</h3>
           <input value={email} 
           onChange={(e)=> 
             setEmail(e.target.value)
             } className='bg-[#eeeeee] mb-5 w-full rounded px-4 py-2  border text-lg placeholder:text-base' type="email" required placeholder='example@gmail.com' />
           <h3 className='text-lg font-medium mb-2'>Set Password</h3>
           <input value={password} onChange={(e)=> setPassword(e.target.value)} className='bg-[#eeeeee] mb-5 w-full rounded px-4 py-2  border text-lg placeholder:text-base' type="password" required placeholder='password' />
           <button className='bg-[#111] text-white w-full font-semibold mb-1 rounded px-4 py-2   text-lg placeholder:text-base'>Register </button>
           <p>Already Registered ? <Link to= '/login' className='text-blue-800'> Login Here</Link></p>
         </form>
         </div>
         <div>
                  <p className='text-[10px] text-gray-500 '>By proceeding you consent to get call,Whatsapp or SMS messages, included by automated means from Uber and it's affiliates to the email provided. </p>
         </div>
       </div>
  )
}

export default UserSignup