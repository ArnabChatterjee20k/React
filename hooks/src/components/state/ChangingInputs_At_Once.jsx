import { useState } from "react";

const ChangingInputs_At_Once = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    city: "",
    country: "",
  });

  const handleChange = (e)=>{
    setUser(user=>({...user,[e.target.name]:e.target.value}))
  }
  return (
    <>
      <div>Changing all inputs</div>
      <input onChange={handleChange} name="name" type="text" placeholder="name" />
      <input onChange={handleChange} name="surname" type="text" placeholder="surname" />
      <input onChange={handleChange} name="city" type="text" placeholder="city" />
      <input onChange={handleChange} name="country" type="text" placeholder="country" />
    </>
  );
};

export default ChangingInputs_At_Once;
