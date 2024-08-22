import axios from 'axios';
import React, { useEffect, useState } from 'react';
const Data = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [editId,seteditId]=useState(null);
  
  const getData = () => {
    axios
      .get("https://66c72498732bf1b79fa57fc1.mockapi.io/crud")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getData();
  },[]);

  const handleForm = (e) => {
    e.preventDefault();
     
      if(editId){
        axios.put(`https://66c72498732bf1b79fa57fc1.mockapi.io/crud/${editId}`,formData)
        .then(
          response=>{
         setUsers(users.map(user=>(user.id===editId)?response.data:user));
           seteditId(null);
           setFormData({
            name:"",
            email:"",
            phone:""
           })
          }
        )
        .catch(error=>console.log(error))
      }
      else{
     axios
        .post("https://66c72498732bf1b79fa57fc1.mockapi.io/crud", formData)
        .then(response => {
          setUsers([...users, response.data]);
          setFormData({ name: "", email: "", phone: "" });
        })
        .catch(error => console.error(error));}
    
    
  };
   

  const handleEdit=(id)=>{
    console.log(id);
    const user=users.find(user=>(user.id===id));
    setFormData({
      name:user.name,
      email:user.email,
      phone:user.phone
    })
    seteditId(id);

  }
  const handleDelete=(id)=>{
    axios
    .delete(`https://66c72498732bf1b79fa57fc1.mockapi.io/crud/${id}`)
    .then(
      response=>{
        setUsers(users.filter(user=>user.id!==id));
      }
    )
    .catch(error=>console.log(error))
  }
  const handleChange = (e) => {
    setFormData(prevForm => ({
      ...prevForm,
      [e.target.name]: e.target.value
    }));
  };


  return (
    <div>
      <form onSubmit={handleForm}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        <label>Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        <label>Phone</label>
        <input type="number" name="phone" value={formData.phone} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      {users.map((data) => (
        <ul key={data.id}>
          <li>{data.id}</li>
          <li>{data.name}</li>
          <li>{data.phone}</li>
          <li>{data.email}</li>
          <button onClick={()=>handleEdit(data.id) }>Edit</button>
          <button onClick={()=>handleDelete(data.id)} >Delete</button>

        </ul>
      ))}

      
    </div>
  );
};

export default Data;
