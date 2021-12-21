import React from 'react';

//Class component
class CartIem extends React.Component{

    //This is the way how we create states in react which act as an javascript object
    constructor(){
        //Here we use super because we have to call the parent constructor which is present in react component
        super();
        this.state = {
            price:99,
            title:'Realme Phone',
            qty:0,
            img:""
        }
    }

    //Event Handlers function
    increaseQuantity = ()=>{
        //For changing the state we use inbuilt functionality called as setState and there are two way to implement it

        //setState => It is an asynchronous call and also use batching concept but it only works when we use event handler means we dont know when that work is completed or not . To work with asnyc. call we can also use callback as second argument and also setState use the concept of batching which means if we make three calls from way1 it works only for last call by merging all calls in 1 call by shallow merging concept and rerender once but in 2nd call it works for all but rerender once .


        //Way 1 
        // this.setState({
        //     qty:this.state.qty += 1
        // });

        //way2 in that way we use the previous value to update it
        this.setState((prevstate)=>{
            return {qty:prevstate.qty + 1}
        },()=>{ //this is a callback function
            console.log('completed async call',this.state.qty)
        })
    }

    //Event handler for decrease quantity
    decreaseQuantity = ()=>{

        const {qty} = this.state;

        if(qty != 0){
            this.setState((prevstate)=>{
                return {qty : prevstate.qty - 1}
            })
        }

        
    }

    render(){
        const {price,title,qty,img} = this.state;
        return (
            <div className='cart-item'>
                <div style={styles.mainCart} className="cart-container">
    
                    <div className="left-part">
                        <img style={styles.image} />
                    </div>

                    <div className="right-part">
                        <div style={styles.detail}>{title}</div>
                        <div style={styles.detail}>Rs {price}</div>
                    </div>

                    <div className="action-button">

                        <div className="upper-part">
                            <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
                        </div >

                        <div className="lower-part">
                            {/*Here we use bind so that when we call that function we can access that object value or we can use arrow function*/}
                            <button onClick={this.increaseQuantity} className="action-icons">
                                +
                            </button>
                            <span className="action-icons">
                                {qty}
                            </span>
                            <button onClick={this.decreaseQuantity} className="action-icons">
                                -
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}


//styles for jsx

const styles = {

    detail:{
      padding:5,
      fontSize:25,
      color:"grey",
      marginBottom:10
    },
  
    image:{
      height:150,
      width:150,
      borderRadius:4
    }
  }
  

export default CartIem;