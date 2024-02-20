import { useState } from 'react'

const Register = (props) => {

  const [ submitForm, setSubmitForm ] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const { email, password, confirmPassword } = submitForm

  const formChangeHandler = (e) => {
    setSubmitForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const clickHandler = (e) => {
    e.preventDefault()

    console.log('button clicked')
  }

  return (
    <div className='bg-green-900 text-white flex flex-col items-center p-8 gap-4'>
      <p className='font-bold text-xl'>Register Account</p>
      <form className='flex flex-col gap-4' onSubmit={clickHandler}>
        <div>
          <p className='text-xs'>Email</p>
          <input type='email' name='email' value={email} onChange={formChangeHandler} className='text-gray-700'/>
        </div>
        <div>
          <p className='text-xs'>Password</p>
          <input type='password' name='password' value={password} onChange={formChangeHandler} className='text-gray-700' />
        </div>
        <div>
          <p className='text-xs'>Confirm Password</p>
          <input type='password' name='confirmPassword' value={confirmPassword} onChange={formChangeHandler} className='text-gray-700' />
        </div>
        <button type='submit'>Register Account</button>
      </form>
    </div>
  );
}
export default Register;