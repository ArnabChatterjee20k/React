import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const List = ({getItems}) => {
    console.log("rendered")
    const [items,setItems] = useState([])
    const itemsChanged = useRef(1)

    useEffect(()=>{
        setItems(getItems())
        console.log("Updating the items. Get items changed")
        itemsChanged.current +=1;
    },[getItems])
  return (
    <>
        {items.map((item)=><div key={item}>{item}</div>)}
        <div>getItems function changed = {itemsChanged.current}</div>
    </>
  )
}

export default List