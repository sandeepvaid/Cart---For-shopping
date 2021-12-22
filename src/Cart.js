import React from 'react';
import Cartitem from './CartItem';
//Class component
const Cart = (props)=>{
    
    return (
        <div className='Cart'>
            {props.products.map((product)=>{
                return(
                    <Cartitem product={product} 
                    key= {product.id}
                    onIncreaseQty = {props.onIncreaseQty}
                    onDecreaseQty = {props.onDecreaseQty}
                    onDeleteQty = {props.onDeleteQty}
                    />
                )
            })}
        </div>
    )
    
}




export default Cart;