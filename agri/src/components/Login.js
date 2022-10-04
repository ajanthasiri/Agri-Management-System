import React from 'react';
import { useState } from 'react';
import { axios } from 'axios';

export default function Login() {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const handleUsername=(e)=>{
    setUsername(e.target.value);
  }
  const handlePassword=(e)=>{
    setPassword(e.target.value);
  }
  const submit=(e)=>{
    console.log(username,password);
  }
  return (
    <div> <br/>
        
<div class=" bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-4/5 m-auto my-auto">
<h1 class=" text-white align-middle text-4xl font-bold mb-2">Login</h1> <br/>
    <div class="mb-4">
      <label class="block text-white text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" onChange={handleUsername} value={username} id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-white text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" onChange={handlePassword} value={password} id="password" type="password" placeholder="******************"/>
    </div>
    <div class="flex items-center justify-between">
      <button onClick={submit} class="bg-blue hover:bg-blue-dark bg-slate-700 text-white font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button>
      <a class="inline-block text-white align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
</div>

      </div>
  )
}
