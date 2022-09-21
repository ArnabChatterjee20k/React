import React, { useState } from "react";

const Initialisation = () => {
    // const [user, setUser] = useState()
    // const [user, setUser] = useState({})
    
    const [user, setUser] = useState({
        name:"",
        email:"",
        images:[""]

    })
    /**
     * Expecting this kind of data from api
     * user:{
        name:"",
        email:"",
        images:[""]
    }*/
  return <div>
    <h2>Details</h2>
    {/* <h1>Username is {user.name}</h1> */}
    {/* { user && <h1>Username is {user.name}</h1>} */}
    {/* <h1>Username is {user?.name}</h1> same as user && user.name */}

    <h1>Picture is {user.images[1]}</h1> 
  </div>;
};

export default Initialisation;
