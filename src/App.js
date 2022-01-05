import React from "react";
import Cart from './Cart';
import Navbar from "./NavBar";
import firebase from "firebase/app";
import firestore from "firebase";


class  App extends React.Component {
    constructor(){
      super()
      this.state={
          products :[],
          loading:true
      }
      this.db = firebase.firestore();
  }

  //for handling firebase
  componentDidMount() {
    // firebase
      
    //   .firestore()
    //   .collection("products")
    //   .get()
    //   .then(snapshot => {
    //     const products = snapshot.docs.map(doc => {
    //       const data = doc.data();
    //       data["id"] = doc.id;
    //       return data;
    //     });
    //     this.setState({ products: products, loading: false });
    //   });


//This code basically refresh things on changing the data
    
      this.db
      .collection("products")
      .onSnapshot((snapshot)=> {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }


  //Increaase quantity event
  handleIncreaseQuantity=(product)=>{
      const {products} = this.state
      const index = products.indexOf(product);
      console.log(index);
      const docRef = this.db.collection('products').doc(products[index].id)
     
      docRef
      .update({
        qty:products[index].qty + 1
      })
      .then(()=>{
        console.log("qty is updated");
      })
      .catch((err)=>{
        console.log("Error in qty updation",err);
      })
      // this.state.products[index].qty += 1;

      // this.setState({
      //     product:product
      // })
  }


  //Decrease quantity event
  handleDecreaseQuantity=(product)=>{
      const {products} = this.state;
      const index = products.indexOf(product);
      
      const docRef = this.db.collection('products').doc(products[index].id);
      
      if( products[index].qty != 0){
        docRef
        .update({
          qty:products[index].qty-1
          
        })  
        .then(()=>{
          console.log("Decrease successfully");
        })
        .catch((err)=>{
          console.log("Error in deletion",err);
        })
      }
      

      // if(this.state.products[index].qty != 0){
      //     this.state.products[index].qty -= 1;

      // }

      // this.setState({
      //     product:product
      // })
  }

  //Delete the product
  handleDeleteProduct=(id)=>{
      
      const {products } = this.state;
      const docRef = this.db.collection('products').doc(id);

      // Delete the file
      docRef
      .delete()
      .then(() => {
        console.log("Product deleted successfully");
      }).catch((error) => {
        // Uh-oh, an error occurred!
        console.log("Error in deleting the product",err);
      });

      // const items = products.filter((item)=> item.id !== id)
      // console.log(items)
      // this.setState({
      //     products:items
      // })
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

  //Add product
  addProduct(){
  console.log("this.db");

    this.db
    .collection('products')
    .add({
      img:"",
      price:"99",
      title:"cars",
      qty:0
    })
    .then((docRef) =>{
      console.log("Product added successfullt",docRef);
    })
    .catch((err)=>{
      console.log("Error in adding prodcut",err);
    })
  }

  render(){
    const {products , loading} = this.state;
    return (
      <div className="App">
        <Navbar 
        count = {this.getCartCount()}
        price = {this.getTotalPrice()}
        />

        <a onClick={()=>this.addProduct()} style={{ padding:20 , fontSize:20 }}>Add a product</a>


        <Cart
        products = {products}
        onIncreaseQty = {this.handleIncreaseQuantity}
        onDecreaseQty = {this.handleDecreaseQuantity}
        onDeleteQty = {this.handleDeleteProduct}
        />

      {loading && <h1>Loading Products...</h1>}

        
      </div>
    );

  }
  
}

export default App;