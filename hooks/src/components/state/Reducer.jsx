import { useState } from "react"

const DerivedStates = () => {
    const style = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        gap:"10px",
        padding:"1em"
    }

    const [product , setProduct]=useState({
        title:"",
        desc:"",
        price:0,
        category:"",
        tags:[],
        images:{
            sm:"",
            md:"",
            lg:""
        },
        quantity:0
    })
  return (
    <div style={style}>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="desc" />
            <input type="number" placeholder="price" />
            <p>Category:</p>
            <select name="" id="">
                <option value="sneakers">Sneakers</option> 
                <option value="sneakers">Shoe</option> 
                <option value="sneakers">Sandl</option> 
            </select>
            <p>Tags:</p>
            <input type="text" placeholder="separate tags by commas"/>
            <div style={{display:"flex",gap:"10px"}}>
                <button>-</button>
                <p>Quantity({product.quantity})</p>
                <button>+</button>
            </div>
    </div>
  )
}

export default DerivedStates