import React from 'react';
import CartIem  from './CartItem';
//Class component
class Cart extends React.Component{

    constructor(){
        super()
        this.state={
            products :[
                {
                    price:99,
                    title:'Realme Phone',
                    qty:0,
                    img:"",
                    id:1
                },
                {
                    price:993,
                    title:'Realme Phone',
                    qty:0,
                    img:"",
                    id:2
                },
                {
                    price:993,
                    title:'Realme Phone',
                    qty:0,
                    img:"",
                    id:3
                }
            ]
        }
    }


    render() {
        const {products} = this.state;
        // console.log(products)
        return (
            <div className='Cart'>
                {products.map((product)=>{
                    return(
                        <CartIem product={product} key= {product.id}/>
                    )
                })}
            </div>
        )
        
        
    }
}




export default Cart;