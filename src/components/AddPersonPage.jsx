import React from 'react';
import Form from './Form.jsx';


const AddPersonPage = (props) => {
  return (
    <>
      <h1>Add a person </h1>
      <Form history={props.history} />
    </>
  )
}



export default AddPersonPage;