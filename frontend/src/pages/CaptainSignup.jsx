import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {
  
      const[password , setPassword] = useState('')
      const[email , setEmail] = useState('')
      const[firstName , setFirstname] = useState('')
      const[lastName , setLastname] = useState('')
      const [captainData ,setCaptainData] = useState({})
    
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
        setCaptainData(data) ; 
        console.log(data) ; 
        setPassword('');
        setEmail('');
      }
  return (
    <div className='p-7 h-screen flex flex-col justify-between '>
         <div>
                         <img className='w-16 mb-10' src="https://staging.svgrepo.com/show/505031/uber-driver.svg" alt="Uber" />
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
           <p>Already Registered as a Captain ? <Link to= '/captainLogin' className='text-blue-800'> Login Here</Link></p>
         </form>
         </div>
         <div>
                  <p className='text-[10px] text-gray-500 '>This site is protected by the reCAPTACHA and the <span className='underline font-semibold'>Google Policy</span> and <span className='underline font-semibold'>Terms of Services </span>Apply. </p>
         </div>
       </div>
  )
}

export default CaptainSignup