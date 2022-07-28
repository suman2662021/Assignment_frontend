import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { postFormData } from '../utils/api';

const Add = () => {
  const [username,setUsername]=useState("");
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [country,setCountry]=useState("");

  const handleSubmit = (event) => {
   event.preventDefault();
   Promise.resolve(postFormData(
    username,
    name,
    phone,
    address,
    city,
    state,
    country,
   )).then((res)=>{
    console.log(res.data);
    alert("Added Succesfully!")
   }).catch((e)=>{
    console.log("error",e);
   })
  };
    return (
      <>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-1" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={name} onChange={e=> setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number"  value={phone} onChange={e=> setPhone(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" value={address} onChange={e=>setAddress(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" value={city} onChange={e=>setCity(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicState">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" value={state} onChange={e=> setState(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Country" value={country} onChange={e=> setCountry(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
        </Form>
        </>
    );
};

export default Add;