import React from "react";
import Cart from './Cart';
import Navbar from "./NavBar";

class  App extends React.Component {
    constructor(){
      super()
      this.state={
          products :[
              {
                  price:99,
                  title:'Realme Phone',
                  qty:0,
                  img:"https://image01.realme.net/general/20211008/1633694162498.png",
                  id:1
              },
              {
                  price:993,
                  title:'watch',
                  qty:0,
                  img:"https://www.citizenwatch.com/dw/image/v2/BBQB_PRD/on/demandware.static/-/Sites-citizen_US-Library/default/dwf283c93f/homepage-images/hero-images/HP-hero-navihawk.jpeg",
                  id:2
              },
              {
                  price:993,
                  title:'Macbook',
                  qty:0,
                  img:"https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_SG?wid=1280&hei=1190&fmt=jpeg&qlt=80&.v=1632948873000",
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
      console.log(items)
      this.setState({
          products:items
      })
  }
  
  //Get quantity count
  getCartCount=()=>{
    const {products} = this.state;
    let count = 0;

    products.forEach((product)=>{
      count += product.qty
    })

    
    return count;
  }

  //Get total price
  getTotalPrice = () =>{
    const {products} = this.state;
    let price = 0;

    products.forEach((product)=>{
      price += product.price * product.qty
    });
    
    return price;
  }

  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar 
        count = {this.getCartCount()}
        price = {this.getTotalPrice()}
        />

        <Cart
        products = {products}
        onIncreaseQty = {this.handleIncreaseQuantity}
        onDecreaseQty = {this.handleDecreaseQuantity}
        onDeleteQty = {this.handleDeleteProduct}
        />

        
      </div>
    );

  }
  
}

export default App;