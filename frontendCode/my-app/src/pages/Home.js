import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function Home() {

    const[ users, setUser]=useState([]);

    useEffect(()=>{
        // console.log("Hello world")
    //    try {
        
    //     const response = await axios.get(`http://localhost:8080/getAllUsers`);
    //     console.log(response);

    //    } catch (error) {
    //     console.log(error);
    //    }
    loadUsers();
    },[]);

    const loadUsers=async()=>{

        const result = await axios.get("http://localhost:8080/getAllUsers");
        console.log(result);
        setUser(result.data);
        console.log(users);
    };


  return (
    <div  className='container'>

        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    

        {
            users.map((user, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                );
            })
        }
      
    
    
  </tbody>
</table>

        </div>
        
    </div>
  )
}
