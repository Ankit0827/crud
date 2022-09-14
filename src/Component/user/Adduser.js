import axios from "axios";
import React, { useState } from "react";
import{useNavigate} from "react-router-dom"

const Adduser = () => {
  let navigate=useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const {name,username,email,phone}=user;
  const onInputchange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  };
   const onSubmit=async (e)=>{
  e.preventDefault();
  await axios.post("http://localhost:3001/users",user);
  navigate("/");
}
  return (
    <div className="adduser col-6 m-5 card p-5 bg-primary text-white">
      <form onSubmit={e=>onSubmit(e)}>
        <div>
          <label>Name</label>
          <br />
          <input
            className="input-Name"
            type="text"
            placeholder="Enter name"
            name="name"
            value={name}
            onChange={e=>onInputchange(e)}
          />
        </div>
        <br />
        <div>
          <label className="">Username</label>
          <br />
          <input
            className="input-Name"
            type="text"
            placeholder="Enter name"
            name="username"
            value={username}
            onChange={e=>onInputchange(e)}
          />
        </div>
        <br />
        <div>
          <label>Email</label>
          <br />
          <input 
          className="input-email" 
          type="email" 
          placeholder="Email"
          name="email"
          value={email}
          onChange={e=>onInputchange(e)} 
          />
        </div>
        <br />
        <div>
          <label>Phone</label>
          <br />
          <input 
          className="input-email" 
          type="text" 
          placeholder="Address" 
          name="phone"
          value={phone}
          onChange={e=>onInputchange(e)}
          />
        </div>
        <br></br>
        <button className="btn btn-dark">submit</button>
      </form>
    </div>
  );
};

export default Adduser;
