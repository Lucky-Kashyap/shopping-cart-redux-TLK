import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { remove } from '../store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    const dispatch = useDispatch();
    const product = useSelector(state=> state.cart);
    const handleRemove = (productId) => {
        toast.warning('Item Removed!',{position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",});

        dispatch(remove(productId));
    };
  return (

    <div>
        <h3>Cart</h3>
        {product.length==0?'Your Cart is Empty':
        <div className='cartWrapper'>
            {
                product?.map(prod=>(
                    <div className='cart-product' key={prod.id}>
                        <img className='cart-image' src={prod.thumbnail} alt='not found'/>
                        <h5>{prod.title}</h5>
                        <p>{prod.description}</p>
                        <h5>{prod.price}</h5>
                        <button onClick={() => handleRemove(prod.id)} className='btn-remove'>Remove</button>
                        <ToastContainer position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"> </ToastContainer>
                        </div>
                ))
            }
        </div>
}
    </div>
  )
}

export default Cart