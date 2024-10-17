import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {

      if (currentState === 'Sign Up') {

        if (password !== confirmPassword) {
          toast.error('Passwords do not match!');
          return;
        }

        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)
        }

      }
      else {

        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)
        }
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)

    }
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token])

  return (
    <div className='min-h-[45.7vh]'>
      <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <p className='prata-regular text-3xl'>{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
        </div>
        {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Full Name' required />}
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email Address' required />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
        {currentState === 'Login' ? '' : <input onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Confirm Password' required />}
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          {
            currentState === 'Sign Up' ?
              <label className='text-[12px] sm:text-sm'><input type="checkbox" required />Terms & Conditions</label>
              : <p className='hover:underline cursor-pointer text-[12.5px] sm:text-sm'>Forgot Password?</p>
          }
          {
            currentState === 'Login' ?
              <p onClick={() => setCurrentState('Sign Up')} className='inline-flex gap-1 text-[12.5px] sm:text-sm'>
                Don't Have an account?
                <span className='hover:underline cursor-pointer font-semibold'>SignUp</span>
              </p>
              : <p onClick={() => setCurrentState('Login')} className='inline-flex gap-1 text-[12px] sm:text-sm'>
                Already Have an account?
                <span className='hover:underline cursor-pointer font-semibold'>Login</span></p>
          }
        </div>
        <button className='bg-gray-500 text-white font-light px-8 py-2 mt-2 w-full hover:bg-black active:bg-gray-700'>{currentState === 'Login' ? 'Login' : 'Register'}</button>

      </form>

    </div>
  )
}

export default Login
