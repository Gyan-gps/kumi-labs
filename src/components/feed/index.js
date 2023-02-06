import { Box } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { products } from '../../constant/Product'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../redux/action'
const sectext = ["Produce",
    "Prepared foods",
    "Canned foods & Soups",
    "Produce",
    "Bakery",
    "Diary & Eggs",
    "Frozen",
    "Meat & Seafood",
    "Bakery",
    "Diary & Eggs",
    "Prepared foods",
    "Canned foods & Soups",
    "Produce",
   "Bakery",
    "Diary & Eggs",
    "Frozen",
    "Meat & Seafood"
]
const Feed = () => {

    const [productsARR,setProductARR] = useState(products);
    const dispatch = useDispatch();

    const addToCart = (product) =>{
        
        setProductARR((prev)=>prev.map((data)=>data.id!==product.id ? data:{...data,isCart:true}))
        dispatch({
            type:ADD_TO_CART,
            payload:product
        })
    }
    
    const removeFromCart = (product) =>{
        setProductARR((prev)=>prev.map((data)=>data.id!==product.id ? data:{...data,isCart:false}))
        dispatch({
            type:REMOVE_FROM_CART,
            payload:product
        })
    }

  return (
    <Box id="productBody">
      {sectext.map((text,i)=>{
        return <section id={text.toLowerCase()}>
            <div className='section'>{text} {">"}</div>
            <div className='product'>
                {
                    productsARR.map((product)=>{
                        return<div className='card'>
                            <div style={{position:"relative"}}><img className='img' src={product.img} alt={product.name} height="120px"/>
                            {product.isCart?<button className='btn-cart' onClick={()=>removeFromCart(product)}>-</button>:<button className='btn-cart' onClick={()=>addToCart(product)}>+</button>}
                            </div>
                            <div  className='price'>{product.price}</div>
                            <div className='name'>{product.name}</div>
                            <div className='weight'>{product.weight}</div>
                        </div>
                    })
                }
                {
                    productsARR.map((product)=>{
                        return<div className='card'>
                            <div style={{position:"relative"}}><img  className='img' src={product.img} alt={product.name}  height="120px"/>
                            {product.isCart?<button className='btn-cart' onClick={()=>removeFromCart(product)}>-</button>:<button className='btn-cart' onClick={()=>addToCart(product)}>+</button>}
                            </div>
                            <div  className='price'>{product.price}</div>
                            <div className='name'>{product.name}</div>
                            <div className='weight'>{product.weight}</div>
                        </div>
                    })
                }
                {/* {
                    productsARR.map((product)=>{
                        return<div className='card'>
                            <div style={{position:"relative"}}><img className='img' src={product.img} alt={product.name} height="120px"/>
                            {product.isCart?<button className='btn-cart' onClick={()=>removeFromCart(product)}>-</button>:<button className='btn-cart' onClick={()=>addToCart(product)}>+</button>}
                            </div>
                            <div  className='price'>{product.price}</div>
                            <div className='name'>{product.name}</div>
                            <div className='weight'>{product.weight}</div>
                        </div>
                    })
                } */}
            </div>
        </section>
      })}
    </Box>
  )
}

export default Feed
