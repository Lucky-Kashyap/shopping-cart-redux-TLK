import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = () => {
    const[products,setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchProducts();
    },[]);


    const fetchProducts = async()=>{
        const data = await fetch('https://dummyjson.com/products');
        const json = await data.json();

        // console.log(json.products);

        setProducts(json.products);
    }
    

    const handleAdd = (product)=>{
        toast.success('Add To Cart!',{
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",});

        dispatch(add(product));
        
    }


  return (
    <div className='productsWrapper'>
        {
            products?.map(product=>(
                <div className='card' key={product.id}>
                    <img className='card-image' src={product?.thumbnail} alt='Not Found'/>
                    <h4>{product?.title}</h4>
                    <p>{product?.description}</p>
                    <h5>{product?.price}</h5>
                    <button onClick={()=>handleAdd(product)} className='btn'>Add To Cart</button>
                    <ToastContainer position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"> </ToastContainer>
                </div>
            ))
        }
    </div>
  )
}

export default Products