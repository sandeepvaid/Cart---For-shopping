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

    //Increaase quantity event
    handleIncreaseQuantity=(product)=>{
        
        const index = this.state.products.indexOf(product);
        
        this.state.products[index].qty += 1;

        this.setState({
            product:product
        })
    }


    //Decrease quantity event
    handleDecreaseQuantity=(product)=>{
        
        const index = this.state.products.indexOf(product);
        
        if(this.state.products[index].qty != 0){
            this.state.products[index].qty -= 1;

        }

        this.setState({
            product:product
        })
    }

    //Delete the product
    handleDeleteProduct=(id)=>{
        
        const {products} = this.state;
        const items = products.filter((item)=> item.id !== id)
      
        this.setState({
            products:items
        })
    }

    render() {
        const {products} = this.state;
        
        return (
            <div className='Cart'>
                {products.map((product)=>{
                    return(
                        <CartIem product={product} 
                        key= {product.id}
                        onIncreaseQty = {this.handleIncreaseQuantity}
                        onDecreaseQty = {this.handleDecreaseQuantity}
                        onDeleteQty = {this.handleDeleteProduct}
                        />
                    )
                })}
            </div>
        )
        
        
    }
}




export default Cart;