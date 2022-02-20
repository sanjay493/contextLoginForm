import React,{useState} from 'react'
import {useForm} from 'react-hook-form'

const LoginForm = () => {
const {register,handleSubmit, formState: { errors }} =useForm();
const [userInfo,setUserInfo]=useState()
const onSubmit=(data)=>{
  setUserInfo(data)
  console.log(data);
}
console.log(errors)
  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo,undefined,2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder='Username' {...register('username',{required: "Username is required ",minLength:{value:6,message:"Min 6 Charecters"}})}/>
            </div>
            {errors.username && <p>{errors.username.message}</p>}
          
          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder='Email' {...register('email',{required: "Email is required "})} />
          </div>
          {errors.email && <p>{errors.email.message}</p>}
          
          <div className="field">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Password' {...register('password',{required: "Password is required ",minLength:{value:3,message:"Min 3 Charecters"}})} />
          </div>
          {errors.password && <p>{errors.password.message}</p>}
          
           <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm