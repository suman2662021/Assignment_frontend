import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Form, Toast} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { updateFormData,getUsername } from '../utils/api';

const Edit = () => {
  const [username,setUsername]=useState("");
  const [name,setName]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  const [city,setCity]=useState("");
  const [state,setState]=useState("");
  const [country,setCountry]=useState("");
  const [user, setUser]=useState("");
  const [disable,setDisable]=useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    Promise.resolve(updateFormData(
     username,
     name,
     phone,
     address,
     city,
     state,
     country,
    )).then((res)=>{
     console.log(res.data);
     alert("Updated Successfully!");
    }).catch((e)=>{
     console.log("error",e);
    })
   };

   const handleUsername=(event)=>{
    event.preventDefault();
    Promise.resolve(getUsername(user))
    .then((res)=>{
        setDisable(false);
        setUsername(res.data.User.userName);
        setName(res.data.User.name);
        setPhone(res.data.User.phoneNumber);
        setAddress(res.data.User.address);
        setCity(res.data.User.city);
        setState(res.data.User.state);
        setCountry(res.data.User.country);
    }).catch((e)=>{
        console.log("error",e)
        alert("Username does not exist!");
    })
}

   

    return (
        <div style={{overflowY:"scroll",marginBottom:"100px"}}>
      <Form onSubmit={handleUsername}>
      <Form.Group className="mb-1" controlId="formBasicUsername">
        <Form.Label>Enter Username To Update your Data</Form.Label>
        <Form.Control type="text" placeholder="Username to Fetch Details" required value={user} onChange={e=>setUser(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
      <hr/>
           <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-1" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" value={username} disabled={disable} onChange={e=>setUsername(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" value={name} disabled={disable} onChange={e=> setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="Phone Number"  value={phone} disabled={disable} onChange={e=> setPhone(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" value={address} disabled={disable} onChange={e=>setAddress(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="City" value={city} disabled={disable} onChange={e=>setCity(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicState">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="State" value={state} disabled={disable} onChange={e=> setState(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-1" controlId="formBasicCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" placeholder="Country" value={country} disabled={disable} onChange={e=> setCountry(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Update
      </Button>
        </Form>
        </div>
    );
};

export default Edit;