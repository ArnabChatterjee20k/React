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

    const [products , setProducts]=useState([
        {id:1,title:"black sneaker",quantity:1},
        {id:2,title:"red sneaker",quantity:1},
        {id:3,title:"white sneaker",quantity:1}
    ])

    const[selectedProductId,setSelectedProductId]=useState(null);

    // choosing selectedProduct based on the selected product id.
    const selectedProduct = products.find((p)=>p.id===selectedProductId)
    
    const increament=(id)=>{
        setProducts(prev=>{
            return prev.map((product)=>{
                if(product.id === id){
                    return {...product,quantity:product.quantity+1};
                }
                else return product
            })
        })
    }

    const handleChoose = (id)=>{
        setSelectedProductId(id)
    }
  return (
    <div style={style}>
        <h4>All products`</h4>
        {products.map(({title,id,quantity})=>(
            <div key={id}>
                <span>
                    {title}
                    <button onClick={()=>handleChoose(id)}>Choose</button>
                </span>
                <div>
                    <button>-</button>
                    <span>{quantity}</span>
                    <button onClick={()=>increament(id)}>+</button>
                </div>
            </div>
        ))}
        <h4>Selected Product</h4>
        <span>{selectedProduct?.title}</span>
        <span>{selectedProduct?.quantity}</span>
    </div>
  )
}

export default DerivedStates