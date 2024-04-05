import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { userName, setUserName } = useContext(AuthContext);

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          setUserName(data.userName);
          navigate('/menu');
        })}
      >
        <input type='text' {...register('userName')} placeholder='Enter your name' />
        <input type='password' {...register('userPassword')} placeholder='Enter your password' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Login;
