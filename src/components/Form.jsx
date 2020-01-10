import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Form = (props) => {
  const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = (data) => { 
    console.log(data) 

    axios.post(`https://limitless-plateau-31114.herokuapp.com/new-person`, data).then((response) => {
      console.log(response.data);
      props.history.push('/');
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input name="name" placeholder="name" ref={register({required: true, minLength: 4, maxLength: 15 })} />
      {errors.name && "Please add a name between 4 and 15 characters."}
      <br />
      <input name="location" placeholder="location" ref={register({ required: true })} />
      {errors.location && "Please add a location."}
      <br />
      <input name="age" type="number" placeholder="age" ref={register({ required: true, min: 18, max: 99 })} />
      {errors.age && "Please add an age between 18 and 99."}
      <br />
      <input type="submit" />
    </form>
  )
};

export default Form;