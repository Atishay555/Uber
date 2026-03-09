import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const[password , setPassword] = useState('')
  const[email , setEmail] = useState('')
  const [userData ,setUserData] = useState({})

  const handleSubmit = (e)=>{
    e.preventDefault() ; 
    const data = {
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
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input value={email} 
        onChange={(e)=> 
          setEmail(e.target.value)
          } className='bg-[#eeeeee] mb-7 w-full rounded px-4 py-2  border text-lg placeholder:text-base' type="email" required placeholder='example@gmail.com' />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input value={password} onChange={(e)=> setPassword(e.target.value)} className='bg-[#eeeeee] mb-7 w-full rounded px-4 py-2  border text-lg placeholder:text-base' type="password" required placeholder='password' />
        <button className='bg-[#111] text-white w-full font-semibold mb-3 rounded px-4 py-2   text-lg placeholder:text-base'>Login</button>
        <p>New here ? <Link to= '/signup' className='text-blue-800'> Create New Account</Link></p>
      </form>
      </div>
      <div>
                <Link to='/captainLogin' className='bg-[#10b461] text-white w-full flex items-center justify-center font-semibold mb-7 rounded px-4 py-2 text-lg placeholder:text-base'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin