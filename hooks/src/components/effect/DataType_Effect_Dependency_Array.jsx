import React, { useEffect, useMemo, useState } from "react";

export const DataType_Effect_Dependency_Array = () => {
  const [name, setName] = useState("");
  const [state, setstate] = useState({
    name: "",
    selected: false,
  });

  /* Gonna run the effect even if the state remains same as here state is an object having same content but with different location 
    useEffect(() => {
    console.log("State changed");
  }, [state]); */

  const memoizedData = useMemo(
    () => ({
      name: state.name,
      selected: state.selected,
    }),
    // [state.name , state.selected]
    [state.name , state.selected]
  );

  useEffect(() => {
    console.log("State changed");
  }, [state.name]);

  const handleAdd = () => {
    setstate((prev) => ({ ...prev, name }));
  };

  const handleSelect = () => {
    setstate((prev) => ({ ...prev, selected: true }));
  };

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add Name</button>
      <button onClick={handleSelect}>Select</button>
      {`{
        name:${state.name},
        selected:${state.selected.toString()}
     }`}
    </div>
  );
};
