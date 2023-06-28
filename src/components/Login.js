import React from 'react'
import { loginUrl } from '../services/spotify'

const Login = () => {
  return (
    <div className='flex flex-col  items-center bg-black h-[100vh]'>
      <div className=''>
        <img src='https://www.pngkey.com/png/full/1011-10111347_spotify.png'  />
      </div>

      
    <div className='bg-green-800 
    mt-32 p-3 rounded w-20 flex
     justify-center items-center
     text-white font-bold'> 
     <a href={loginUrl}><button>Login</button></a>
     
     </div>
          </div>
  )
}

export default Login
