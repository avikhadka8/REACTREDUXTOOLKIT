import React,{useState,useEffect} from 'react'
import {add} from '../store/cartSlice'
import { useDispatch } from 'react-redux'

const Products = () => {
    const [products,setProducts] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
     const fetchProducts = async ()=>{
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        console.log(data)
        setProducts(data)
     }
     fetchProducts()
    },[])

    const handleAdd = (product)=>{
        dispatch(add(product))
    }
  return (
    <div className='productsWrapper'>
      {
        products.map((product)=>(
            <div className="card" key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h3>${product.price}</h3>
                <button className='btn' onClick={()=>handleAdd(product)}>Add to cart</button>
            </div>
        ))
      }
    </div>
  )
}

export default Products