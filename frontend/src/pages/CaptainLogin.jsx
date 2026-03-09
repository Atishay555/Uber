import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
    const[password , setPassword] = useState('')
    const[email , setEmail] = useState('')
    const [captainData ,setcaptainData] = useState({})
  
    const handleSubmit = (e)=>{
      e.preventDefault() ; 
      const data = {
        email:email,
        password:password
      };
      setcaptainData(data) ; 
      console.log(data) ; 
      setPassword('');
      setEmail('');
    }
  return (
     <div className='p-7 h-screen flex flex-col justify-between '>
      <div>
                      <img className='w-16 mb-10' src="https://staging.svgrepo.com/show/505031/uber-driver.svg" alt="UberDrive" />
      <form onSubmit={(e)=>{handleSubmit(e)}} >
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input value={email} 
        onChange={(e)=> 
          setEmail(e.target.value)
          } className='bg-[#eeeeee] mb-7 w-full rounded px-4 py-2  border text-lg placeholder:text-base' type="email" required placeholder='example@gmail.com' />
        <h3 className='text-lg font-medium mb-2'>Password</h3>
        <input value={password} onChange={(e)=> setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 w-full rounded px-4 py-2  border text-lg placeholder:text-base' type="password" required placeholder='password' />
        <button className='bg-[#111] text-white w-full font-semibold mb-3 rounded px-4 py-2   text-lg placeholder:text-base'>Login</button>
        <p>New here ? <Link to= '/captainSignup' className='text-blue-800'> Register as Captain</Link></p>
      </form>
      </div>
      <div>
                <Link to='/login' className='bg-[#10b461] text-white w-full flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 text-lg placeholder:text-base'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin ;