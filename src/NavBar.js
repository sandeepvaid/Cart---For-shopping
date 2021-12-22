import React from 'react';

//Class component
const Navbar=(props) =>{
        
        return(
            <div className='shopping-cart'>
                <p>Total Price: &#36;{props.price}</p>
                <span>{props.count}</span>
                <img src='https://cdn-icons-png.flaticon.com/512/3643/3643914.png' alt='shop-cart'/>
                
            </div>
        )
   
}

export default Navbar;