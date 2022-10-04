import React from 'react';

import { useState } from 'react';
import axios from 'axios';

export default function Register() {

  const [username,setUsername]=useState('');
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [address,setAddress]=useState('');
  const [location,setLocation]=useState('');
  const [type,setType]=useState('');
  const [password,setPassword]=useState('');
  const [passwordConfirm,setPasswordConfirm]=useState('');
  const [message, setMessage] = useState(null)
  const handleUsername=(e)=>{
    setUsername(e.target.value);
  }
  const handleName=(e)=>{
    setName(e.target.value);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handleAddress=(e)=>{
    setAddress(e.target.value);
  }
  const handleLocation=(e)=>{
    setLocation(e.target.value);
  }
  const handleUserType=(e)=>{
    setType(e.target.value);
  }
  const handlePasswordConfirm=(e)=>{
    setPasswordConfirm(e.target.value);
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
  }
  const submit=(e)=>{
    axios.post('http://localhost:8080/api/v1/user/saveUser',{
      username:username,
      name:name,
      email:email,
      address:address,
      location:location,
      type:type,
      password:password
    })
    .then(result=>{
      setMessage("success");
      console.log(result);
    })
    .catch(error=>{
      setMessage("error");
      console.log(error);
    });
  }

  return (
    <div> <br/>
    
        
<div class=" h-screen overflow-auto scrollbar-hide bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-1/2 m-auto my-auto">

<h1 class=" text-white align-middle text-4xl font-bold mb-2">Register</h1> <br/>
{message && <h1  class=" text-lime-500 align-middle text-xl font-bold mb-2">{"Registered Successfully!"}</h1>}
    <div class="mb-4">
      <label class=" text-left block text-white text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" onChange={handleUsername} value={username} id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-4">
      <label class=" text-left block text-white text-grey-darker text-sm font-bold mb-2" for="username">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" onChange={handleName} value={name} id="name" type="text" placeholder="Name"/>
    </div>
    <div class="mb-4">
      <label class=" text-left block text-white text-grey-darker text-sm font-bold mb-2" for="username">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" onChange={handleEmail} value={email} id="email" type="email" placeholder="Email"/>
    </div>
    <div class="mb-4">
      <label class=" text-left block text-white text-grey-darker text-sm font-bold mb-2" for="username">
        Address
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" onChange={handleAddress} value={address} id="address" type="text" placeholder="Address"/>
    </div>
    <div class="mb-4">
      <label class=" text-left block text-white text-grey-darker text-sm font-bold mb-2" for="username">
        Location
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" onChange={handleLocation} value={location} id="location" type="text" placeholder="Location"/>
    </div>
    <div class="mb-4">
      <label class=" text-left block text-white text-grey-darker text-sm font-bold mb-2" for="username">
        User Type
      </label>
      <select class="shadow appearance-none border rounded w-full py-2 px-3" onChange={handleUserType} value={type} id="type">
      <option value="">Select User Type</option>
        <option value="1">Farmer</option>
        <option value="2">Staff</option>
      </select>
    </div>
    <div class="mb-6">
      <label class=" text-left block text-white text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" onChange={handlePassword} value={password} id="password" type="password" placeholder="******************"/>
    </div>
    <div class="mb-6">
      <label class=" text-left block text-white text-grey-darker text-sm font-bold mb-2" for="password">
        Password Confirm
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" onChange={handlePasswordConfirm} value={passwordConfirm} id="password" type="password" placeholder="******************"/>
    </div>
    <div class="flex items-center justify-between">
      <button onClick={submit} class="bg-blue hover:bg-blue-dark bg-slate-700 text-white font-bold py-2 px-4 rounded" type="button">
        Register
      </button>
      <a class="inline-block text-white align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
</div>

      </div>
  )
}
