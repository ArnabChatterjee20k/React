import React, { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const { username } = useParams()
    
    const [UserData, setUserData] = useState({});

    useEffect(()=>{
        fetch("/users.json").then(data=>{return data.json()}).then(data=>{setUserData(data[username])})
    },[username])
    return <div>
        I am a {username} 
        Name {UserData?.name}
    </div>;
}
